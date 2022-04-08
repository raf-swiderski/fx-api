const state = document.getElementById('update-state');

const stateRequestHeaders = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }
  }

state.addEventListener('click', () => {
    var url = `${host}/${endpoint}/paid/2`
    request(url, stateRequestHeaders);
});