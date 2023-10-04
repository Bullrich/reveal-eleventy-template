# Reveal.js & Eleventy.js template

Template which implements [`reveal.js`](https://revealjs.com/) in [`11ty`](https://www.11ty.dev/) for simple deployment and development.

## Motivation

Setting up a `reveal.js` project isn't necesarily difficult, but can be a bit messy.

As there is already an [`npm` package](https://www.npmjs.com/package/reveal.js?activeTab=readme), I decided to implement it in `11ty` and have a simple presentation template which uses different files per section, with automatic deployment to GitHub pages.

**Modular, simple to edit, one click to deploy**.

## Usage

Before anything, you need to run `npm install` to install the dependencies.

The available commands are:
- `npm start`: Development server with hot reload in `http://localhost:8080/`.
- `npm run build`: Build the site to the `dist` directory.

[`src/index.html`](./src/index.html) is the main page. You can find all the available slides there.

You may have notice that inside the class `slides`, there are some `include` statements:
```html
<div class="slides">
    {% include "slides/01-example.html" %}
    <section>
        {% include "slides/02-nested.html" %}
        {% include "slides/02.1-nested.html" %}
    </section>
    {% include "slides/03-promote.html" %}
</div>
```

This are direct imports from the [`src/_includes/`](src/_includes/) directory.

You can write your own sections inside the [`src/_includes/`](src/_includes/) directory, and just add them to your presentation. That way, you can split the section into different files. 

You can also combine many sections into one file if you want. At the end of the day, the only thing that the `include` command does, is to inject the html code from the file into the `dist/index.html` file.

Once you have edited your slides, you can present them, or you can deploy the project in GitHub pages.

### How to deploy

You only need *two steps* to set up and deploy your slides:

First, [create a new repository from this template](https://github.com/new?template_name=reveal-eleventy-template&template_owner=Bullrich).

Then go to the pages settings and set the `Source` of *Build and deployment* to `GitHub Actions`. (This menu can be found in `Settings` > `Pages`).

The deployment will automatically update on every push.
