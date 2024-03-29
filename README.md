# gencaster.org

A website about the [Gencaster](https://gencaster.org/) project.
The site is build with [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) using [Content](https://content.nuxtjs.org/) and deployed via GitHub pages.

## Content

The content is located in the `/content` directory. To create new content add a Markdown file in the according subdirectory.
It's easiest to copy an existing file, to make sure all the required fields are there.
Images need to be placed in the `/public/img` directory.
See `/content/3.news/.blueprint.md` (the leading `.` in the filename hides it from being published) for an example of how to link them in a news article.

## Local Development

Install [`pre-commit`](https://pre-commit.com/) hooks via

```shell
pre-commit install
```

Make sure to install the dependencies:

```shell
yarn install
```

Start the development server on http://localhost:3000

```shell
yarn dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

Any source code of the website is licensed under AGPL-3.0.

Any content, such as text or media, is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
