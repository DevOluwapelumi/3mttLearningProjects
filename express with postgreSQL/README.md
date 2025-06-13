# 📘 PostgreSQL Express.js API - Mini Project

## 🚀 Project Overview
A simple RESTful API built with **Express.js** that performs CRUD operations on a **PostgreSQL** database.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- PostgreSQL
- pg (Node.js PostgreSQL client)

---

## 📂 Project Setup

### 1. Install PostgreSQL & Node.js
- Download and install [PostgreSQL](https://www.postgresql.org/download/)
- Install Node.js and npm: [Node.js](https://nodejs.org)

### 2. Create the PostgreSQL Database
Use your terminal or PgAdmin to run:
```sql
CREATE DATABASE userdb;

\c userdb

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
```

### 3. Initialize Node Project & Install Dependencies
```bash
mkdir express-pg-api && cd express-pg-api
npm init -y
npm install express pg
```

### 4. Create the Application File
Create a file named `server.js` and paste the app code.

### 5. Update Database Config in Code
Edit the `Pool` settings:
```js
const pool = new Pool({
  user: 'your_pg_user',
  host: 'localhost',
  database: 'userdb',
  password: 'your_password',
  port: 5432,
});
```

### 6. Run the Server
```bash
node server.js
```

---

## 📫 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/users`         | Get all users           |
| GET    | `/users/:id`     | Get a user by ID        |
| POST   | `/users`         | Create a new user       |
| PUT    | `/users/:id`     | Update a user by ID     |
| DELETE | `/users/:id`     | Delete a user by ID     |

### Sample POST Body
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
```

### Sample PUT Body
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "age": 26
}
```

---

## ❗ Error Handling
| Status Code | Meaning                       |
|-------------|-------------------------------|
| 400         | Missing or invalid input      |
| 404         | User not found                |
| 500         | Internal server error         |

---

## 👨‍💻 Author
Victor Oluwapelumi (DevOluwapelumi)

---

## 📄 License
MIT
