<?php
/**
 * Timber Bootstrap
 *
 * @package 	WordPress
 * @subpackage 	Timber
 * @since 		Timber 0.1
 */

// check if Timber is installed
if (!class_exists('Timber')) {
    echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';
    return;
}

// set data in page context
if (is_singular()) {
    $context = Timber::get_context();
    $context['menu'] = new TimberMenu();
    $context['post'] = new TimberPost();
} else {
    $context = Timber::get_context();
    $context['menu'] = new TimberMenu();
    $context['posts'] = Timber::get_posts();
}

// switch template based on page type
if (is_single()) {
    $template = 'app/app';
} else if (is_page()) {
    $template = 'app/app';
} else if (is_home()) {
    $template = 'blog/blog';
} else if (is_category()) {
    $template = 'app/app';
} else if (is_tag()) {
    $template = 'app/app';
} else if (is_author()) {
    $template = 'app/app';
}

Timber::render('modules/'.$template.'.twig', $context);