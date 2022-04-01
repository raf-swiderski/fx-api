# Case Study Assignment

## Context

Hi, and welcome to AZA Finance! We are just updating our FX platform and will need a new microservice to store FX transactions. These transactions will store how much money we will receive from our customers in the input currency, and how much we will pay them out in the output currency.
All transactions need the following details:
- An identifier
- A customer ID showing who created the transaction Input amount and currency
- Output amount and currency
- Date of transaction

Your task is to create a new microservice that allows creating and listing of these transactions. More specifically create the following three endpoints:
POST /transactions: create a new transaction
GET /transactions: list all transactions in the system
GET /transactions/<id>: get the specific transaction by ID
This is going to be one of the first systems in our new microservice based backend architecture and you are free to decide on any architectural decision that you might encounter during the implementation, including how you wish to persist the transactions. The design of the endpoints are also up to you, the only requirement is that they should all be JSON based both on the input (for the POST) and output.

## Tech Stack

![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Getting Started

Clone this repo and navigate to the route directory of this project.
In your terminal run this to start the server :
```
bin/rails server  
```

I create a browser-based client in order to interact with our API. Simply open this file in the route directory of our project:
```
open client/index.html
```
Following this command, the html file will be loaded in our browser and allows us to test our API by making a post request. 

The post request has transaction data which can be altered within `client/js/requests.js` 

### Post Reqests

To perform a tranaction, simply press the `Make Post Request` button. This will send a `JSON` object to our Rails API with the following structure:
```
{
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    // referrerPolicy: 'no-referrer', 
    body: {
    customer_id: 'lkvLShiCgS4S',
    input_currency: "EUR",
    input_amount: 100,
    output_currency: "USD" // change the currency here (e.g. GBP, USD)
    }
}
```

Once the `POST` request is made, Rails calculates the output amount in the new currency, using a live exchange rate API. 
`NB: The free version of this API allows FX from EUR only!`

Once the output amount has been calculated, the API stores this information in the database, and sends a copy of the stored information back to our endpoint. 

The returning `Json` will display itself on the page.

The database entry/ returning json:
```
{"id":20,"customer_id":"ceXBKgXFzDPn","input_currency":"EUR","input_amount":100,"output_currency":"USD","output_amount":110,"created_at":"2022-04-01T17:37:28.681Z","updated_at":"2022-04-01T17:37:28.681Z"}
```

### Get Requests

To view all transactions visit: `http://localhost:3000/transactions/`

To view a single transaction add the id at the end. E.g. `http://localhost:3000/transactions/2`


## Next Steps

These are some improvements I would make to the system next!

- Allow for 2 more decimal places for currencies in the database. I.e. floats 
- 


 
