# Vote FE

This project is a React-based front-end for an online voting platform. It uses Create React App, React Router, Tailwind CSS, and Axios to communicate with a backend API.

## Prerequisites

- **Node.js**: recommended LTS version (for example 18 or 20)
- **npm**: comes together with Node.js

Make sure you are in the project root directory:

```bash
cd C:\Users\okopo4ok\WebstormProjects\vote-fe
```

## Install dependencies

All required libraries are defined in `package.json`. To install them, run:

```bash
npm install
```

This will install:
- **React / ReactDOM**
- **react-router-dom**
- **axios**
- **@testing-library/\*** and **jest-dom**
- **tailwindcss**, **postcss**, **autoprefixer**
- and other dependencies listed in `package.json`

## Development server

To start the development server:

```bash
npm start
```

This will:
- start the React development server on `http://localhost:3000`
- watch for file changes and automatically reload the page

## Environment variables

The frontend uses an API base URL from `REACT_APP_API_URL` if it is defined, otherwise it falls back to `http://localhost:8000/api/v1/` (see `src/services/axiosConfig.js`):

```bash
# example .env.local
REACT_APP_API_URL=http://localhost:8000/api/v1/
```

Create a `.env` or `.env.local` file in the project root if you want to override the default API URL.

## Build for production

To create an optimized production build:

```bash
npm run build
```

The build output will be placed in the `build` directory and can be served by any static file server or integrated with your backend.

## Running tests

The project uses Jest and React Testing Library (already configured by Create React App) together with the tests added in `src/components`, `src/contexts`, and `src/services`.

To run tests in watch mode:

```bash
npm test
```

To run tests once in CI mode (for example in CI pipelines or local one-time run), you can use:

```bash
CI=true npm test
```

## Project structure (overview)

- `src/index.js` – application entry point
- `src/components/App/app.jsx` – main application component with routes
- `src/components/Layout` – layout and header
- `src/components/Pages` – pages (Home, Auth, Votes, Profile, etc.)
- `src/contexts/AuthContext.jsx` – authentication context provider
- `src/services` – API services (`authService`, `electionService`, `userProfileService`, `axiosConfig`)
- `src/**/*.test.*` – Jest / React Testing Library tests

## Scripts summary

From `package.json`:

- `npm start` – start the development server
- `npm run build` – build the app for production
- `npm test` – run tests (Jest + React Testing Library)


