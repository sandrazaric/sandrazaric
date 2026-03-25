**To deploy to GitHub Pages:**

1. Run `npm run build` - this creates an `out/` folder with static HTML/CSS/JS
2. Push the `out/` folder contents to your GitHub repo's `gh-pages` branch, or configure GitHub Pages to serve from the `out/` folder
3. If your repo is at `username.github.io/repo-name` (not the root), uncomment the `basePath` line in `next.config.mjs` and set it to `/your-repo-name`


The images are already set to `unoptimized: true`, which is required for static export since Next.js Image Optimization needs a server.

To start locally:
npm run build
npx serve@latest out