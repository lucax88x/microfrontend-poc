# @poc/microfrontend

## Getting started for development

```sh
pnpm install # only if new dependencies added
pnpm run tsc
pnpm run dev
```

## Project structure

- shell: frontend which will be accessed by endusers, federating modules in `ui` and `package`
- ui: federated module exposing Components based on external WebComponents. External WebComponents are imported in the `base` subfolder. The `react` subfolder contains the react wrapper components generated for ease of use.
- package: federated modules exposing specialized Components
- shared: TS utilities which can be imported from anywhere in the project
- federation: Thin wrappers for the federated Components to reduce boilerplate code and code related to the module fereration in vite
- scripts: scripts to automate development tasks.
- infra: configuration files for the dev tools


## Q & A, troubleshooting

when to use tsconfig paths?

- if your typescript package comes from a MF
- when your project uses a typescript package, but it needs to bundle with vite

when to use tsconfig reference?

- when your project uses a typescript package, but it does NOT need to bundle with vite

## architecture diagram

![arch](./arch.svg)
