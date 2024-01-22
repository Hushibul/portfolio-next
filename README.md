## Getting Started

Portfolio using Next Js

## To Start with

```bash
npm install
```

## To run

```bash
npm run dev
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Docker Build (with compose)

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
#&&
docker-compose up
```

## Docker Build

```bash
docker build -t project-name ./
docker run -d -p 3000(expose port):3000 project-name/project-name.com
```
