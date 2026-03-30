function route(page) {
  const app = document.getElementById("app");

  // ABOUT PAGE
  if (page === "about") {
    app.innerHTML = `
      <div class="card">
        <button class="close" onclick="route('login')">X</button>
        <h1>About Page</h1>
        <p>This is your tutor0 project.</p>
      </div>
    `;
  }

  // LOGIN PAGE
  else if (page === "login") {
    app.innerHTML = `
      <div class="card">
        <h1>Login</h1>
        <input type="text" placeholder="Username"><br>
        <input type="password" placeholder="Password"><br>
        <button>Login</button>
      </div>
    `;
  }
}

// Default page
route('about');
