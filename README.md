# Personal Finance Tracker

This is a **Personal Finance Tracker** application built using **React** for the frontend and **Node.js with Express** for the backend. The app allows users to track their transactions, manage their expenses, generate financial reports, and set budgets. The project integrates with **MongoDB** to store transaction data and provides a clean and interactive UI for better financial management.

## Features

- **Track Transactions**: Add, update, and delete financial transactions.
- **Income and Expense Management**: Categorize your transactions and track your income and expenses.
- **Financial Reports**: Visualize your income vs. expenses using interactive bar charts.
- **Budget Management**: Set and track monthly budgets for income and expenses.
- **PDF Export**: Export financial reports as PDFs.
- **User Settings**: Manage user settings, including name, email, and preferred currency.

## Tech Stack

- **Frontend**: React, React Bootstrap, React Hook Form, Chart.js
- **Backend**: Node.js, Express, MongoDB, Mongoose, jsPDF
- **Database**: MongoDB
- **Styling**: Tailwind CSS for the UI

🧱 Project Structure
frontend/
├── components/
│   ├── Dashboard.js
│   ├── AddTransaction.js
│   ├── TransactionHistory.js
│   ├── Budgets.js
│   ├── Reports.js
│   └── Settings.js
├── App.js
├── index.js
├── api/
│   └── transactions.js
└── styles/
    └── tailwind.config.js

🔙 BACKEND (Node.js + Express)
backend/
├── models/
│   └── Transaction.js
├── routes/
│   └── transactions.js
├── .env
├── server.js
└── config/

## Project Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **MongoDB** running locally or a cloud MongoDB service (like MongoDB Atlas)
- **npm** (Node Package Manager) or **yarn**

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammadshakirsaifi/React-Finance-Tracker-App.git
   cd React-Finance-Tracker-App
## Install backend dependencies::
cd backend
npm install
## Create a .env file in the backend folder with the following content:
MONGO_URI=mongodb://localhost:27017/finance-tracker
PORT=5000
## Start the backend server:

node server.js

This will start the backend on : http://localhost:5000

## Frontend Setup - Install frontend dependencies:
cd frontend
npm install
## Start the frontend server:
npm start

This will start the frontend on: http://localhost:3000

   ## To access the MonogoDB database using MonogoDB Compass:

MONGO_URI=mongodb://localhost:27017/finance-tracker
Website http://localhost:5000/api/transactions


## Testing the Application
After both the frontend and backend are running, open your browser and visit http://localhost:3000. You should be able to access the app and start managing your transactions and finances.

## Challenges
### UI Challenges
 #### Responsive Design: 
 Ensuring the UI is responsive and works well on both mobile and desktop devices was a challenge. I used React Bootstrap and Tailwind CSS to make the UI adaptable to different screen sizes. However, fine-tuning the layout for mobile users and making the charts responsive required continuous testing and adjustments.

 ### Chart Integration: 
 Implementing Chart.js for visualizing financial data presented some challenges, especially in making the charts responsive and ensuring that they look good on smaller screens. Additionally, converting the chart to a PDF using jsPDF required converting the chart to a base64 image, which had its own challenges in terms of positioning and size.

 ### Form Validation: 
 Handling form validations using React Hook Form and Yup was smooth, but ensuring all fields were correctly validated (especially for dynamic inputs like amounts and descriptions) took some time. Proper error handling and displaying clear validation messages were key parts of the UI refinement process.

 ### Handling Transactions: 
 Managing the state of multiple transaction types (income, expenses) and handling the dynamic nature of these transactions (e.g., adding, deleting, updating) proved to be more complex than initially anticipated. Ensuring that transaction history updates in real-time and provides accurate summaries was challenging.

## MongoDB Integration Challenges
 ### Database Schema Design: 
Designing a schema for transactions that could handle various categories, amounts, descriptions, and dates took some time to perfect. MongoDB’s flexible schema was helpful, but maintaining consistency in data types and ensuring the application could handle different types of transactions (e.g., income vs. expense) was tricky.

 ### Data Aggregation: 
 Calculating statistics like total income, expenses, and balance from transactions required effective use of MongoDB aggregation pipelines. Writing queries to group and sum transactions, particularly ensuring expenses are treated as negative numbers, posed a challenge.

 ### CRUD Operations: 
 Implementing CRUD (Create, Read, Update, Delete) operations in the backend required careful handling of MongoDB's asynchronous nature. Managing errors, ensuring data consistency, and optimizing query performance were important aspects of the backend development process.

 ### Deployment: 
 Setting up MongoDB to work with both a local and cloud-based environment (MongoDB Atlas) posed some challenges. Ensuring that the connection string was correctly configured for different environments, especially with environment variables for sensitive information, required some effort.

## Managing Frontend and Backend
 ### Frontend and Backend Communication: 
 The frontend and backend communicate using REST APIs. The frontend sends HTTP requests to the backend for fetching and submitting data. Using Axios for API calls helped streamline this communication, but handling errors, ensuring data consistency, and validating responses required attention.

 ### State Management: 
 The frontend uses React's useState and useEffect hooks to manage the state of transactions and other financial data. Fetching data from the backend and updating the UI in real-time was key to providing a smooth user experience.

 ### Separation of Concerns: 
 The backend is responsible for managing database interactions, user authentication, and serving API responses. The frontend handles UI rendering and user interactions, with data being passed between the frontend and backend via API requests. This separation allows for a scalable and maintainable codebase.

 ### Environment Variables: 
 Both frontend and backend require specific environment variables, such as the backend API URL and MongoDB connection string. Using a .env file in both parts of the project helps ensure sensitive information is securely managed and can be easily changed for different environments.

## Future Improvements
 ### User Authentication: 
 Adding user authentication to allow multiple users to track their personal finances.

 ### Advanced Analytics: 
 Adding more financial analytics features, such as trend analysis and predictions based on historical data.

 ### Mobile App: 
 Building a mobile version of the app to make it more accessible to users on the go.

 ###  Notifications: 
 Implementing reminders or notifications for upcoming bills or transactions.


📬 Contact
For feedback, questions, or suggestions:
Mohammad Shakir
📧 shakir0.saifi@gmail.com
