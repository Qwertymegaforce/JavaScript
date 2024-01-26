let socket = new WebSocket('ws://' + domain + '/ws')


socket.onopen = (e) => {
    fetch('http://' + domain + '/getnews')
        .then(resp => resp.json())
        .then(data => buildPage(data))
}

socket.onclose = (e) => {
    displayStatusOfConnection('Соединение разорвано. Сервер был выключен', 5000)
}

socket.onmessage = (e) => {
    try{
        buildPage(JSON.parse(e.data))
    } catch(err){
        displayStatusOfConnection(e.data, 2000);
    }
    
}

submit_button.addEventListener('click', ()=>{

        let header = document.getElementById('input_header').value
        let text = document.getElementById('input_text').value
        if (socket.readyState !== WebSocket.CLOSED){
            socket.send(JSON.stringify({header: header, text: text}))
        } else {
            displayStatusOfConnection('Сервер не смог принять запрос. Включите сервер и/или обновите страницу', 5000)
        }

})


check_button.addEventListener('click', () => {
    try{
        if (socket.readyState !== WebSocket.CLOSED){
            socket.send('check')
        } else {
            throw e
        }

    } catch (e){
        displayStatusOfConnection('Вы НЕ подключены к серверу. Попробуйте обновить страницу или включите сервер', 2000);
    }
})



