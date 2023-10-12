# IO-Ecommerce

Welcome to the IO-Ecommerce project! This application was developed as a submission for the I-O-Tech React Developer assignment. The primary objective was to create a single-page React application emulating a fictional e-commerce platform, showcasing essential features of modern online shopping experiences.

## Table of Contents

- [Objective](#objective)
- [Features](#features)
  - [All Products Listing Page](#all-products-listing-page)
  - [Product Page](#product-page)
  - [Categories Page](#categories-page)
  - [Shopping Cart](#shopping-cart)
  - [Authentication](#authentication-optional)
  - [Routing](#routing)
  - [Responsive Design](#responsive-design)
  - [Testing](#testing-optional)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Running the Tests](#running-the-tests)
- [Deployment](#deployment)

## Objective

To build a single-page React application for a fictional e-commerce website.

## Features

### All Products Listing Page ✅

- Display a list of products fetched from a JSON API.
- Each product displays its name, price, and an "Add to Cart" button.
- Sorting and filtering options for the products.

### Product Page (Bouns) ✅

- A product page that provides detailed information about the product.
- Users can add the product to the cart directly from this page.
- Users have the option to select the quantity of items they want to add.

### Categories Page (Bouns) ✅

- The Categories page displays a comprehensive list of all item categories available on the website.
- Each category serves as an interactive element.
- Clicking on a category takes the user to a dedicated page listing all products within that selected category.

### Shopping Cart ✅

- Allows users to add and remove products.
- Display the selected products in a cart sidebar or modal.
- Show the total price of items in the cart.

### Authentication (Optional) ✅

- Implement user authentication.
- Allow users to sign in and sign out.
- Ensure only authenticated users can add items to the cart.

### Routing ✅

- Client-side routing using React Router.
- Separate routes for the home page, product listing, category listing, product page, login page

### Responsive Design ✅

- Responsive on both desktop and mobile devices.


## Project Structure

The IO-Ecommerce project is organized with a clear and modular structure to enhance readability and maintainability. Below is a breakdown:

    ──src
        ├───assets
        |   |
        │   ├───fonts   # Font assets for the project
        │   └───images  # Image assets like icons and product images
        |
        ├───components  # Reusable React components
        |
        ├───pages       # Components representing entire pages/views
        |
        ├───router      # Routing logic and routes configuration by React-router-dom v6
        |
        └───store       # State management using ReducToolKit
        |
        └───utils       # helper functions
        |       
        └───Hooks       # Custom Hooks

## Technologies Used

In the development of the IO-Ecommerce project, a variety of technologies and libraries were employed to ensure efficiency, scalability, and performance. Here's a breakdown:

- **[Vite](https://vitejs.dev/)**: Chosen as the build tool and project scaffolder for its speed and efficiency.
- **[React](https://reactjs.org/)**: The core library for building the user interface.
- **[Redux Toolkit](https://redux-toolkit.js.org/)** & **[React Thunk](https://github.com/reduxjs/redux-thunk)**: Used for state management and handling asynchronous operation calls respectively.
- **[React Router DOM](https://reactrouter.com/web/guides/quick-start)**: For client-side routing and navigation within the application.
- **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making API calls and fetching data.
- **[Fake Store API](https://fakestoreapi.com/)**: Utilized for API endpoints and data fetching.
- **[Swiper](https://swiperjs.com/)**: A powerful library to implement responsive sliders and carousels.

Feel free to explore the codebase to see how these technologies seamlessly integrate to provide a smooth user experience.

## Installation

To run this project on your local machine, follow these steps:

1. **Clone the Repository**

2. Open Project Folder
   ```
   cd IO-Ecommerce
   ```
3. Install Dependencies
   ```
   npm install
   ```
4. Run Project Entry Point

   ```
   npm run dev
   ```
