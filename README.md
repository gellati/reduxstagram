# Reduxstagram - state management with Redux

Image client with functionality similar to that of Instagram. Built with React and Redux.

## Setup

The required dependencies are listed in the file `package.json`. The can be installed from the command line with

    npm install

The development server can be started with

    npm run start

This will start the server, and the implementation can be seen in the browser in `localhost:7770`.

## Production build

Run

    npm run build

This will create a distro folder with a `bundle.js` file.


## Image data

The image data is in the directory `public`.

## Acknowledgements

Based on Wes Bos' [Learn Redux course](https://www.youtube.com/playlist?list=PLu8EoSxDXHP5uyzEWxdlr9WQTJJIzr6jy). Following updates made.

|Package  | course version | updated version |
|-------------|------------|---------|
|Redux        |  3.3.1     | 4.0.5  |
|Babel        |  6.5.2     | 7.7.7  |
|React router |  2.0.0     | 5.1.2  |
|eslint       |  3.4.0     | 6.8.0  |

Updated babel plugins in `package.json`. Updated code to ES6 with the help of eslint. Added proptype checks to classes. Added `file-loader` in order to be able to load local image files.

Some brief development notes in `notes.md`.
