# Library API

This is a simple RESTful API built with Express.js and Node.js for managing a library of books.

## Installation

1. Clone the repository:
   ```sh
   git clone <https://github.com/kwesi-koranteng/LIBRARY_API.git>
   cd library-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the API

Start the server in development mode with:

```sh
npm run dev
```


The API will be available at `http://localhost:5000`.

## API Endpoints

### Get all books

```sh
GET /books
```

Response:

```json
[
  {
    "id": "1",
    "title": "Node.js Essentials",
    "author": "John Doe",
    "year": 2021
  }
]
```

### Get a book by ID

```sh
GET /books/:id
```

Response:

```json
{
  "id": "1",
  "title": "Node.js Essentials",
  "author": "John Doe",
  "year": 2021
}
```

### Add a new book

```sh
POST /books
```

Request body:

```json
{
  "id": "2",
  "title": "JavaScript Basics",
  "author": "Jane Doe",
  "year": 2020
}
```

Response:

```json
{
  "message": "Book added successfully"
}
```

### Update a book

```sh
PUT /books/:id
```

Request body:

```json
{
  "title": "Advanced Node.js",
  "author": "Jane Doe",
  "year": 2022
}
```

Response:

```json
{
  "message": "Book updated successfully"
}
```

### Delete a book

```sh
DELETE /books/:id
```

Response:

```json
{
  "message": "Book deleted successfully"
}
```







