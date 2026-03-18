# Run Guide

## Install dependencies

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
```

## Start local development server

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
```

Then open:

- `http://localhost:3000`

## Production build check

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run build
```

## Current routes

- `/`
- `/curriculum/3/unit/2/week/1`
- `/word/probably`
- `/practice/today`
- `/review`
- `/parent`
- `/import`

## Install as a web app

After `run dev` starts, open the site in Chrome or Edge:

- `http://localhost:3000`

Then use the browser install option:

- Chrome: address bar install icon or `Save and share -> Install page as app`
- Edge: menu `Apps -> Install this site as an app`

## Notes

- Progress is currently stored in browser `localStorage`
- The current project uses local seed data rather than a full database
- The UI has been localized to Chinese, but the English target words remain visible as learning content
- A minimal service worker and manifest have been added so it can behave like an installable web app
