# Vite Tailwind Template

![preview](https://github.com/saimonkat/vite-tailwind-template/assets/22715126/12fdcb26-8370-4440-a4fd-59668ffbd10a)

This is a boilerplate project template for non-framework static frontend websites with Vite, TailwindCSS, Eslint and Prettier.

## Motivation

When starting a new project, we spend time every time configuring it and connecting the same modules and tools. This template contains all the best modern technologies and modules to start a project, saving you time on setup.

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

Previously we used webpack for building static Common JS websites. However, technology develops, and our programming tools improve along with it. Then Vite appeared on the scene, which turned out to be much simpler than webpack in configuration and faster for build and development process. Instead of module styles we switched to Tailwind, which has a lot of advantages, main of them - ease of maintain. Also this project includes built-in Prettier to support uniform code formatting on the project, and Eslint tp support uniform code style and avoid possible bugs. 

## Getting Started

First, install node.js 18 or higher version.

Then install modules:

```bash
npm install
# or
yarn install
```

Then install vite
```bash
npm install -g vite
# or
yarn global add vite
```

Then run the development server:

```bash
vite
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:

```bash
vite build
```

## HTML

This template uses [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars) for supporting [Partial](https://handlebarsjs.com/guide/partials.html) components via [Handlebars](https://handlebarsjs.com/)

## CSS

This template supports [Tailwind CSS](https://tailwindcss.com/) instead of SASS/SCSS.

## JavaScript

This template uses no frameworks or libraries, just vanilla JavaScript.

You need to follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) to prevent eslint errors.

## Eslint

This template uses default .eslint config, extended with [Airbnb's extensible shared config](https://www.npmjs.com/package/eslint-config-airbnb-base).
