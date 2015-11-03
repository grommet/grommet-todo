# Grommet Example App: grommet-todo

## Demo
[Live demo](http://todo.grommet.io/) is the obligitory ToDo application based on Grommet

## How To
This app demonstrates the todo application by using [Modular Grommet](http://grommet.io/docs/documentation/modular-grommet).
Also, this app illustrates the use of [Isomorphic React](http://isomorphic.net).

To run this application, execute the following commands:

  1. Install grommet-todo specific NPM modules

    ```
    $ npm install
    ```

  2. Start the development server:

    ```
    $ gulp dev
    ```

  3. Create the app distribution to be used by the back-end server

    ```
    $ gulp dist
    ```

  4. Start the back-end server with Isomorphic React

    ```
    $ node ssr/server.js
    ```
