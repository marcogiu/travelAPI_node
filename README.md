# :airplane: TravelAPI

## :question: Why

Final project for S2I Node.js course.

## :bulb: How it works

This Api has three different data Schemas:

- Products: data of the name of the product
- Users: data of the user who contains: name, surname and email
- Orders: data of the order: product, user and date

With the correct endpoints you can (CRUD) create, read, update and delete all the Schemas. I used Node.js, express and MongoDB database.

## :book: Libraries

- Express
- Express Async Handler
- Dotenv
- Helmet
- Mongoose
- Mongodb
- Validator

## :grey_exclamation: Getting Started

#### 1. Clone the repo

`git clone https://github.com/marcogiu/travelAPI_node`

#### 2. Install the dependencies

`npm install`

#### 3. Start it

`npm start`

#### 4. Connect your database

Create, if don't exist, a .env file and insert an environment variable named PORT with the your port number and another environment variable named CONNECTION_STRING with your MongoDB connection string.

#### 5. Test it

You can test with a client, like Postman.
