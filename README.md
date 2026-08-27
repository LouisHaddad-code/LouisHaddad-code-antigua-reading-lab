# Antigua Cognate Reading Lab

A static React learning activity for reading Spanish through cognates and context. It contains guided reading clues, guessing cards, false-friend reminders, and a scored quick check.

## Local development

Run `npm.cmd install` once, then `npm.cmd run dev`. Use `npm.cmd run lint` and `npm.cmd run build` before publishing. Preview the production output with `npm.cmd run preview`.

## Deployment

The Vite base is configured for `/antigua-reading-lab/`. The GitHub Actions workflow publishes the `dist` folder to GitHub Pages whenever `main` changes. In the repository Pages settings, select **GitHub Actions** as the deployment source.
