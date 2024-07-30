Install necessary packages:
First, make sure you have Node.js installed, then create a new project directory and run:

npm init -y
npm install express pg dotenv

Set up your environment variables:
Create a .env file in your project root and add your database credentials:
DB_HOST=your-rds-endpoint.rds.amazonaws.com
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
DB_PORT=5432