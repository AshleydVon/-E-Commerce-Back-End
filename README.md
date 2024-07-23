# -E-Commerce-Back-End

## Description

This project builds the back end for an e-commerce site by modifying starter code. It configures a working Express.js API to use Sequelize to interact with a PostgreSQL database. This application is designed for internet retail companies to compete with other e-commerce companies by using the latest technologies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root directory and add your PostgreSQL username, password, and database name:

```
DB_NAME='ecommerce_db'
DB_USER='your_username'
DB_PASSWORD='your_password'
```

4. Use the `schema.sql` file in the `db` folder to create your database with PostgreSQL shell commands.
5. Run `npm run seed` to seed data to your database.

## Usage

1. Start the server by running `npm start`.
2. Use Insomnia or a similar tool to test the API routes:
   - GET routes for categories, products, and tags
   - POST, PUT, and DELETE routes for categories, products, and tags

## License

This project is licensed under the MIT license.

## Contributing

To contribute, please fork the repository and create a pull request with your proposed changes.

## Tests

To run tests, use the command: `npm test`

## Questions

If you have any questions, please open an issue in the GitHub repository, or contact me directly at ashleydvon@yahoo.com

## Walkthrough Video

[[Link to walkthrough video demonstrating the functionality of the application](https://www.loom.com/share/5d6aa1e70b094a859ca0044cfa5cde30)]

## GitHub Repository
https://github.com/AshleydVon/-E-Commerce-Back-End

