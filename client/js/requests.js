const post = document.getElementById('make-post-request');

const host = 'http://localhost:3000'
const endpoint = 'transactions'

const transaction = {
    customer_id: `${generateRandomString(12)}`,
    input_currency: "EUR", // the current API that calculates live FX rates in my Rails project only allows from EUR. 
    input_amount: 100,
    output_currency: "GBP" // change the currency here (e.g. GBP, USD)
}

const getRequestHeaders = {
    headers: {
        'mode': 'no-cors'
    } 
}


const postRequestHeaders = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    // referrerPolicy: 'no-referrer', 
    body: JSON.stringify(transaction) // body data type must match "Content-Type" header
  }


post.addEventListener('click', () => {
    var url = `${host}/${endpoint}`
    request(url, postRequestHeaders);
});

function request(url, data) {
    const response = APIreq(url, data)
    .then ( (res) => {
        sendToDocument(res);
    })
}


function sendToDocument(data) {
    const jsonDiv = document.getElementById('json')
    jsonDiv.innerHTML = JSON.stringify(data)
    
}

function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
