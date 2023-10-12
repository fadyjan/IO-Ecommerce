# IO-Ecommerce 

Welcome to the IO-Ecommerce project! This application was developed as a submission for the I-O-Tech React Developer assignment. The primary objective was to create a single-page React application emulating a fictional e-commerce platform, showcasing essential features of modern online shopping experiences.


## Table of Contents

- [Objective](#objective)
- [Features](#features)
  - [Product Listing Page](#product-listing-page)
  - [Product Page](#product-page)
  - [Categories Page](#categories-page)
  - [Shopping Cart](#shopping-cart)
  - [Authentication](#authentication-optional)
  - [Routing](#routing)
  - [Responsive Design](#responsive-design)
  - [Testing](#testing-optional)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Running the Tests](#running-the-tests)
- [Deployment](#deployment)

## Objective

To build a single-page React application for a fictional e-commerce website.

## Features

### Product Listing Page ✅

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
- Separate routes for the product listing page and the shopping cart.

### Responsive Design ✅

- Responsive on both desktop and mobile devices.

### Testing (Optional)

- Unit tests for critical components.

## Project Structure

The IO-Ecommerce project is organized with a clear and modular structure to enhance readability and maintainability. Below is a breakdown:

    .
    |──src
        ├───assets
        │   ├───fonts # Font assets for the project
        │   └───images # Image assets like icons and product images
        ├───components # Reusable React components
        ├───pages # Components representing entire pages/views
        ├───router # Routing logic and routes configuration
        └───store # State management using solutions like Redux or Context
            └───ReduxSlices


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
