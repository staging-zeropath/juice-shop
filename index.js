// Vulnerable JavaScript Example

// 1. Cross-Site Scripting (XSS)
function displayUserInput() {
    var userInput = document.getElementById('userInput').value;
    // Directly inserting user input into the DOM without sanitization
    document.getElementById('output').innerHTML = userInput;
}

// 2. Insecure use of eval
function executeUserScript() {
    var userScript = document.getElementById('userScript').value;
    // Using eval to execute user-provided script
    eval(userScript);
}

// 3. Secured AJAX request with multiple security improvements:
// - Uses HTTPS instead of HTTP to encrypt data in transit
// - Implements proper error handling for failed requests
// - Uses textContent instead of innerHTML to prevent XSS attacks
function loadUserData() {
    var xhr = new XMLHttpRequest();
    // Using HTTPS and proper response handling
    xhr.open('GET', 'https://example.com/userdata', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // Using textContent instead of innerHTML for safe DOM insertion
                // This prevents XSS by treating response as plain text rather than HTML
                document.getElementById('ajaxOutput').textContent = xhr.responseText;
            } else {
                console.error('Request failed with status:', xhr.status);
            }
        }
    };
    xhr.send();
}
