body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background: #f0f2f5;
  scroll-behavior: smooth;
}

header, footer {
  background: linear-gradient(90deg, #2b5876, #4e4376);
  color: white;
  text-align: center;
  padding: 1.2rem;
}

header h1 {
  margin: 0;
  animation: fadeInDown 1s ease-out;
}

nav {
  margin-top: 0.5rem;
}

nav a {
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #ffd700;
}

main {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
}

h2 {
  color: #333;
  margin-bottom: 1rem;
  animation: fadeInUp 0.5s ease-out;
}

.room-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.room-card {
  flex: 1;
  min-width: 250px;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
}

.room-card:hover {
  transform: translateY(-5px);
  background: #e0ffe0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

form input, form textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

form button {
  background: #4e4376;
  color: #fff;
  padding: 0.7rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

form button:hover {
  background: #2b5876;
}

.message-box {
  margin-top: 1rem;
  padding: 0.7rem;
  background: #e6f7ff;
  border-left: 4px solid #1890ff;
  border-radius: 6px;
  animation: fadeIn 0.5s ease-in;
}

.admin-stats {
  list-style: none;
  padding: 0;
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.admin-stats li {
  margin: 0.5rem 0;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
