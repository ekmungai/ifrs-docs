<?php

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in(__DIR__.'/../laravel-ifrs/src')
;

return new Doctum($iterator, [
    'title'                => 'Eloquent IFRS API Documentation',
    'build_dir'            => __DIR__.'/content/v7.2.0',
    'cache_dir'            => __DIR__.'/cache/doctum',
    'default_opened_level' => 2,
]);
