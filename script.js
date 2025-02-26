const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Music Streaming</title>
            <link rel="stylesheet" href="./style.css">
        </head>
        <header class="login-header">
            <div class="logo">
                <h1><a href="#">Welcome to Vibess</a></h1>
            </div>
        </header>
        
        <body>
            <!-- Login Section -->
            <div id="login-page" class="login-container">
                <div class="form-box">
                    <h1 class="form-title">Music Login Form</h1>
                    <form id="login-form" onsubmit="return handleLogin(event)">
                        <div class="input-group">
                            <label for="username"><i class="fas fa-user"></i> Username</label>
                            <input type="text" id="username" placeholder="Username" required>
                        </div>
                        <div class="input-group">
                            <label for="password"><i class="fas fa-lock"></i> Password</label>
                            <input type="password" id="password" placeholder="Password" required>
                        </div>
                        <div class="form-options">
                            <label class="remember-me">
                                <input type="checkbox"> Remember Me
                            </label>
                            <a href="#" class="forgot-password">Forgot Password</a>
                        </div>
                        <button type="submit" class="btn">Log In</button>
                    </form>
                </div>
            </div>
        
            <!-- Main Content (Initially Hidden) -->
            <div id="main-content" class="hidden">
                <header class="header">
                    <nav>
                        <ul>
                            <li><a href="./home.html">Browse</a></li>
                            <li><a href="./playlist.html">Playlists</a></li>
                            <li><a href="./register.html">Register</a></li>
                            <li><a href="./about.html">About Us</a></li>
                            <li><a href="./dashboard.html">Dashboard</a></li>
                        </ul>
                    </nav>
                </header>
        
                <section class="search-section">
                    <input type="text" id="search" placeholder="Search for songs or artists...">
                    <button onclick="searchSongs()">Search</button>
                </section>
        
                <section class="song-list" id="song-list">
                    <!-- Song items will be injected here -->
                </section>
        
                <footer>
                    <p>Vibess © 2024</p>
                </footer>
            </div>
        
            <script>
                // Check if user is logged in using sessionStorage
                window.onload = function() {
                    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
                    if (isLoggedIn) {
                        document.getElementById('login-page').classList.add('hidden');
                        document.getElementById('main-content').classList.remove('hidden');
                    }
                }
        
                // Handle login logic
                function handleLogin(event) {
                    event.preventDefault();
        
                    // Simulate login validation (add your actual validation logic here)
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
        
                    if (username === 'user' && password === 'password') {
                        // Set login session
                        sessionStorage.setItem('isLoggedIn', true);
        
                        // Redirect to home page after successful login
                        window.location.href = './home.html';
                    } else {
                        alert('Invalid credentials. Please try again.');
                    }
                }
            </script>
        </body>
        </html>`
        )
   
    res.end()
})

server.listen(9000, ()=>{
    console.log("Server is running @ http://localhost:9000")
})