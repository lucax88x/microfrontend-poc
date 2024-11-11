# microfrontend-poc

took inspiration from [https://www.learnbydo.ing/diary/2024-10-14-mixing-and-matching-angular-webpack-and-vite-with-module-federation](link).

## structure

pnpm workspaces with catalog

- ui
  - base
     vite
     lit - webcomponents framework
     tailwindcss
     shoelace
     cem (custom elements manifest)

  - react => generates preact components based on the ui/base
     vite
     preact
     tailwindcss
      
- packages
  - react-1 => list of preact reusable components
    vite
    tailwindcss
  - angular-1 => list of angular reusable components
    vite
    tailwindcss

- shells
  - shell-1 => app that uses packages
    vite
    preact

- shared 
  - lib => shared code
  - vite => vite helpers
