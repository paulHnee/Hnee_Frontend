<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$requestUri = $_SERVER['REQUEST_URI'];

// Redirect .env to the home page
if (strpos($requestUri, '.env') !== false) {
    header('Location: /');
    exit();
}

// Serve the React app
$file = __DIR__ . '/build' . $requestUri;

// If the requested file exists, serve it
if (file_exists($file) && !is_dir($file)) {
    // Determine content type
    $extension = pathinfo($file, PATHINFO_EXTENSION);
    switch ($extension) {
        case 'js':
            header('Content-Type: application/javascript');
            break;
        case 'css':
            header('Content-Type: text/css');
            break;
        case 'html':
            header('Content-Type: text/html');
            break;
        case 'json':
            header('Content-Type: application/json');
            break;
        case 'png':
            header('Content-Type: image/png');
            break;
        case 'jpg':
        case 'jpeg':
            header('Content-Type: image/jpeg');
            break;
        case 'gif':
            header('Content-Type: image/gif');
            break;
        default:
            header('Content-Type: application/octet-stream');
            break;
    }
    readfile($file);
    exit();
}

// Default to serving index.html for all other requests (React Router)
include(__DIR__ . '/build/index.html');
?>
