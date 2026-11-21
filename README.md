# Textify

Textify is an AI content studio for creating illustrated blog posts, stories, comics, standalone images, and social copy.

## What Textify does

| Mode | Available controls and output |
| --- | --- |
| **Blog** | Start with a topic, choose a length and writing style, and generate a formatted article with illustrations and captions. |
| **Story** | Start with an idea, choose a length, and combine preset and custom themes to generate an illustrated story with chapters. |
| **Comic** | Choose themes and generate 1 to 32 illustrated pages. Open a page in the enlarged viewer and browse the sequence. |
| **Text** | Generate copy from a prompt or format existing text for WhatsApp, Discord, Instagram, or Twitter. Formatting controls include tone, emoji use, and length. |
| **Image** | Generate a standalone image from a prompt, choose an image model, and download the result. |

You can copy generated text, listen to blog and story output with browser text-to-speech, and open formatted blog and story output in a new tab.

Select **Try now** to generate two blogs, two stories, and two comics per browser without signing in. The Worker tracks each format’s quota in a Cloudflare Durable Object. Text, standalone Image, and saved history require an account. Sign in with email and password or Google to reopen prior generations and see their saved inputs, settings, output, and stored images.

## Tech stack

The frontend uses React and Vite. A Cloudflare Worker calls Gemini for text and Pollinations for images. Firebase Authentication handles sign-in, Firestore stores generation history, and Supabase Storage holds saved images.

## Local setup

### 1. Install dependencies

Use Node 22.13 or newer on a supported LTS line.

```bash
npm ci
```

### 2. Configure environment variables

Create a local `.env` file using [.env.example](./.env.example) as the template.

Required frontend variables include:

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN`
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_APP_ID`
- `REACT_APP_API_BASE_URL`
- `REACT_APP_SUPABASE_URL`
- `REACT_APP_SUPABASE_PUBLISHABLE_KEY`

For local development with Wrangler, set `REACT_APP_API_BASE_URL=http://127.0.0.1:8787` in `.env.development.local`.

### 3. Run the frontend

```bash
npm start
```

### 4. Run the Worker locally

Copy [.dev.vars.example](./.dev.vars.example) to `.dev.vars` and add your provider keys.

```bash
Copy-Item .dev.vars.example .dev.vars
```

Then start the Worker:

```bash
npm run worker:dev
```

## Deployment

### Deploy the Worker

Deploy the Worker before the updated frontend so the guest session endpoints and Durable Object migration are live when visitors select **Try now**.

```bash
npm run worker:deploy
```

Set the generation secrets in Cloudflare:

```bash
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put POLLINATIONS_API_KEY
```

Then update `REACT_APP_API_BASE_URL` to the deployed Worker URL and rebuild/redeploy the frontend.

## Firebase and storage setup

- Enable Firebase Authentication for the web app
- Enable Firestore for user history storage
- Configure allowed frontend origins in [wrangler.jsonc](./wrangler.jsonc)
- Create the `textifybucket` bucket in Supabase and run [the storage policy migration](./supabase-storage-policies.sql). It makes the bucket private, caps images at 8 MiB, and limits access to the Firebase owner. History entries saved by Textify retain their object paths, which the frontend uses to request short-lived signed URLs. Previously cached public copies can persist until their cache entries expire.
- Enable [the Firebase Auth integration](https://supabase.com/docs/guides/auth/third-party/firebase-auth) in Supabase. Assign `role: 'authenticated'` to existing users and configure trusted server-side provisioning of that claim for new users. The claim needs to be in the Firebase ID token before the user's first image save. Keep custom claim credentials server-side.
- Have users with older ID tokens sign in again after claim provisioning.
- Keep the Firebase project ID aligned across the frontend environment, Worker configuration, hosting target, and storage policy. Update the Hosting content security policy if you use a custom Worker, Firebase Auth, or Supabase domain.

## Release checks

```bash
npm ci
npm test
npm run test:security
npm audit --audit-level=low
npm run build
npm run worker:deploy -- --dry-run
firebase emulators:exec --only firestore,hosting --project demo-textify "node --test tests/firestore.security.test.mjs tests/hosting.security.test.mjs"
```

Verify the deployment in a staging project with two accounts. Confirm that each account can save and reload its own history and images, Firestore rejects the other account's history, and Supabase rejects anonymous and cross-account reads and uploads. Verify email/password and Google login under the deployed Hosting headers. Check Cloudflare's rate limit binding IDs for collisions in your account and set provider spending limits. The Worker limits are approximate and enforced per Cloudflare location.

## Important launch notes

- Revoke any Gemini provider keys still active from older revisions of `src/api.js` and `src/alwaysking.txt`. Replace the keys in Cloudflare Worker secrets and review recent Gemini usage.
- Never commit `.env`, `.dev.vars`, or provider keys to source control
- Keep API keys in Cloudflare secrets or the proper provider consoles, not in frontend code
- Validate Firebase auth, Firestore rules, Supabase policies, and Cloudflare origin allowlists before public launch
