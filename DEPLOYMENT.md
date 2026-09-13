# BISWA Web3 Hub — Production Starter

The public site is ready as a static starter. For the real production version, connect the content model to a secure Next.js + Supabase admin dashboard and deploy on Vercel.

## Fastest live path
1. Create a GitHub repository.
2. Upload the contents of this folder.
3. Import the repository into Vercel.
4. Deploy and use the free `.vercel.app` URL.
5. Add a custom domain later if desired.

## Production admin architecture
- Next.js frontend
- Supabase database + Auth + Storage
- Protected `/admin`
- CRUD for achievements, projects, tweets, proof and timeline
- Draft/publish workflow
- No service keys exposed to the browser
