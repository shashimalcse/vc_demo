## Verifiable Credentials Demo

This is a Next.js 16 app for demonstrating verifiable credential issuance and a placeholder verification flow.

## Local Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

The issuance page reads a single public credential definition from environment variables:

```bash
NEXT_PUBLIC_CREDENTIAL_NAME
NEXT_PUBLIC_CREDENTIAL_DESCRIPTION
NEXT_PUBLIC_CREDENTIAL_OFFER_URI
NEXT_PUBLIC_CREDENTIAL_TYPE
```

Copy `.env.example` to `.env.local` and replace the example values with your actual OID4VCI credential offer data.

If the variables are missing, the site still builds and the issuance page shows a fallback "No credential configured" state.

## Production Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the framework preset as `Next.js`.
4. Set the project root to the repository root.
5. Add the four `NEXT_PUBLIC_CREDENTIAL_*` variables in Vercel for Preview and Production.
6. Deploy `main` to your default `*.vercel.app` domain.

After deployment, verify:

- `/` loads correctly
- `/issuance` shows the configured credential and QR code
- `/verification` loads the placeholder verification page
