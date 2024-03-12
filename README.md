# InterVue App - Web Components (Vite + Vue + TypeScript + i18n)

### TL;DR - Step by Step guide

Here you will find two directories: `vite-app` and `test-html`

#### Open _**Vite**_ project

1. Go to directory: `cd vite-app`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
   _(to develop components)_
4. Build web components: `npm run build`
   _(lib files are now exported to the /dist folder)_

#### Switch to the _**Test**_ directory:

1. Go to directory: `cd vite-app`
2. Install dependencies: `npm install`
3. Run local server: `npm run serve`
   _(to check if index.html imports web components correctly)_
4. Run Playwright tests: `npm run test`
   _(to run all the tests using Playwright UI mode)_

## Vite App

_Vite/Vue application for developing Web Components_
**Commands**

- `npm run dev` - runs local Dev server
- `npm run build` - builds web components and TailwindCSS styles to the `/dist` folder

## Test HTML

_For testing Web Components integration_
**Commands**

- `npm run test` - spins up dev server and starts Playwright UI
- `npm run serve` - runs dev server and serve local files

## Web Components

- `<locale-picker />` - allows locale changing between 'en' and 'fr'
- `<metrics-display />` - shows current counter value
- `<control-buttons />` - increment / decrement counter value buttons by 1
- `<control-pane />` - reset counter value button to null

### TODO
