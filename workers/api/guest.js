export const GUEST_FORMATS = ['Blog', 'Story', 'Comic'];
const TRIALS_PER_FORMAT = 2;
const IMAGE_ATTEMPTS = 13;

export class GuestSession {
  constructor(state) {
    this.storage = state.storage;
  }

  async fetch(request) {
    const action = new URL(request.url).pathname;
    const body = await request.json();
    return this.storage.transaction(async (storage) => {
      const state = await storage.get('session');
      if (action === '/create' && !state) {
        await storage.put('session', { Blog: 0, Story: 0, Comic: 0 });
        return Response.json({ exhausted: {} });
      }
      if (!state) return Response.json({ error: 'Guest session is invalid.' }, { status: 401 });
      if (action === '/status') {
        const exhausted = Object.fromEntries(GUEST_FORMATS.map((format) => (
          [format, state[format] >= TRIALS_PER_FORMAT]
        )));
        return Response.json({ exhausted });
      }

      if (action === '/reserve') {
        const { format, generationId } = body;
        if (state[format] >= TRIALS_PER_FORMAT) {
          return Response.json({
            error: `You’ve used both guest ${format.toLowerCase()} generations.`,
            code: 'GUEST_LIMIT',
          }, { status: 403 });
        }
        state[format] += 1;
        await storage.put('session', state);
        await storage.put(generationId, { format });
        return Response.json({ remaining: TRIALS_PER_FORMAT - state[format] });
      }

      const generation = await storage.get(body.generationId);
      if (!generation) return Response.json({ error: 'Unknown guest generation.' }, { status: 403 });
      if (action === '/refund' && !generation.images) {
        state[generation.format] -= 1;
        await storage.put('session', state);
        await storage.delete(body.generationId);
        return Response.json({});
      }
      if (action === '/complete' && !generation.images) {
        generation.images = body.prompts.map((prompt) => ({ prompt, attempts: 0, complete: false }));
        await storage.put(body.generationId, generation);
        return Response.json({ remaining: TRIALS_PER_FORMAT - state[generation.format] });
      }

      const image = generation.images?.[body.index];
      if (action === '/image' && image && !image.complete && image.attempts < IMAGE_ATTEMPTS
        && !(image.inFlightUntil > Date.now())) {
        image.attempts += 1;
        image.inFlightUntil = Date.now() + 90_000;
        await storage.put(body.generationId, generation);
        return Response.json({ prompt: image.prompt, attempt: image.attempts });
      }
      if (action === '/image-finish' && image?.attempts === body.attempt) {
        image.complete = body.success;
        delete image.inFlightUntil;
        await storage.put(body.generationId, generation);
        return Response.json({});
      }
      return Response.json({ error: 'Guest illustration is unavailable.' }, { status: 403 });
    });
  }
}

export async function guestSessionRequest(session, action, body = {}) {
  const response = await session.fetch(`https://guest.internal/${action}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  const result = await response.json();
  if (!response.ok) {
    throw Object.assign(new Error(result.error), { status: response.status, code: result.code });
  }
  return result;
}
