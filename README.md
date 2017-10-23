# indecision-react-app

React JS to-do List app

## Synopsis

This is a sample web app based on React JS framework. Upon completion this will be a to-do list with a randomized decision maker 
with a minimalistic and beautiful UI. 

## Motivation
This will serve as a checkpoint and track progress on my ReactJS learning path.

## Installation

1. Install nodeJs latest version (https://nodejs.org/en/download/) and Yarn (https://yarnpkg.com/lang/en/docs/install/)
2. Install Live Server: npm install -g live-server
3. Install Babel and its presets/ plugins—babel is a transpiler which converts JSX to browser friendly Javascript code.
    1. npm install babel-cli@6.24.1 -g
    2. yarn init
    3. yarn add babel-preset-react@6.24.1
    4. yarn add babel-preset-env (Refer: https://babeljs.io/docs/plugins/preset-env/)
    5. For compiling, refer: http://babeljs.io/docs/usage/cli/
        This will watch the code on being changed: babel src/app.jsx --out-file=public/scripts/app.js --presets=env,react -w
