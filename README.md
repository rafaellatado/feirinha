# Feirinha

The **Shopping List API** is a simple backend application that allows users to manage a shopping list. Users can register items, query all items, filter by item type, and retrieve details of individual items by their ID. It also handles errors such as missing data or duplicate items.

## Technologies Used:
- Node.js with Express.js: These technologies are used to build the backend API, manage routes, and handle requests.
- In-memory storage: Data (shopping list items) is stored in memory using global variables (no database used for persistence).
- Git: Version control to track the progress of the project and collaborate with others.
- Postman or Thunder Client: Used for manual testing of the API endpoints.


## How to Test:
To test the API locally, follow these steps:

- Clone the Repository: First, clone the repository from GitHub.
```json
git clone https://github.com/your-username/shopping-list-api.git
cd shopping-list-api
```

- Install Dependencies: Make sure you have Node.js installed. Then, run the following command to install the required dependencies:
```json
npm install
```

- Start the Server: The server will run on port 5000. To start the server, run:
```json
npm start
```

## Test the API: You can test the API using Postman or Thunder Client by sending requests to the following endpoints:

- POST /items: Add a new item to the shopping list.
- GET /items: Get all items in the list.
- GET /items?type={type}: Get items of a specific type.
- GET /items/:id: Get a specific item by ID.