<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">webdulich-api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> API for webdulich using NodeJS, ExpressJS, MongoDB
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Basic API for webdulich using NodeJS, ExpressJS, MongoDB
Implement basic CURD for entity, authentication, authorization.
Implement basic unit test for entity, authentication, authorization.
This project is a part of webdulich project
This project is still working in progress

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Any text editor, IDE, or code editor that you like
NodeJS, NPM, MongoDB

### Installing

A step by step series of examples that tell you how to get a development env running.

First, clone the project

```bash
  git clone https://github.com/Phuocn0v/tttn-webdulich-api.git
```

Next, create a .env file in the root folder and add the following

```txt
  DATABASE_URL = {your_datanase_connection_string}/webdulich
  DATABASE_URL_TEST = {your_datanase_connection_string}/webdulich_test
  JWT_PRIVATE_KEY = your_private_key
```

Next, install the dependencies

```bash
  npm install --save
```

Make sure you have mongodb installed and running on your machine. Then create 2 databases, one for development and one for testing. Then run the following command to create the collections

```bash
  mongosh
  use webdulich
  use webdulich_test
```

Finally, run the development server

```bash
  npm run dev
```

## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://react.dev/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@phuocn0v](https://github.com/phuocn0v) - Idea & Initial work
