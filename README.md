![CI](https://github.com/WillRock19/TikTakToe/workflows/CI/badge.svg)

## Introduction

This is a Tic Tac Toe web game. This project was created as a way to train different concepcts from web development, while producing a full usable web application. We created this project from the scratch, without any react or web API framework.

To learn more about the Tic Tac Toe game, [click here](https://en.wikipedia.org/wiki/Tic-tac-toe).

> :warning: **IMPORTANT**: This project still on development, and we still want to add a lot of different cool stuff (like a `server`).

## Project Structure

This project is divided in two folders: `client` and `server`.

- `client`: A react application responsible for rendering the tic tac toe game and allow the users to play it;
- `server`: A web API responsible to store information about games been played, user's IP address, user's moves, etc;

### Client

The client is basically a web Tic Tac Toe game, and uses the following technologies:

- [Babel](https://babeljs.io/docs/): As a toolchain to transform the transpiled JS files into old JS syntax;
- [Typescript](https://www.typescriptlang.org/): As the main programming language (it is [transpiled](https://dev.to/kealanparr/compiling-vs-transpiling-3h9i) to JS);
- [React](https://react.dev/): As the library to create the front-end;
- [Webpack](https://webpack.js.org/concepts/): To bundle the JS files and serve then in the browser;

It has automatc tests, which uses the following technologies:

- [Jest](https://jestjs.io/pt-BR/): Tools to write different types of tests;
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/): Specific tools to test react components;
- [User Event testing library](https://testing-library.com/docs/ecosystem-user-event/): Specific tools to simulate the user's behaviour during component tests;

And also has a linter and style-guide defined with:

- [Eslint](https://eslint.org/docs/latest/use/getting-started): To define the code style we must follow;
- [Prettier](https://prettier.io/): To format our code with a set of desired styles;

**OBS**: The client's app will eventually have support for login.

### Server

N/A
