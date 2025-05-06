# Georgia Tech Library System

## Designed by:

[Yutong Ye](https://github.com/Yutong-Ye/Georgia_Tech_Library_Database)

## Introduction

The Georgia Tech Library System is a full-stack application that allows users to manage a comprehensive library database. Users can add, search, edit, and delete books, making it a helpful tool for academic or personal library management. It also includes data filtering features and dynamic UI components for a smooth user experience.

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


## Project Initialization

-   Start by cloning the repository, navigate to https://gitlab.com/sry-wtv/wish-to-visit
-   Enter the project directory by navigating to it.
-   Set up a persistent Docker volume using the command docker volume wtv.
-   Construct the Docker environment by executing docker compose build.
-   Initiate the application with the command docker compose up.

### Viewing React Front End and FastAPI Docs

-   To view the React frontend, navigate to https://sry-wtv.gitlab.io/wish-to-visit/ in your internet browser.
-   To view the FastAPI docs, navigate to http://localhost:8000/docs#/ in your internet browser.

### React Routes

-   **Home Page** `http://localhost:3000/`
    -   Landing/ Homepage that welcomes you
-   **Create Wishes Form** `http://localhost:5173/wishes`
    -   Once you submit the form to create wish, automatically directs you back to view wishlist page
-   **View Wishlist Form** `http://localhost:5173/wishlist`
    -   View your wishlist
-   **Create Visit Form** `http://localhost:5173/visit`
    -   Once you submit the form to create wish, automatically directs you back to the visitlist page
-   **View Visitlist Form** `http://localhost:5173/visitlist`
    -   View the places you have traveled to
-   **View List of all Countries** `http://localhost:5173/countries`
    -   View all countries and filter them down by a keyword search or by region
-   **View Country Detail** `http://localhost:5173/countries/:country`
    -   View details about a specific country
-   **View Search Results** `http://localhost:5173/search/:searchTerm`
    -   View results of a search
-   **View Interests** `http://localhost:5173/interests`
    -   View logged in users interests
-   **Create Interests Form** `http://localhost:5173/interests/create`
    -   Once you submit the form to create interests, automatically directs you back to the interests view page.
