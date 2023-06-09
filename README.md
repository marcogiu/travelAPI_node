# :airplane: TravelAPI

## :question: Why

Final project for S2I Node.js course.

## :bulb: How it works

This Api has three different Schema:

- Products
  ```json
  {
    "name": "insert an alphanumeric string"
  }
  ```
- Users:
  ```json
  {
    "name": "insert an alphanumeric string",
    "surname": "insert a alphanumeric string",
    "email": "insert a valid email"
  }
  ```
- Orders:

  ```json
  {
    "product": "array of products' ID",
    "user": "array of products' ID",
    "date": "a valid iso date"
  }
  ```
