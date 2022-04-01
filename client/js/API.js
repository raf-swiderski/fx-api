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