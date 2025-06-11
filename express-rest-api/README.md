# 📘 Express.js REST API - Mini Project Assessment

## 🚀 Project Overview

A simple RESTful API built with **Express.js** to perform basic CRUD operations using an in-memory data store.

---

## 🛠️ Technologies Used

* Node.js
* Express.js

---

## 📂 Project Setup

### 1. Clone the Repository (if applicable)

```bash
git clone <your-repo-url>
cd express-rest-api
```

### 2. Initialize Node.js and Install Dependencies

```bash
npm init -y
npm install express
```

### 3. For Development (Optional)

Install nodemon for auto-reloading:

```bash
npm install --save-dev nodemon
```

### 4. Run the Server

* Development Mode (auto-reloads):

```bash
npm run dev
```

* Production Mode:

```bash
npm start
```

---

## 🧪 API Endpoints Documentation

### Root

* `GET /`

> Response: `"Hello, World!"`

### Items Routes

#### 1. Get All Items

* `GET /items`

> Response: `Array of items`

#### 2. Get Item by ID

* `GET /items/:id`

> Response: `Single item object`

#### 3. Create a New Item

* `POST /items`

```json
Request Body:
{
  "name": "Item Name",
  "description": "Item Description"
}
```

> Response: `Created item object`

#### 4. Update Item by ID

* `PUT /items/:id`

```json
Request Body:
{
  "name": "Updated Name",
  "description": "Updated Description"
}
```

> Response: `Updated item object`

#### 5. Delete Item by ID

* `DELETE /items/:id`

> Response: HTTP 204 (No Content)

---

## ❗ Error Handling

| Error Code | Meaning                       |
| ---------- | ----------------------------- |
| 400        | Bad Request (Validation Fail) |
| 404        | Not Found (Invalid Route/ID)  |
| 500        | Internal Server Error         |

---

## 🧰 Example Postman Requests

### POST /items

```json
{
  "name": "Book",
  "description": "Science Fiction Novel"
}
```

### GET /items

Returns all items.

### GET /items/1

Returns item with ID 1.

### PUT /items/1

```json
{
  "name": "Updated Book",
  "description": "Updated Description"
}
```

### DELETE /items/1

Deletes item with ID 1.

---

## 📌 Notes

* This project uses an in-memory data store; all data will be lost upon server restart.
* Add a database like MongoDB for persistence if needed in the future.

---

## 👨‍💻 Author

Victor Oluwapelumi (DevOluwapelumi)

---

## 📄 License

MIT
