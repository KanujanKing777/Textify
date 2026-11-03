# Textify

**Textify** is an AI-powered, ready-to-publish content generator.  

It can generate content in multiple formats, including:  
- Blog posts  
- Pexels stock videos  
- PDFs  
- And more  

Leverage **Textify** to create high-quality, formatted content instantly, saving time and effort.

## Backend and authentication

Text generation, blog generation, image generation, and Pexels video search run through a Cloudflare Worker. Provider API keys are server-side Worker secrets and must not be added to `REACT_APP_*` variables or committed to the repository. The frontend remains hosted on Firebase Hosting.

### Firebase web app setup

1. In Firebase Console, add a Web App to the existing Firebase project and enable Email/Password and Google under **Authentication → Sign-in method**.
2. Add the web app configuration to a local `.env` file using [.env.example](./.env.example) as a template. Set `REACT_APP_API_BASE_URL` to the Worker URL after deploying it; use `http://127.0.0.1:8787` for local Worker development.
3. Add the Firebase Hosting domains and any local development origins to `ALLOWED_ORIGINS` in [wrangler.jsonc](./wrangler.jsonc).

Firebase web app configuration values are intended to be public client configuration. The Worker validates Firebase ID tokens; it does not trust a client-supplied user ID.

### Run the Worker locally

Install dependencies, then run:

```sh
npm run worker:dev
```

For local development, copy [.dev.vars.example](./.dev.vars.example) to `.dev.vars` and fill in newly issued provider keys. `.dev.vars` is ignored by Git:

```sh
Copy-Item .dev.vars.example .dev.vars
```

`FIREBASE_PROJECT_ID` is configured in `wrangler.jsonc` and must match the Firebase project used by the frontend. The `ALLOWED_ORIGINS` value must include the exact frontend origin(s).

### Deploy the Worker

After signing in to Cloudflare and linking this project to the intended account, deploy the Worker:

```sh
npm run worker:deploy
```

Set the provider secrets in the target Cloudflare environment:

```sh
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put POLLINATIONS_API_KEY
npx wrangler secret put PEXELS_API_KEY
```

Then set `REACT_APP_API_BASE_URL` to the deployed Worker URL and rebuild/redeploy the Firebase frontend.

### Credential rotation

Any provider keys previously placed in frontend source, build output, or shared files should be revoked and replaced in their provider consoles. Do not reuse those exposed values as Worker secrets. Configure only newly issued keys with Wrangler.
