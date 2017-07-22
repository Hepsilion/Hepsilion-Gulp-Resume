# Hepsilion-Gulp-Resume

Read resume data from a JSON file at `public/data/resume.json` and generate a static web page. 

GitHub Pages support included.

Written with Gulp, styl, and Hbs.

## Directory Structure

- views: the templates to generate html.
- routes and bin: js files for npm.
- public/data: the JSON file where your can fill your resume data.
- public/stylus: the CSS files to decorate the html files.
- build: the finally generated resume related files.

## How to build your resume?

1. Run `npm install` or `npm install -dev` to install the js dependencies.
2. Fill your resume data in `public/data/resume.json`.
3. Run `gulp generate` to generate the static web page (`build/index.html`).
4. Run `node bin/index.js` and visit `http://127.0.0.1:3000`, and you vill get what you want. Or just open the file `index.html` with browser in `build` directory.

## Develop

Run `gulp` and you can change the css fiels.

Enjoy the development.

## Copyright

This resume is completed based on the open source project of <a href="http://yuren.space/blog/" title="Title">yuren</a>.
You can visit his website and fetch some other useful resource.


