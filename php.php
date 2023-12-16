<?php
// Define variables and set to empty values
$name = $email = $subject = $message = $success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize user input
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);
    $subject = sanitizeInput($_POST['subject']);
    $message = sanitizeInput($_POST['message']);

    // Validate input (you can add more validation as needed)
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required.";
    } else {
        // Send email (you should replace 'your_email@example.com' with your actual email address)
        $to = 'your_email@example.com';
        $headers = "From: $email\r\nReply-To: $email\r\n";
        $mailBody = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";

        if (mail($to, $subject, $mailBody, $headers)) {
            $success = "Message sent successfully!";
            // You can also redirect the user to a thank-you page or display a success message.
        } else {
            echo "Error sending the message. Please try again later.";
        }
    }
}

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
php?>
