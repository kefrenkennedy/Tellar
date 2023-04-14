# Tellar App 📝

Tellar is an RESTful API for customers's solar energy projects management.

## Techs ✨

- Node.js
- Bcrypt
- Prisma
- Express
- JWT
- TypeScript
- uuid
- express-validator

## Base URL ✨

- http://localhost:3333/

## Diagram:

![Diagram](Tellar_DIAGRAM.png)

## Features ✨

- Create an account
- Log and logout
- Update account information
- Delete the account along with all its data
- Create projects
- update Projects
- delete projects
- list projects
- list projects filtered per state

## Getting Started 🚀

To run the app, first, you need to configure the .env file with your PostgreSQL database settings. Then, follow the steps below:

### Backend

1. Open the backend folder in your terminal
2. Run `npm install` or `yarn install`
3. Run `prisma migrate dev --name init` to execute the migrations to the database
4. Run `npm run dev` or `yarn dev`
5. The server will be running on http://localhost:3333

### Frontend

1. Open the frontend folder in your terminal
2. Run npm install or yarn install
3. Run `npm run dev` or `yarn dev`
4. The frontend will be running on http://localhost:5173

## Routes 🛣️

Almost all routes require authentication. The JWT accessToken is generated when the user is created or logs in and can be accessed in the response.

Thank you for checking out my Tellar app! 🙌

Project made by me, Kefren Vasconcelos
