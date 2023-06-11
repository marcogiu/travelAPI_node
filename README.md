# :airplane: TravelAPI

Rest API for travel agency.

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

## :open_file_folder: Endpoints

### Products

You can get entire list of products with a get request:

`/api/products`

You can add a new product with a POST request:

`/api/products`

```json
{
  "name": "insert a alphanumeric string"
}
```

GET data for a specific product with a GET request:

`/api/products/:id`

Update product with a PUT request:

`/api/products/:id`

```json
{
  "name": "insert a alphanumeric string"
}
```

Delete a product with a DELETE request:

`/api/products/:id`

<strong>:id</strong> must be a valid product MongoDB id.

### Users

You can get entire list of users with a get request:

`/api/users`

You can add a new user with a POST request:

`/api/users`

```json
{
  "name": "insert a alphanumeric string",
  "surname": "insert a alphanumeric string",
  "email": "valid email format"
}
```

GET data for a specific user with a GET request:

`/api/users/:id`

Update user with a PUT request:

`/api/users/:id`

```json
{
  "name": "insert a alphanumeric string",
  "surname": "insert a alphanumeric string",
  "email": "valid email format"
}
```

Delete a user with a DELETE request:

`/api/users/:id`

<strong>:id</strong> must be a valid user MongoDB id.

### Orders

You can get entire list of orders with a get request:

`/api/orders`

You can add a new order with a POST request:

`/api/orders`

```json
{
  "product": "array of product id",
  "user": "array of user id",
  "date": "valid ISO date format"
}
```

GET data for a specific order with a GET request:

`/api/orders/:id`

Update order with a PUT request:

`/api/orders/:id`

```json
{
  "product": "array of product id",
  "user": "array of user id",
  "date": "valid ISO date format"
}
```

Delete a order with a DELETE request:

`/api/orders/:id`

<strong>:id</strong> must be a valid order MongoDB id.

You can also get data for orders by product:

`/api/orders/by-product/:product_id`

<strong>product_id</strong> must be a valid id of a product that exist in MongoDB.

You can also get data for orders by date:

`/api/orders/by-date/:date`

<strong>date</strong> must be a valid ISO date format.

## :page_with_curl: License

[MIT](https://choosealicense.com/licenses/mit/)

## :e-mail: Contact Me

Send me a email to: giuliani.marco1998@gmail.com <br>
My Linkedin profile here: https://www.linkedin.com/in/marco-giuliani-2a20b4179/
