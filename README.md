# The All new things API (tasks manager)

This API allows people to manage their tasks

## Installation

Clone this repository and run in the directory

```shell
git clone https://github.com/marbelarrietam/task-expressjs
```
```shell
cd task-expressjs
```

```shell
npm install 
```

In the root folder rename the ".env.example" file to ".env", and change the SERVER_PORT to an available port and set the url, username and password of your MONGODB server, eg:

```shell
SERVER_PORT=3000
DATABASE_URL=XXXXXXXXX.XXXXXXXX@XXXXXXXX
DATABASE_USERNAME=XXXXXXXX
DATABASE_PASSWORD=XXXXXXXXXXX
```

## Start the server

If you want to start the server in production mode run:

```shell
npm start
```

To start in development mode run:

```shell
npm run dev
```


# REST API 
These are the routes you can use with http://yourdomain:port:

| Route           | Method  | Params     | Body                                | Description               |
| --------------- | :----:  | ---------: | ----------------------------------- | ------------------------- |
| /api/tasks      |  GET    |            |                                     | Gets all tasks            |
| /api/tasks/{id} |  GET    | id: number |                                     | Get task with Id          |
| /api/tasks      |  POST   |            | description: string, author: string | Creates a new task        |
| /api/tasks/{id} |  PUT    | id: number | description: string, author: string | Updates task with Id      |
| /api/tasks/{id} |  DELETE | id: number |                                     | Deletes task with Id      |
| /api/users      |  GET    |            |                                     | Gets all users            |
| /api/users/{id} |  GET    | id: number |                                     | Get user with Id          |
| /api/users      |  POST   |            | firstname, lastname, email          | Creates a new user        |
| /api/users/{id} |  PUT    | id: number | firstname, lastname, email          | Updates user with Id      |
| /api/users/{id} |  DELETE | id: number |                                     | Deletes user with Id      |


