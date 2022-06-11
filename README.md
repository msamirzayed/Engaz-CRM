# Engaz-CRM Task

This project is technical task for Engaz as a Frontend Developer.

## Development server

- I used npm as a package manager so you have to run `npm i` to install packages first.

- Run `npm start` or `ng serve` to run the dev server at `http://localhost:4200/`.

---

## Project Specifications

This project contains 3 main modules:

- Auth: which use firebase authentication rest API for anonymously login.

- Panel: which contains two lazy loaded modules (comments, posts).

- Comments & Posts: basic CRUD operation for jsonPlaceholder rest apis.

---

## Structure Details

I made the structure for this basic project match the feature extendability for highly scale projects.

I make a folder for shared services across the project called core which contains the guards, http service, and the storage service.

The modules folder contains the landing panel for the application which contains 2 children lazy loaded modules, and the auth module.

Each feature module contains services, and components folders and it's own routing module.

---

## Feature Improvements

If I had some time for this task I can improve it by:

- Adding any awesome UI Library to make the project lock great.

- Adding more time for unit testing the application..

---
