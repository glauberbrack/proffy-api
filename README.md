<h1 align="center">
    <img alt="proffy" title="#proffy" src=".github/logo.svg" width="250px" />
</h1>

## 💻 Project

 Web application to connect teachers and students! This project was created during the Next Level Week from **[Rocketseat] (http://rocketseat.com.br/)** 


## :rocket: Techs

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Knex.js](http://knexjs.org/)
- [Postgres](https://www.postgresql.org/)

## API DOCUMENTATION

:rocket: API developed using Node.js and Typescript.

## Getting started

- Clone this repo
- \$ Run `npm install` in the root folder
- \$ Run `npm dev` in the root folder and your server will run on port 3333.

## CLASSES

`GET /classes`: Return all classes based on the search fields informed by the user.

```
    week_day,
    subject,
    time
```

`POST /classes`: Create a new class, user and schedule

#### Body example:

```json
{
    "name": "Glauber Brack",
    "avatar": "https://mypicture.com/glauberbrack",
    "whatsaap": "11999999999",
    "bio": "Delegadis gente finis, bibendum egestas augue arcu ut est. Detraxit consequat et quo num tendi nada.",
    "subject": "Chemistry",
    "price": 90,
    "schedule": [
        { "week_day": 1, "from": "8:00", "to": "18:00" },
        { "week_day": 3, "from": "8:00", "to": "12:00" },
        { "week_day": 5, "from": "8:00", "to": "18:00" }
    ]
}
```
## CONNECTIONS 

`GET /connections`: Return the total connections that where made using the plataform

`POST /connections`: Make a connection

```json
{
    "user_id": 1
}
```