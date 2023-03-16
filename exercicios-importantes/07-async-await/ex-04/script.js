/*
Crie uma função "getUsersData" que receba um array de IDs de usuário e 
retorne uma promessa que será resolvida com um array de objetos contendo 
os dados do usuário correspondente para cada ID fornecido. 
Use "Promise.all" para enviar solicitações de dados do usuário em paralelo.
*/

function getUsersData(ids) { //recebe um array de ids como parâmetro.
    return Promise.all(ids.map(id => { //o Promise.all é para trazer tudo dessa api, map itera sobre cada elemento do arry
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`) //usando a promessa/fetch de trazer os dados da API com base no seu id
            .then(response => response.json()) //resposta da promessa em formato.json()
    }))
}

getUsersData([1, 2, 3, 4]) //ids passador para o parâmetro da função.
    .then(usersData => console.log(usersData)) //Saída de dados com base nos ids que foram passados
    .catch(error => console.error(error))