document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  // Dummy login check (replace with real validation later)
  if (username === "Sal" && password === "123") {
    errorMsg.textContent = "";
    alert("Login successful!");

    // Redirect to the next page
    window.location.href = "product.html"; // Change to your actual page
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
