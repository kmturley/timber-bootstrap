// Basic Gulp File
//
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

var paths = {
    styles: {
        src: './bower_components',
        files: './modules/**/*.scss',
    }
}

// A display error function, to format and make custom errors more uniform
// Could be combined with gulp-util or npm colors for nicer output
var displayError = function(error) {

    // Initial building up of the error
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

    // If the error contains the filename or line number add it to the string
    if(error.fileName)
        errorString += ' in ' + error.fileName;

    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;

    // This will output an error like the following:
    // [gulp-sass] error message in file_name on line 1
    console.error(errorString);
}

// Setting up the sass task
gulp.task('sass', function (){
    // Taking the path from the above object
    gulp.src(paths.styles.files, {base: '.'})
        // Sass options - make the output compressed and add the source map
        // Also pull the include path from the paths object
        .pipe(sass({
            sourceComments: 'map',
            errLogToConsole: true,
            includePaths : [
                paths.styles.src,
                paths.styles.src + '/bootstrap-sass/assets/stylesheets',
            ]
        }))
        // If there is an error, don't stop compiling but use the custom displayError function
        .on('error', function(err){
            displayError(err);
        })
        // Pass the compiled sass through the prefixer with defined
        .pipe(prefix(
            'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
        ))
        .pipe(rename(function(path) {
            path.dirname = path.dirname.replace('/sass', '/css');
            path.extname = '.css';
        }))
        .pipe(gulp.dest('.'))
        .pipe(reload({stream: true}));
        // Funally put the compiled sass into a css file

});

// This is the default task - which is run when `gulp` is run
// The tasks passed in as an array are run before the tasks within the function
gulp.task('default', ['sass'], function() {
    browserSync({
        proxy: "local.wordpress.dev"
    });
    // Watch the files in the paths object, and when there is a change, fun the functions in the array
    gulp.watch(paths.styles.files, ['sass'])
        // Also when there is a change, display what file was changed, only showing the path after the 'sass folder'
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...'
            );
        })
        .on('change', reload);
});