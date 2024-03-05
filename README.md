<h1 align="center">Node.js Authentication Microservice Clean Architecture</h1>

### Installation

1. Clone the repo

```sh
git clone https://github.com/Christhino/clean-architecture-auth-microservice.git
```

2. Server configuration

Enter into the server folder

```sh
cd clean-auth-microservice
```

3. inside the server folder run the following command to install all dependencies

```sh
npm install or yarn
```

4. to generate the build of the project run

```sh
npm run build or yarn build
```

5. to run the server

```sh
npm start or yarn start
```

6. to run the unit tests and the integration tests

```sh
npm test or yarn test
```

<br/>

## Endpoints

<br/>

### SignUp

**POST** `https:/localhost/api/v1/signup`

##### output example

```json
// POST https:/localhost/api/v1/signup

// Request Body
{
  "firstName": "test",
  "lastName": "test",
  "email": "test@mail.com",
  "password": "test",
  "passwordConfirmation": "test"
}

// Response Body
{
  "accessToken": "access_token"
}
```

<br/>

### SignIn

**POST** `https:/localhost/api/v1/signin`

##### output example

```json
// POST https:/localhost/api/v1/signin

// Request Body
{
  "email": "test@mail.com",
  "password": "test"
}

// Response Body
{
  "accessToken": "access_token"
}
```

<br/>

### Me

**GET** `https:/localhost/api/v1/me`

##### output example

```json
// Get https:/localhost/api/v1/me
// HEADER x-access-token = any_access_token

// Response Body
{
  "id": "any_id",
  "firstName": "test",
  "lastName": "test",
  "email": "test@mail.com"
}
```

<br/>

### Forgot Password

**Patch** `https:/localhost/api/v1/forgot`

##### output example

```json
// Patch https:/localhost/api/v1/forgot

// Request Body
{
  "email": "test@mail.com"
}
```

<br/>

### Reset Password

**Patch** `https:/localhost/api/v1/reset-password`

##### output example

```json
// Patch https:/localhost/api/v1/reset-password

// Request Body
{
  "email": "test@mail.com",
  "accessToken": 092498,
  "password": "new_password"
}
```

<br/>

### Signout

**Delete** `https:/localhost/api/v1/signout`

##### output example

```json
// Delete https:/localhost/api/v1/signout
// HEADER x-access-token = any_access_token

// Request Body
Status Code 204
{}
```
