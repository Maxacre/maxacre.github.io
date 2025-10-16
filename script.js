:root {
  --primary: #5A67D8;
  --secondary: #F7FAFC;
  --accent: #667EEA;
  --text: #2D3748;
  --transition: 0.3s;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  color: var(--text);
  background-color: var(--secondary);
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition);
}

a:hover {
  color: var(--accent);
}

/* Header */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

nav {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

nav .logo {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary);
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

nav ul li a {
  font-weight: 500;
  position: relative;
}

nav ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: var(--primary);
  transition: width 0.3s;
}

nav ul li a:hover::after {
  width: 100%;
}

/* Sections */
section {
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

section.active {
  opacity: 1;
  transform: translateY(0);
}

h1 { font-size: 2.5rem; color: var(--primary); margin:0.5rem 0;}
h2 { font-size: 2rem; margin:1rem 0;}
h3 { font-size:1.25rem; color: var(--accent); margin:0.5rem 0;}
p { max-width:700px; margin:0.5rem auto 1.5rem; }

/* Buttons */
.btn {
  display:inline-block;
  padding:0.7rem 1.5rem;
  background: var(--primary);
  color:#fff;
  border-radius:6px;
  font-weight:600;
  cursor:pointer;
  transition: all 0.3s;
}

.btn:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

/* Cards */
.card-container {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap:2rem;
  max-width:1200px;
  margin:auto;
}

.card {
  background:#fff;
  padding:2rem;
  border-radius:12px;
  box-shadow:0 8px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow:0 12px 25px rgba(0,0,0,0.1);
}

/* Contact */
form {
  display:flex;
  flex-direction:column;
  gap:1rem;
  max-width:500px;
  margin:auto;
}

form input, form textarea {
  padding:0.75rem 1rem;
  border-radius:8px;
  border:1px solid #CBD5E0;
  font-size:1rem;
  resize:none;
}

form input:focus, form textarea:focus {
  border-color: var(--primary);
  outline:none;
  box-shadow:0 4px 12px rgba(102,126,234,0.3);
}

form button {
  padding:0.75rem 1rem;
  border:none;
  border-radius:8px;
  background: var(--primary);
  color:#fff;
  font-weight:600;
  cursor:pointer;
}

form button:hover {
  background: var(--accent);
  transform: translateY(-2px);
}

/* Footer */
footer {
  padding:2rem;
  text-align:center;
  color:#718096;
  font-size:0.9rem;
}

/* Responsive */
@media(max-width:768px){
  nav ul {flex-direction:column; gap:1rem;}
  h1 {font-size:2.2rem;}
}
