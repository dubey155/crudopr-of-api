 CRUD API — Users

A Node.js + Express + MongoDB (Atlas) REST API with a minimal HTML frontend for creating and managing users.

 🔗 Live Demo

> After deployment: `https://crudopr-nvtt.onrender.com/`

Tech Stack

- Node.js — runtime
- Express — web framework
- MongoDB Atlas — cloud database
- Mongoose — ODM for MongoDB
- dotenv — environment variable management
- Nodemon — dev auto-reload

## 📁 Project Structure

```
project-1/
├── Controllers/
│   └── user_controller.js      - Route handler logic
├── middlewares/
│   └── middleware.js           - Request logger
├── models/
│   └── model_user.js           - Mongoose user schema
├── routes/
│   └── op_route.js             - Express routes
├── views/
│   └── index.html              - frontend
├── .env                        - MONGO_URI
├── .gitignore
├── database.js                 - MongoDB connection
├── server.js                   - App entry point
└── package.json
```


API Endpoints

Base URL: `http://localhost:8000`

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | `/api/users`     | List all users       |
| GET    | `/api/users/:id` | Get one user by ID   |
| POST   | `/api/users`     | Create a new user    |
| PATCH  | `/api/users/:id` | Update a user by ID  |
| DELETE | `/api/users/:id` | Delete a user by ID  |

Example: Create a user

Request:
```bash
curl -X POST http://localhost:8000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "gender": "male",
```

 AUTHOR=KALPADRUM DUBEY   
   
