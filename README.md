# GenCaster website

The source code for our static website for which we use [Jekyll](https://jekyllrb.com/).

There is a CI step which builds the website and serves it via [GitHub Pages](https://pages.github.com/).

## Development

* [Install jekyll](https://jekyllrb.com/docs/installation/macos/) - installation will take some time
* Clone this repo and set up the ruby dependencies via

  ```shell
  bundle
  ```
  
* Start a hot-reload server via 
  
  ```shell
  bundle exec jekyll serve --livereload
  ```
