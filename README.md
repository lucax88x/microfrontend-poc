# @poc/microfrontend

## used libraries

turbo - monorepo build system to understand dependencies between node projects
pnpm workspaces - package manager with native monorepo support
lit - web components framework
vite - fast modern bundler
biome - linter and formatter

## Getting started for development

```sh
pnpm install # only if new dependencies added
pnpm generate:certs # only the first time
pnpm run tsc
pnpm run dev
```

after this you can open [localhost:5000](https://localhost:5000)

*it's a good idea to whitelist in your OS the self-signed certs, or to allow them from the browser for each url to avoid errors.*


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
