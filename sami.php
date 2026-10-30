<?php

use Sami\Sami;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in(__DIR__.'/../laravel-ifrs/src')
;

return new Sami($iterator, [
    'theme'                => 'default',
    'title'                => 'Eloquent IFRS API Documentation',
    'build_dir'            => __DIR__.'/api',
    'cache_dir'            => __DIR__.'/cache',
    'default_opened_level' => 2,
]);
