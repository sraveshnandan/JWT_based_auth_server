# JWT Token-based Authentication System

This is a JWT token-based authentication system built with Node.js, Express, MongoDB, bcrypt, cors, Joi, joi-password-complexity, and dotenv. The system allows users to register, login, and securely authenticate using JWT tokens. It implements both client-side and server-side verification, providing enhanced security.

## Features

- User registration with password hashing using bcrypt.
- User login with client-side and server-side verification.
- Generation of JWT token upon successful login for authentication.
- Secure storage of user data in MongoDB.

## Getting Started

To get started with this authentication system, follow the steps below:

### Prerequisites

- Node.js (at least version 12.x)
- MongoDB database
- express js
- bcrypt
- joi
- joi-password-complexicity
- dotenv
- cors
- jsonwebtoken

### Installation

1. Clone the repository:

```bash
git cloneh https://github.com/sraveshnandan/JWT_based_auth_server.git
cd jwt-authentication
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

Create a `.env` file in the root directory and add the following environment variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret_key` with a strong and secret key for JWT token generation.

### Running the Server

Run the following command to start the server:

```bash
npm run dev
```

The server will be accessible at `http://127.0.0.1:8080`.

## Endpoints

### User Registration

Register a new user by providing their credentials in JSON format.

- **Endpoint:** `POST http://127.0.0.1:8080/api/register/`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "secure_password"
  }
  ```
- **Response:** JSON object containing a success message if registration is successful.

### User Login

Authenticate a user by matching their provided credentials with the stored data and return a JWT token upon successful login.

- **Endpoint:** `POST http://127.0.0.1:8080/api/login/`
- **Request Body:**
  ```json
  {
    "username": "example_user",
    "password": "secure_password"
  }
  ```
- **Response:** JSON object containing a JWT token if login is successful.

## Security Measures

- Passwords are securely hashed using bcrypt for storage in the database.
- Server-side verification is performed to ensure the provided credentials are correct.
- JWT tokens are generated with a secret key to prevent tampering.



Remember to keep the application updated, and follow best practices to ensure the security and reliability of the authentication system.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.

---
 Happy coding!
