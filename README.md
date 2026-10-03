# Helios Initiative — Alliance Homepage

Public-facing website for **Helios Initiative**, the PvP sub-alliance of [The Republic](https://republic-alliance.com) in [Eve Online](https://www.eveonline.com). Covers the alliance mandate, doctrine, roster, and enlistment requirements.

## Stack

- **React 19** + **Vite** — SPA with two routes (`/` and `/enlist`)
- **React Router** — `BrowserRouter`, served with an Nginx SPA fallback
- **Tailwind CSS v4** — base layer; site styles live in `helios/src/styles/helios.css`

## Prerequisites

- [Node.js](https://nodejs.org) 20+
- [Docker](https://www.docker.com) (for container builds)

## Local Development

```bash
cd helios
npm install
npm run dev
```

## Production Build

```bash
cd helios
npm run build       # outputs to helios/dist
npm run preview     # preview the built output locally
```

## Docker

Build and run the Nginx container locally:

```bash
docker build -t helios-initiative-web .
docker run -p 8081:80 helios-initiative-web
```

The site is then available at `http://localhost:8081`.

## CI/CD

Pushing to `main` triggers a GitHub Actions workflow that builds and publishes the Docker image to the GitHub Container Registry:

```text
ghcr.io/repubutilities/hi-homepage:latest
```

Each build is also tagged with its short commit SHA for traceability. Actions must be enabled in the repository settings for the workflow to run.

### Deploying on a server

Authenticate once:

```bash
echo <TOKEN> | docker login ghcr.io -u <github-username> --password-stdin
```

Then pull and run:

```bash
docker pull ghcr.io/repubutilities/hi-homepage:latest
docker run -d -p 80:80 --restart unless-stopped ghcr.io/repubutilities/hi-homepage:latest
```

## Project Structure

```text
/
├── Dockerfile
├── nginx.conf
├── .github/
│   └── workflows/
│       └── docker.yml
└── helios/                 # SPA root
    ├── public/             # Static assets (falcon logo)
    └── src/
        ├── components/     # Layout (nav, footer), Ui (Panel, Heading, Steps)
        ├── lib/            # constants.js — copy and data
        ├── pages/          # Home, Enlist
        └── styles/         # globals.css, helios.css
```

## License

All rights reserved. Eve Online and related assets are property of [CCP Games](https://www.ccpgames.com).
