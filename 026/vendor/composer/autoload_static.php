<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit36ef702c9818d10c0bacf734787307af
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
            $loader->fallbackDirsPsr4 = ComposerStaticInit36ef702c9818d10c0bacf734787307af::$fallbackDirsPsr4;
            $loader->classMap = ComposerStaticInit36ef702c9818d10c0bacf734787307af::$classMap;

        }, null, ClassLoader::class);
    }
}
