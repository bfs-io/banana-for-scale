---
path: /nodejs-ts-api-express-knex
date: 2019-08-15T18:04:18.954Z
title: 'NodeJS API Tutorial: Building an API with ExpressJS and KnexJS'
description: Learn how to develop a RESTful API with Node.js and Express
---
## What we will build

In this multi-part tutorial, we will learn to build a RESTful API using NodeJS libraries and frameworks. Prerequisites include NodeJS and NPM installed on your local machine. If you need the prerequisites, follow this [link.](https://nodejs.org/en/download/)

## Why do we want to build an API?

You might have learned about front-end web-development, and you might have connected your application to various open-source APIs that are publicly available, such as [YouTube](https://developers.google.com/youtube/v3) or [Open Weather Map](https://openweathermap.org/api) but if we are wanting to work with in-house data such as from a database, we will find the RESTful Application Programming Interface (eg. API) to be a useful tool in operating with data. An API uses HTTP verbs such as `GET`, `PUT`, `POST`, and `DELETE` to perform operations for working with data. RESTful APIs are based on the REpresentational State Transfer (eg. REST) architectural style that enables us to read and write data into our front-end application.

If you would like to learn more about the REST approach, check out [this article](https://martinfowler.com/articles/richardsonMaturityModel.html). Also, here are some resources for tooling to checkout:

* [Insomnia](https://insomnia.rest/)
* [Fiddler](https://www.telerik.com/fiddler)
* [Paw](https://paw.cloud/) for OS X
* [PostMan](https://www.postman.com/)
* [PostWoman](https://postwoman.io/)

## Let's start building the API (from scratch)

Open your favorite terminal application (two popular choices for OS X are [iTerm2](https://iterm2.com/) and [HyperJS](https://hyper.is/). Let's create a new directory for our project and at the same time let's go ahead and initiate `npm` to scaffold a new project.

```
mkdir my-api-project && cd my-api-project && npm init -y
```

Next, let's load in our sample data that we are working with for the  API. To start, let's work with [this](https://github.com/desertsofcacti/bondflix/blob/master/data.json) JSON file containing some data for the James Bond 007 titles. As you can see we now have a shape of data as follows:

```
{
    "007-titles": [
    {
        "imdb_id": "",
        "title": "",
        "year": "",
        "rated": "",
        "released": "",
        "runtime": "",
        "genre": "",
        "director": "",
        "writers": "",
        "actors": "",
        "plot": "",
        "country": "",
        "language": "",
        "metascore": "",
        "poster": "",
        "rating": "",
        "votes": "",
        "budget": "",
        "opening_weekend": "",
        "gross": "",
        "production": "",
        "type": "",
        "status": ""
    }
]
```

Let's save this into the `db.json` file in the `./db` folder:

```
my-api-project$ mkdir db && cd db && touch db.json
```

Now that we have `npm` initialized and we have some sample data saved, let's start setting up our Express server. First we'll need to load some libraries into our project using `npm`.

```
my-api-project$ npm i --save body-parser cors express
```

This command will install five dependencies into our project:

* `body-parser` - This library will help us convert the body of our incoming requests into JS objects
* `cors` - This will help us configure Express to add headers that announce to the consuming application that our API accepts requests coming from other origins. This is known as [Cross-Origin-Resource-Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS)
* `express` - This is the ExpressJS web application library that we will be using the serve HTTP requests.

## Building the server

Let's make two files in our project root. `app.ts` and `server.ts`. In `app.ts` we will want to import the libraries we plan to use and in `server.ts` we will import our `app.ts` and instantiate our server to listen on a particular port number. These two files will be as follows:

`server.ts`

```
import app from './app';
const PORT = process.env.PORT || 8080;

export const server = app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
```

`app.ts`

```
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export default app;
```

## Getting the server ready to run

Because we are using Typescript on our project, there are few particular pieces of setup that we'll want to get going. First we'll want to add a couple of libraries that will allow us to use Typescript.

While we're at it, let's go ahead and install `typescript` and `ts-node` globally as well so that the commands that we will run, such as `ts-node` are available easily at the command prompt. To do this, we will add the `-g` switch with `npm install`, as follows;

```
my-api-project$ npm i -g --save-dev typescript ts-node
```

Cool! Let's give our little application a spin and see what we've got working so far. To run a Typescript file, we will use `ts-node` from the command line followed by the filename. In this case we are calling `server.ts` in the `/src` folder.

```
my-api-project$ ts-node /src/server.ts
```

When we run this, we get an error message that states the following:

```
/usr/local/lib/node_modules/ts-node/src/index.ts:421
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
src/server.ts:2:14 - error TS2580: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i @types/node`.

2 const PORT = process.env.PORT || 8080;
```

## What does it all mean Basil?

![](https://bananaforscale.netlify.com/assets/umm-what.gif)

What this error is saying is that `ts-node` is unable to compile the Typescript because the type definitions need to be loaded. Let's load those into our project. While we're at it, we'll need the types for Express, CORS, and Body Parser as well.

```
my-api-project$ npm i --save-dev @types/node @types/express @types/cors @types/body-parser
```

Ok, cool. Let's try running our server again!

```
my-api-project$ ts-node /src/server.ts
```

Aaaand.. error.

```
        import express from 'express';
                 ~~~~~~~

        node_modules/@types/express/index.d.ts:107:1
        107 export = e;
                ~~~~~~~~~~~
        This module is declared with using 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.
```

## Now What?!

![](https://bananaforscale.netlify.com/assets/now-what.webp)

This error is telling us that we need to set the `esModuleInterop` flag to `true`. To do that we'll need to setup a `tsconfig.json` config for Typescript to read from. Let's do that now.

```
my-api-project$ touch tsconfig.json
```

`tsconfig.json`

```
{
  "compilerOptions": {
    /* Basic Options */
    "incremental": true /* Enable incremental compilation */,
    "target": "es2015" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "allowJs": false /* Allow javascript files to be compiled. */,
    "declaration": true /* Generates corresponding '.d.ts' file. */,
    "declarationMap": true /* Generates a sourcemap for each corresponding '.d.ts' file. */,
    "sourceMap": true /* Generates corresponding '.map' file. */,
    "outDir": "dist" /* Redirect output structure to the directory. */,
    "rootDir": "src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": true /* Raise error on expressions and declarations with an implied 'any' type. */,
    "strictNullChecks": true /* Enable strict null checks. */,
    "noImplicitThis": true /* Raise error on 'this' expressions with an implied 'any' type. */,
    "alwaysStrict": true /* Parse in strict mode and emit "use strict" for each source file. */,

    /* Additional Checks */
    "noUnusedLocals": true /* Report errors on unused locals. */,
    "noUnusedParameters": true /* Report errors on unused parameters. */,
    "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
    "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

    /* Experimental Options */
    "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
    "emitDecoratorMetadata": true /* Enables experimental support for emitting type metadata for decorators. */
  },
  "include": ["./src/**/*"]
}
```

Here we have set the `"esModuleInterop":` to `true`. Cool. More about that configuration file later. For now, we want to get our server running.

Let's try running the server one more time.

```
my-api-project$ ts-node /src/server.ts
```

We get:

```
listening on port 8080
```

Hooray!

![](https://bananaforscale.netlify.com/assets/horray.gif)

## What's next?

Ok, next, now that we have our server running, let's go ahead and make our first commit for git and let's push our working code. If you have not already setup a repository for your project, let's do that now. If you want to follow along with the code for this project, you can do that [here](https://github.com/desertsofcacti/api-nodejs-ts-express-knex).

## Loading our data

Now that we have the server running, let's inspect our URL in Paw. We can see that the server is listening on port 8080 from the message displayed in the terminal. Since we know this is running on our localhost, let's look for a `GET` response on `localhost:8080`

![](/static/screenshot-2020-03-01-16.27.54.png)

We can see from our API client that we are receiving a message from the HTTP server. The message shows us:
```
Cannot GET /
```
This is because we need to setup a `GET` method to response at the root endpoint (eg. `/`). Let's setup a route for the endpoint and associate the `GET` method with our route.

`./src/routes/routes.ts`
```
import express from 'express';
const router = express.Router();
import { readTitles } from './titles';

router.route('/titles/').get(readTitles);

export default router;
```

Note, that we are using `express.Router` here to call the `get` method on the `readTitles` function. The `readTitles` function has been imported from the `./titles`. Let's create the `titles.ts` file next:

`titles.ts`
```
import { RequestHandler } from 'express';

const results = 'hello world';

export const readTitles: RequestHandler = async (_req, res) => {
    try {
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send('HTTP 500 - Unable to get titles');
    }
};
```

Here are are importing the `RequestHandler` from express and setting the `readTitles` function to the `RequestHandler` type. Within the `RequestHandler` function we have a `try/catch` statement where we are passing `results` to the `res` response along with an HTTP 200 status.

When we inspect the URL `http://localhost:8080/titles` (note we are using the titles route), we should be presented with the `hello world` greeting.

This concludes this part of the tutorial for building an API with ExpressJS and KnexJS. In this part we have built an express server that returns a string at a certain route. We have setup Typescript and have configured a routes controller for our application and imported a route function for our data.

## Next Up

In up coming articles we will address the following refinements to our application:
* Connecting our JSON data and returning the JSON to the GET method.
* Connecting a MySql DB
* Using `Jest` to setup tests
* Securing our application with JWT
* Building our application to ship inside a Docker container
