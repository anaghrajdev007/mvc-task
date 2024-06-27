
## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd node-mvc-project

2. Install dependencies:

    npm install

3. Create a .env file and add the following variables:



MONGO_URI=mongodb://localhost:27017/yourdbname
PORT=3000
JWT_SECRET=your_jwt_secret

4. Run the application:

    node src/index.js

Running Tests

To run unit tests:

bash

npm test

##### API Endpoints

    GET /worko/user - List all users
    GET /worko/user/:userId - Get user details by ID
    POST /worko/user - Create a new user
    PUT /worko/user/:userId - Update user details
    PATCH /worko/user/:userId - Partially update user details
    DELETE /worko/user/:userId - Soft delete a user