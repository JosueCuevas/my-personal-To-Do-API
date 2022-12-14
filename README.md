# My Personal To-do List Application

Hello there!
Here's the docs in order to learn how to use this API so you can implement it in your future projects.

Maybe this is not the best documentation you have seen, cause this is my first day writing docs about an API project. Feel free to send me your feedback to [my personal email](mailto:hola@josuecuevas.com)

## Installation

As you must know, this is an API project created by Node.js so you could clone this project using the github interface or your CLI using:

```bash
git clone https://github.com/JosueCuevas/tasks-API
```

Once cloned this project, it is time to installed using the next command:

```bash
$ npm install
```

It will create the node_modules folder with all dependencies you need for this API work properly.

\* Note: this API connect to MongoDB, so you need to create your own MongoDB Cluster and connect it using the next environment variables:

```.env
MONGO_URI = "your-mongo-url-provided-by-your-mongo-service"
DB = "YourDataBase"
```

## Creating a task

The endpoint for creating a new task is:

```
POST ${yourDomain||http://localhost:3000}/api/tasks
```

This endpoint will receive an JSON object which must include

```json
{
  "title": "yourTaskTitle",
  "description": "yourTaskDescription"
}
```

## Getting All Tasks Saved

You could get all task saved by using the following endpoint:

```
GET ${yourDomain||http://localhost:3000}/api/tasks
```

Which gives you all task as a JSON format

## Getting One Task

The endpoint for getting one task is:

```
GET ${yourDomain||http://localhost:3000}/api/tasks/${id}
```

You have to proportionate the Mongo ID of your task previously saved in MongoDB.

## Updating a Task

The only property which you can modify is the "done" property of your task, using the following endpoint

```
PUT ${yourDomain||http://localhost:3000}/api/tasks/${id}
```

You have to proportionate the Mongo ID of your task previously saved in MongoDB.

## Deleting a Task

You can delete a task whenever you want using the endpoint:

```
PUT ${yourDomain||http://localhost:3000}/api/tasks/${id}
```

You have to proportionate the Mongo ID of your task previously saved in MongoDB in order to delete the correct task.

And that is it. Hope you enjoy it ;)

Josu?? Cuevas.
