# 📘 Student Management Form (React + Spring Boot)

This project is a **full-stack student registration form** built using:

- **Frontend:** React.js (with MUI for UI design)  
- **Backend:** Spring Boot (Java REST API)  
- **Database:** *(You can mention MySQL/PostgreSQL/H2 if used)*

---

### ✨ Features

- Add a new student with **name** and **address**
- Sends data to the backend using a **POST API**
- Uses **Material UI (MUI)** for clean and responsive design
- Handles cross-origin requests with **CORS support** (`@CrossOrigin` in Spring Boot)

---

### 🚀 How It Works

1. User fills in the form in the React app.
2. On clicking **Send**, the form data is sent via a `fetch()` POST request to `http://localhost:8080/student/add`.
3. Spring Boot receives and stores/processes the student data.

---

### 🛠 Setup

- Run the Spring Boot backend on port **8080**
- Run the React frontend on port **3000**
- Make sure `@CrossOrigin` is used in your Spring Boot controller

---


