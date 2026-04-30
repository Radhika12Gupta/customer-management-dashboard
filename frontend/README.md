# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





# Customer Management Dashboard

A basic full‑stack web application built with **React (Frontend)** and **Node.js + Express (Backend)** that allows users to **add, view, and delete customers**.

## Features

- Add a new customer with:
  - Name
  - Email
  - Phone number
- View all customers in a paginated table with:
  - Name, Email, Phone
  - Delete button for each row
- Simple frontend validation:
  - Name is required
  - Email must be valid
  - Phone must have at least 10 digits
- Responsive UI with styled navbar, form box, and table with alternate row colors.

## Tech Stack

- **Frontend:** React (create‑react‑app), CSS
- **Backend:** Node.js, Express, CORS
- **Storage:** In‑memory array (no database)

## Folder Structure
customer-app/
├── backend/
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── CustomerForm.js
│ │ ├── CustomerTable.js
│ │ └── App.css
│ └── package.json


## How to Run the Project

1. **Clone or create the project folder:**
   ```bash
   mkdir customer-app
   cd customer-app
   ```

2. **Setup the backend (Node.js + Express):**
   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express cors
   cp /path/to/your/server.js .          # copy your backend/server.js here
   ```

3. **Start the backend:**
   ```bash
   cd backend
   node server.js
   ```
   - Backend runs on `http://localhost:5001` (to avoid macOS port 5000 conflict).

4. **Setup the frontend (React):**
   ```bash
   cd ..
   npx create-react-app frontend
   cd frontend
   cp /path/to/your/App.js .             # copy App.js
   cp /path/to/your/CustomerForm.js src/
   cp /path/to/your/CustomerTable.js src/
   cp /path/to/your/App.css src/
   ```

5. **Start the frontend:**
   ```bash
   cd frontend
   npm start
   ```
   - Frontend runs on `http://localhost:3000`.

6. **Open the app in your browser:**
   - Go to `http://localhost:3000`
   - Use the form to add customers and view them in the table.

## Backend API Routes

| Method | Route              | Description                    |
|--------|--------------------|--------------------------------|
| POST   | `/customers`       | Add a new customer             |
| GET    | `/customers`       | Get all customers              |
| DELETE | `/customers/:id`   | Delete a customer by ID        |

## Validation Rules

- **Name:** required, non‑empty.
- **Email:** must match a valid email pattern (`xxx@xxx.xxx`).
- **Phone:** must be numeric and at least 10 digits.

## Screenshots (Example)

You can add screenshots later if you wish, for example:

- Screenshot 1: `Customer Management Dashboard` with navbar and form box.
- Screenshot 2: Customer table with alternating row colors and delete buttons.

---

Built by: **Radhika Gupta**  
Date: **30 April 2026**
