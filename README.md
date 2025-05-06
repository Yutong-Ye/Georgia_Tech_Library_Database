# Georgia Tech Library System

## Designed by:

[Yutong Ye](https://github.com/Yutong-Ye/Georgia_Tech_Library_Database)

## Introduction

The Georgia Tech Library System is a full-stack application that allows users to manage a comprehensive library database. Users can add, search, edit, and delete books, making it a helpful tool for academic or personal library management. It also includes data filtering features and dynamic UI components for a smooth user experience.

## Project Initialization

-   Start by cloning the repository, navigate to https://github.com/Yutong-Ye/Georgia_Tech_Library_Database
- cd Georgia_Tech_Library_Database

- Navigate to the frontend directory
`cd frontend`
- Start the React frontend server
`npm run dev`

- Navigate to the backend directory
`cd backend`
- Install backend dependencies
`npm install`
- Run the backend server
`node index.js`

## Features

-   Book Management: Add, view, edit, and delete books with detailed information.
-   Search & Filter: Easily filter books by author, subject area, year, and language.
-   Frontend UI: Responsive interface for seamless user interaction.
-   Backend API: RESTful API endpoints for CRUD operations.
-   Database Integration: Persistent data storage using MariaDB.


## Technologies Used

-   Frontend: React.js
-   Backend: Express.js
-   Database: MariaDB
-   Hosting: Localhost 

## API Endpoints
- [API Endpoints](./docs/apiendpoints.md)  

## Wireframe

-   https://www.mermaidchart.com/raw/9114e912-3e48-4a70-925b-b43555ae5fc9?theme=light&version=v0.1&format=svg



### Viewing React Front End and React Routes

-   **Home Page** [`http://localhost:3000/`]
This is the main page of your Georgia Tech Library web app. It provides a unified interface for managing books in the library database. Users can:

- View All Books: A list of all books is displayed with their title, author, and ISBN.

- Create Book: A form at the bottom lets users input a new book's title, author, and ISBN, then add it to the list using the "Add Book" button.

- Edit Book: Each book in the list has an Edit button that allows inline editing of the title and author (ISBN is used as the key).

- Delete Book: Each book also has a Delete button that removes the book from the system after confirmation.
