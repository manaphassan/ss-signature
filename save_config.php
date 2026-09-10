<?php
// SuamiSihat Email Signature Configuration — Server Save Endpoint
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method Not Allowed. Use POST.'
    ]);
    exit;
}

// Read incoming JSON body
$rawInput = file_get_contents('php://input');
if (!$rawInput) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Empty request body.'
    ]);
    exit;
}

$payload = json_decode($rawInput, true);
if (!$payload || !isset($payload['config']) || !is_array($payload['config'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid configuration structure.'
    ]);
    exit;
}

$configData = $payload['config'];

// Basic validation: ensure offices array exists
if (!isset($configData['offices']) || !is_array($configData['offices']) || count($configData['offices']) === 0) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Configuration must contain at least one corporate office.'
    ]);
    exit;
}

// Generate formatted JavaScript config file content
$jsContent = "// Email Signature Generator Configuration — SuamiSihat Brand Guidelines\n" .
             "// Last updated on " . date('Y-m-d H:i:s') . " via Configuration Manager\n" .
             "const CONFIG = " . json_encode($configData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . ";\n";

$targetFile = __DIR__ . '/assets/js/config.js';
$backupFile = __DIR__ . '/assets/js/config.backup.js';

// Verify target directory exists
$targetDir = dirname($targetFile);
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0775, true);
}

// Create backup of current config.js if it exists
if (file_exists($targetFile)) {
    @copy($targetFile, $backupFile);
}

// Write new config.js
$bytesWritten = @file_put_contents($targetFile, $jsContent);

if ($bytesWritten !== false) {
    echo json_encode([
        'success' => true,
        'message' => 'Configuration successfully saved to server assets/js/config.js',
        'bytes' => $bytesWritten,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to write to assets/js/config.js. Please check server directory write permissions.'
    ]);
}
