<?php
// CORS headers for the frontend
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Read request body
$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$message = $input['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Resend API configuration
$apiKey = 're_Wjtyk7BJ_FanrVBMHnUq1H61FwCNqHftH';
$fromEmail = 'info@tlucas.pt';
$toEmail = 'info@tlucas.pt';

$payload = json_encode([
    'from' => "t.lucas Transfers <$fromEmail>",
    'to' => [$toEmail],
    'reply_to' => $email,
    'subject' => "New Quote Request from $name",
    'html' => "
        <div style='font-family: sans-serif; padding: 20px; color: #333;'>
            <h2 style='color: #00221B;'>New Quote Request</h2>
            <p><strong>Lead Explorer:</strong> " . htmlspecialchars($name) . "</p>
            <p><strong>Contact Email:</strong> " . htmlspecialchars($email) . "</p>
            <div style='margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #00C692;'>
                <h3 style='margin-top: 0;'>Trip Details:</h3>
                <p style='white-space: pre-wrap;'>" . htmlspecialchars($message) . "</p>
            </div>
        </div>
    "
]);

// Call Resend API via cURL
$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($error) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to connect to email service: ' . $error]);
    exit();
}

http_response_code($httpCode);
echo $response;
