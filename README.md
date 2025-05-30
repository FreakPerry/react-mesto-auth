# 🔐 Mesto Auth (React)

**Mesto Auth** is an advanced version of the Mesto photo gallery application, enhanced with user authentication and protected routes. Built with React, this version supports user registration, login, JWT-based authentication, and persistent login across sessions.

---

## 🚀 Live Demo

[View the live project on GitHub Pages](https://freakperry.github.io/react-mesto-auth)

---

## 🎥 Preview

![Preview login](./src/images/preview/Screen%20Recording%202025-05-30%20at%2015.28.15.mov.gif)
![Preview main page](./src/images/preview/Screen%20Recording%202025-05-30%20at%2000.08.11.mov.gif)

---

## 🧠 Project Evolution

| Version                                                      | Stack           | Description                                                               |
| ------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------- |
| [Vanilla JS Version](https://github.com/FreakPerry/mesto)    | HTML/CSS/JS     | First version — no frameworks, focusing on DOM, API and layout            |
| [React Version](https://github.com/FreakPerry/mesto-react)   | React           | Refactored to use component-based architecture                            |
| **This version**                                             | React + Auth    | Added login/registration, token-based authentication and protected routes |
| [Fullstack Version](https://github.com/FreakPerry/mesto-api) | React + Node.js | Backend fully written by me using Express & MongoDB                       |

---

## ✨ Features

- ✅ User registration and login
- ✅ JWT-based authentication
- ✅ Persistent session with token validation on load
- ✅ Protected routes (`/`, `/profile`) accessible only to authenticated users
- ✅ Responsive layout
- ✅ Add, delete, and like cards
- ✅ Edit profile and avatar
- ✅ React Router DOM for routing
- ✅ LocalStorage token management

---

## 🛠 Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React--Router-CA4245?style=flat&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=flat&logo=webpack&logoColor=black)

---

## ⚙️ Getting Started

### 📦 Installation

```bash
git clone https://github.com/FreakPerry/react-mesto-auth.git
cd react-mesto-auth
npm install
```

### 🧪 Run locally

```bash
npm run start
```

### 🔐 Backend Requirements

```
To fully test authentication, this app requires a backend with the following endpoints:

- POST /signup – register a new user

- POST /signin – log in and receive JWT

- GET /users/me – get current user (with Authorization: Bearer <token>)

- GET /cards, POST /cards, etc.

You can use your own backend or clone mine:
https://github.com/FreakPerry/express-mesto-gha
```
