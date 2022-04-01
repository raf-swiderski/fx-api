const get = document.getElementById('make-get-request');
const post = document.getElementById('make-post-request');

const host = 'http://localhost:3000'
const endpoint = 'transactions'
const id = '1'

const getRequestHeaders = {
    headers: {
        'mode': 'no-cors'
    } 
}

const transaction = {
    title: "I like this title",
    body: "I like rails and trains"
}

const postRequestHeaders = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    // referrerPolicy: 'no-referrer', 
    body: JSON.stringify(transaction) // body data type must match "Content-Type" header
  }

get.addEventListener('click', () => {
    var url = `${host}/${endpoint}/${id}`
    request(url, getRequestHeaders);
});

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
    const div = document.getElementById('json')
    div.innerHTML = JSON.stringify(data)
    
}
