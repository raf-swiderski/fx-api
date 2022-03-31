const button = document.querySelector('button');

button.addEventListener('click', () => {
    
    getData();
});

const url = 'http://localhost:3000/transactions/1'
const data = {

    headers: {
        'mode': 'no-cors'
    }

}

async function getData() {
    
    const data = await APIreq()
    .then ( (data) => {
        sendToDocument(data);
    })
}


function sendToDocument(data) {
    console.log('Response Here!')
    var div = document.getElementById('json')
    console.log(data)
    div.innerHTML = JSON.stringify(data)
    
}
async function APIreq(url, data) {
    try {
        const response =  await fetch(url, data)
        console.log(response)
        const json = response.json();
        return json
    } catch (error) {
        console.log(error)
    }
}