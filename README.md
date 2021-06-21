# Auth JWT Login
The main function of the application is to apply authentication concepts to the user using JWT.

**The frontend is not responsive. That's not the idea of ​​the application, it's just a way to visualize it better.**

## Technologies:
 - **ReactJS:** front-end development.
 - **NodeJS:** back-end development. 
 - **Jest:** apply TDD concepts.
 - **Celebrate:** data validations.
 - **Express:** help in building web servers.
 -  **Knex:** database manipulation.
 - **SQLite:** database access.

## How it works:
After login, the application will generate a token (JWT), allowing the user to advance to the next screen. This token will expire in 2min, so if you refresh the page after that time, the user will be redirected to login screen again.

## How to execute:
 - Clone this repository to your machine.
 - Open both directories in your terminal or CMD and execute `npm install` or `yarn install`.
 - Execute `npm start` or `yarn start` to both directories.
 - On login screen, write user: `ojairo` and pass: `ojairo` .
 - Enjoy.
