# Textify

Textify is an AI content studio for turning ideas into polished content. It helps users create blog posts, stories, comics, and generated visuals in a single workflow.

## What Textify does

- Generate blog content from a topic or idea
- Create story-based content with themes and narrative structure
- Build comic-style output with multiple scenes and image prompts
- Generate custom images from text prompts
- Format and rewrite text for different channels and tones
- Save generation history for signed-in users

## Product overview

Textify combines a React frontend with a Cloudflare Worker backend. The app uses Firebase for authentication and app configuration, Firestore for saved user history, and Supabase Storage for generated image files.

## Tech stack

- Frontend: React
- Auth/config: Firebase
- Backend APIs: Cloudflare Worker
- Datastore: Firestore
- Image storage: Supabase Storage
- AI providers: Gemini and Pollinations

## Features in the app

- Multi-format content generation: Blog, Story, Comic
- Text formatting and generation for social and marketing use cases
- Image generation with prompt-based creation
- Copy and read-aloud functionality for generated output
- History panel for revisiting saved work
- User sign-in and account-based generation storage

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

```bash
npm run worker:deploy
```

Set the required secrets in Cloudflare:

```bash
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put POLLINATIONS_API_KEY
npx wrangler secret put PEXELS_API_KEY
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
