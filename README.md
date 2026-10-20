# Gym website template (Next.js)

A one-page gym website. All content lives in `src/config/site.ts`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Personalise it for a gym

1. Open `src/config/site.ts`.
2. Change the brand name, accent colour, address, hours, phone and WhatsApp number (digits only, e.g. `919847000000`).
3. Replace every `[PLACEHOLDER]` with real details (prices, trainer names, timetable).
4. Photos: put files in `public/` and reference them, e.g. `hero.image: "/gym.jpg"`, trainer `image: "/coach1.jpg"`. Only use photos you have permission to use.
5. Map: on Google Maps choose Share, then Embed a map, and paste the `src` URL into `mapEmbedUrl`.
6. Set `showSampleBanner: false` for a final site.

The free trial form opens WhatsApp with the enquiry pre-filled, so no backend is needed.

## Deploy

Push to GitHub and import the repo in Vercel (free plan is fine), or run `npm run build && npm start`.

## Checks

```bash
npm run typecheck
npm run build
```
