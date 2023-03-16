/*
Crie uma função "getDataFromServer" que receba uma chave de API e um 
endpoint e retorne uma promessa que será resolvida com os dados do 
servidor correspondentes à chave e ao endpoint fornecidos. 
Use "fetch" para implementar a função.
*/

function getDataFromServer(apiKey, endpoint) {
    const url = `https://api.github.com/${endpoint}?access_token=${apiKey}`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error('Error fetching data from server:', error)
        })
}

getDataFromServer('Aqui ficaria a apiKey', 'e aqui o endpoint')
