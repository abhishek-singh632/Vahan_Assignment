# Headless CMS with React.js Frontend
# Overview
This project is a very rudimentary headless CMS (Content Management System) with extremely basic CRUD (Create, Read, Update, Delete) functionality. It allows users to create different entities with customizable attributes and types. Upon creation, the app automatically generates table definitions in a relational database management system (RDBMS) such as MySQL or PostgreSQL. Users can then perform CRUD operations on the entities from the React.js frontend interface.
## Visualization diagram of figma design 😊😍
![1](https://github.com/abhishek-singh632/Vahan_Assignment/assets/118076036/0a342f11-45cd-41d2-8489-12e5e9030543)

# ( MySql Implementation )

# 1.Screenshot : 

![2](https://github.com/abhishek-singh632/Vahan_Assignment/assets/118076036/a782d498-c7d9-4b8c-b5fd-18beeb9494f1)

# 2.Screenshot : 

![3](https://github.com/abhishek-singh632/Vahan_Assignment/assets/118076036/37ce0d24-a9bc-40bb-acad-1a0d230130cb)

# 3.Screenshot : 

![4](https://github.com/abhishek-singh632/Vahan_Assignment/assets/118076036/120e4505-6fba-4fb1-8d2a-bc35d07c837e)

# Features
## Dynamic Entity Creation:
Users can create entities with custom attributes and types.
# Automatic Table Definition: 
Upon entity creation, the app automatically generates table definitions in an RDBMS.
# CRUD Operations: 
Users can perform Create, Read, Update, and Delete operations on the entities from the React.js frontend interface.

## Tech Stack
Frontend: React.js
Backend: Node.js
Database: MySQL or PostgreSQL

# Setup
Clone the repository:

# bash
git clone <repository_url>
Install dependencies:

# bash 
cd headless-cms
npm install

## Configure the database:

Create a database in MySQL or PostgreSQL.
Update the database connection configuration in config.js.

#Run the server:
npm start
Access the React.js frontend:
Open your browser and go to http://localhost:3000.

# Usage
## Create Entity:
Navigate to the React.js frontend interface.
Specify the entity name and its attributes with their types.
Click on the "Create Entity" button.

## Perform CRUD Operations:
After entity creation, navigate to the entity's page.
Use the provided forms to create, read, update, or delete entries.
