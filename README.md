# The All new things

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
or

```shell
npm i 
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

# API V1
These are the routes you can use:

| Route           | Method  | Params     | Body                                | Description               |
| --------------- | :----:  | ---------: | ----------------------------------- | ------------------------- |
| /api/tasks      |  GET    |            |                                     | Gets all tasks            |
| /api/tasks/{id} |  GET    | id: number |                                     | Get task with Id          |
| /api/tasks      |  POST   |            | description: string, author: string | Creates a new task        |
| /api/tasks/{id} |  PUT    | id: number | description: string, author: string | Updates task with Id      |
| /api/tasks/{id} |  DELETE | id: number |                                     | Deletes task with Id      |

