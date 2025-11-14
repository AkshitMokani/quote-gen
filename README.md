<<<<<<< HEAD
# quote-gen
Quote Generator Farcaster mini App
=======
# QuoteGen — Farcaster MiniApp (Next.js App Router)

This repository is a Next.js App Router starter project for a Farcaster MiniApp that generates blockchain quotes.

**Important:** This ZIP contains a placeholder `public/data/blockchain_quotes_500.json` with a small sample. Replace that file with the full `blockchain_quotes_500.json` (the 500-quote pack) in the same path before deploying.

## How to use

1. Unzip and open the project.
2. Replace `public/data/blockchain_quotes_500.json` with the full 500-quote JSON you have.
3. Edit `public/farcaster.json` and `public/fc-miniapp-meta.html` to set your deployed domain and image.
4. Install deps and run locally:
   ```bash
   npm install
   npm run dev
   ```
5. Deploy to Vercel:
   - Push to GitHub
   - Import the repo in Vercel dashboard (Framework: Next.js)
   - Build & Deploy
6. After deploy, add your deployed domain to Farcaster MiniApp allowed origins (Farcaster dev dashboard).

## Project structure highlights
- `app/` — Next.js App Router pages and layout
- `components/` — UI components
- `public/data/blockchain_quotes_500.json` — **PLACEHOLDER**: replace with full JSON
- `public/farcaster.json` — MiniApp manifest (edit url/image)

>>>>>>> 2bbb09c (Initial commit)
