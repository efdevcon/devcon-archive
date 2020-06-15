# DEVCON ARCHIVE

The Devcon Archive is a static site generated by Gatsby. We use Gatsby because it provides the benefits of creating UI components using React, but does the heavy lifting on the server side to minimize data transfers over the browser. It also makes it easy to render data from a variety of sources. Finally, its plugin ecosystem makes it easy to work with a variety of media, and takes the pain out of compression optimization out of images.

## Installation and Configuration

Gatsby uses quite a bit of bleeding edge ECMAScript so the following is the minimum recommended development environment:

- NodeJS v10.16.0
- NPM v6.13.4

We recommend using npm and not yarn because there are known issues with some of Gatsby's image compression libraries and yarn, and that may result in problems when trying to produce a build.

To install:

`git clone https://github.com/ethereum/devcon-archive.git`
`cd devcon-archive`
`npm i`

Once you have installed your dependencies you can run `gatsby develop` to build the dev version of the Devcon Archive site.

## Development Workflow

We use Netlify to generate preview pages when pull requests are made. Therefore you should follow this workflow when working on this project:

- Work on your own branch. Your branch should be `{your name}-dev`

- You can make pull requests to `dev` from your branch. This will create a preview that will allow people to preview changes to the site, as well as reviewing your code. Once those changes are approved the changes can be merged.

- If the changes to `dev` are ok to push to production `dev` can be merged into `master`

## Development Guidelines

### JavaScript Guidelines

The following recommendations are made for your JavaScript code:

- Use Prettier to format your code.
- Functional components and React hooks are preferred, but not required.
- Readable code is strongly preferred over clever code. The Devcon Archive project is meant to last and be maintained for years, so you should write code that a total stranger who is not an expert in JavaScript should be able to understand.

### CSS Guidelines

This project uses [CSS modules](https://github.com/css-modules/css-modules) which scopes CSS class names locally rather than globally. This removes much of the pain developers associate with unexpected CSS behavior without having to reach for a more heavy-handed solution like CSS-in-JS or a CSS framework like Tailwind. CSS modules have filenames like `uicomponent.module.css`, and they are imported this way:

`import css from "./uicomponent.module.css";`

Assigning a html element a class name uses the following syntax:

`<div className={css.uiComponentClassName}>`

**IMPORTANT** Note that we are using the camelcase format for our CSS class names since using a `-` would generate a JavaScript error using the dot notation.

In addition to using CSS modules there is also an `index.css` file that contains values for generic elements like `body`, etc. This is located in the `src` directory, and it should be imported into every component for the sake of consistency regardless of whether or not that component uses any of its values.

## Using Gatsby

The Gatsby development site will run in port `8000`, and the production build runs in port `9000`.

Another useful link for the development build is `localhost:8000___graphql` which provides a tool for querying the data structures that are available.

Gatsby has a CLI, and you should be aware of the following commands:

- `gatsby develop` Creates a development server
- `gatsby build` Creates a production build
- `gatsby serve` Serves the production build

### Directory Structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

### Component Directory

The `src` directory is divided into two sub-directories `components` and `pages`. The `pages` directory is able to semi-magically generate routes for components. Because of the patterns being used by the Devcon Archive project, there are certain pages that are simply there to load other components for the purposes of having semantically meaningful URL routes. That means there are actually a couple of components in the `components` directory that are actually "page" components, and the components in the `page` directory act as references. These reference page component files will have the following comment in them: `/* This page is for routing purposes only. To change page layout please edit the imported {Component Name} component */`

### Learning Gatsby

Documentation for Gatsby can be found [here](https://www.gatsbyjs.org/docs/). If you have never used Gatsby before [the tutorial is recommended](https://www.gatsbyjs.org/tutorial/). Also heavily recommended is learning how to use the [image plugin](https://www.gatsbyjs.org/tutorial/gatsby-image-tutorial/)

## Known Issues

The URL route `/devcon-3/videos/1` redirects to `/devcon-3/videos/`. However this redirect is handled via the Netlify `_redirects` file. This means that in development builds going to the old route will result in a 404 error.
