timber-bootstrap
===========
Timber and Twitter Bootstrap combined into one very useful Wordpress theme
    Wordpress `https://wordpress.org/`
    Timber `http://upstatement.com/timber/`
    Twitter Bootstrap `http://getbootstrap.com/`
    
## Installation and running tasks

Install [Wordpress](https://wordpress.org/) then log into the admin and navigate to Plugins > Add New and search for:

    Timber By Jared Novack + Upstatement

After installing you will need to download this theme and place it within your themes folder at:

    /wp-content/themes/timber-bootstrap
    
Now navigate in the wordpress admin to Appearance and activate the Timber Bootstrap theme.

## Running the app during development

You will need to be running a php server locally to view the site. Once running the site should be available at a url something similar to (depending on your settings):

    http://localhost:8888/
    http://localhost:8888/admin/

## Directory Layout

    functions.php     --> additional Wordpress features
    index.php         --> controller mapping page types to modules
    libs/             --> external libraries such as Bootstrap and jQuery
    modules/          --> modules grouped by functionality
      app/            --> main application module
      blog/           --> example blog module with css, javascript and the template
    screenshot.png    --> required for Wordpress theme preview
    style.css         --> required for Wordpress theme name

## Contact

For more information on Timber please check out `http://upstatement.com/timber/`