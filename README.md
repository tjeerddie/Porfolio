# My Portfolio
this is the source code of my portfolio.
my portfolio contains 3 pages: about, skills, projects.

things to do
I want to use a font-end framework instead of plain html and js.
I want to make a backend with a database to atleast store all my data instead of having everything just in the html.

## Serving
You can use `gulp` or `gulp --env=development` to start the project for development.

You can use `gulp --env=production`to start the project for production.

## Gulp tasks
The gulp tasks that are being used.
 * Default - calls the tasks in the order they need to be run.
 * Build - Builds the project by running a sequence to call scripts, styles and inject.
 * Scripts - Manages the javascript by sourcemapping, concatenating, minifying and autmaticly adding a iife around the js and adding the concatenated/minified js to the public folder.
 * Styles - Manages the SASS by sourcemapping, compiling the sass to css, minifying and adding the compiled/minified css to the public folder.
 * Inject - Injecting the added js and css files to the specified html file.
 * Clean - Removes specified files.
 * Watch - Watches the js and sass files and calls the scripts or styles tasks to rerun them.
 * Serve - Serves the project with browser sync or a local server.
