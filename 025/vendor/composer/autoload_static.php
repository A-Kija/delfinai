<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit78193149a252d2d3f8f58c5b90dee94a
{
    public static $fallbackDirsPsr4 = array (
        0 => __DIR__ . '/../..' . '/',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->fallbackDirsPsr4 = ComposerStaticInit78193149a252d2d3f8f58c5b90dee94a::$fallbackDirsPsr4;
            $loader->classMap = ComposerStaticInit78193149a252d2d3f8f58c5b90dee94a::$classMap;

        }, null, ClassLoader::class);
    }
}