timber-bootstrap-sass
===========
Timber and Twitter Bootstrap combined into one very useful WordPress theme
Preprocessed via sass (scss), compiled via gulp, and refreshed via BrowserSync
    WordPress `https://wordpress.org/`
    Timber `http://upstatement.com/timber/`
    Twitter Bootstrap `http://getbootstrap.com/`
    GulpJS `http://gulpjs.com/`
    BrowserSync `http://www.browsersync.io`
    
## Installation and running tasks

Install [WordPress](https://wordpress.org/) then log into the admin and navigate to Plugins > Add New and search for:

    Timber By Jared Novack + Upstatement

Clone this repo into your themes directory, i.e.

    `/wp-content/themes/timber-bootstrap-sass`
    
Now navigate in the wordpress admin to Appearance and activate the Timber Bootstrap theme.

## Running the app during development

You will need to be running a php server locally to view the site.
I use VVV; regardlesss of your setup you'll need to configure browsersync to use your custom URL; browsersync won't run a PHP server for you.

## Directory Layout

    functions.php     --> additional WordPress features
    index.php         --> controller mapping page types to modules
    includes/         --> php stuffs
    modules/          --> modules grouped by functionality
      app/            --> main application module
      blog/           --> example blog module with css, javascript and the template
    screenshot.png    --> required for Wordpress theme preview
    style.css         --> required for Wordpress theme name

## Contact

For more information on Timber please check out `http://upstatement.com/timber/`
Find me at `http://joshlevinson.me`