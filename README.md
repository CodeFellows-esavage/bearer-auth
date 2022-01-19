# bearer-auth
Creating a server to utilize Token (Bearer) Authentication in order  to re-authenticate users and shield access to any route that requires a valid login credentials to access for code401 Lab 07

- Developed By: Erik Savage

dev branch PR: https://github.com/eriksavage/bearer-auth/pull/1

Deployment URL: https://esavage-bearer-auth.herokuapp.com/

![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/bearer-auth.git`
- `cd` into basic-auth
- run `npm install`

## Usage
- To start server run : `npm start`
- To test server run: `npm run test`

## Models

### User
```
'User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username }, APP_SECRET);
      },
    },
}
```

## Routes

### Signup
-  POST `/signup`, requires a user object: returns created user object from database


### Signin
-  POST `/signin`, requires a user object: returns validated user object from database with token

### Users
-  GET `/users`, requires a validated token: returns array of usernames in the database

### Secret
-  GET `/secret`, requires a validated token: string - Welcome to the secret area!

## Features
- Error Handling
  - sends 404 if route or method is unavailable

## Testing
Verifies the following:
- complete testing of the routers bearer auth middleware, and the basic auth middleware

## Resources
- sequelize docs
- jest docs
- supertest docs
- http cats
- Code Fellows
  - Kellen Linse
  - Sarah Creager
  - Jacob Knaack