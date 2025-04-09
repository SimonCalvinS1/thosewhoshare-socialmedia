document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signin");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (username === "") {
        alert("Please enter your username.");
        return;
      }
      if (password === "") {
        alert("Please enter your password.");
        return;
      }

      alert("Form submitted successfully!");
      form.submit();
    });
  });
  