---
path: /nodejs-ts-api-express-knex
date: 2019-08-15T18:04:18.954Z
title: 'NodeJS API Tutorial: Building an API with ExpressJS and KnexJS'
description: Learn how to develop a RESTful API with Node.js and Express
---
## What we will build
In this tutorial, we will learn to build a RESTful API using NodeJS libraries and frameworks. Prerequisites include NodeJS and NPM installed on your local machine. If you need the prerequisites, follow this [link.](https://nodejs.org/en/download/)

## Why do we want to build an API?
You might have learned about front-end web-development, and you might have connected your application to various open-source APIs that are publicly available, such as [YouTube](https://developers.google.com/youtube/v3) or [Open Weather Map](https://openweathermap.org/api) but if we are wanting to work with in-house data such as from a database, we will find the RESTful Application Programming Interface (eg. API) to be a useful tool in operating with data. An API uses HTTP verbs such as `GET`, `PUT`, `POST`, and `DELETE` to perform operations for working with data. RESTful APIs are based on the REpresentational State Transfer (eg. REST) architectural style that enables us to read and write data into our front-end application.

If you would like to learn more about the REST approach, check out [this article](https://martinfowler.com/articles/richardsonMaturityModel.html). Also, here are some resources for tooling to checkout:
- [Insomnia](https://insomnia.rest/)
- [Fiddler](https://www.telerik.com/fiddler)
- [Paw](https://paw.cloud/) for OS X
- [PostMan](https://www.postman.com/)
- [PostWoman](https://postwoman.io/)

## Let's start building the API (from scratch)
Open your favorite terminal application (two popular choices for OS X are [iTerm2](https://iterm2.com/) and [HyperJS](https://hyper.is/). Let's create a new directory for our project and at the same time let's go ahead and initiate `npm` to scaffold a new project.
```
mkdir my-api-project && cd my-api-project && npm init -y
```
