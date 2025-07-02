# Pledgr Frontend

React frontend for the Pledgr app with TypeScript and Vite.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

```sh
pnpm install
```

### Development
Start the development server with hot-reloading:
```sh
pnpm dev
```

### Build
Build for production:
```sh
pnpm build
```

### Preview
Preview the production build locally:
```sh
pnpm preview
```

### Linting
Run ESLint to check code quality:
```sh
pnpm lint
```

## Architecture guidelines

### 1. Modular Structure
- Keep components, page/screen components, hooks, services, and types in separate directories/files.
- Separate UI components from business logic and data fetching.

### 2. Type safety
- Avoid using `any` type.
- Create interfaces/types for custom objects, component props, and API responses.
- Use TypeScript strict mode for better type checking.

### 3. State management
- Contexts - Use [createContext](https://react.dev/reference/react/createContext) to create sharable state across components.
- Context providers should be set up in your root `App` component.
- You can use a [helper useContext util](https://github.com/shhtarknet/mist-app/blob/main/app/src/lib/useCore.tsx#L12-L22) to have type safe access to context that should always be available.

### 4. Other guidelines
- Error handling - For promises add catch and have the error show the context. Use Error Boundaries for component errors.
- Documentation - Write docs for functions when necessary, usually function name should describe the coded functionality.
- DRY - Don't repeat yourself, wrote more than 2 lines same lines of code the second time? Write a reusable util function or custom hook for it.

## Project Structure

```
src/ - App source
  ∟ main.tsx - Main entry point
  ∟ App.tsx - Root component
  ∟ components/ - Reusable UI components
  ∟ pages/ - Page/Screen based components
  ∟ services/ - API services and external integrations
  ∟ utils/ - Utility functions and helpers
  ∟ types.ts - Global TypeScript types and interfaces

dist/ - Build output (after build)
public/ - Static assets
```

### Contributing
With your first PR, Add Yourself as a Contributor.
Open package.json.
Add your name (optionally contact and a link) to the contributors array.
Example:
```js
{
	"contributors": [
		// other contributors...
		"Your Name <your@email.com> (https://yourwebsite.com)"
	]
}
```
Commit your change and open a pull request.

### Guidelines
Use conventional commits.
Write clear, concise code and documentation.
Open an issue or discussion for major changes.
Follow React best practices and hooks patterns.

### License
UNLICENSED – see package.json for details.
