const domain = '127.0.0.1:8080';
const submit_button = document.getElementById("submit_button");
const news_div = document.getElementById('data');
const check_button = document.getElementById('check_button');
const div_connection = document.getElementById('div-connection');


function buildPage(e){
    news_div.innerHTML = ''
    for (let item of e) {
        let title = document.createElement('h3')
        title.innerHTML = item.header
        let content = document.createElement('p')
        content.innerHTML = item.text
        news_div.appendChild(title)
        news_div.appendChild(content)
    }
};


function displayStatusOfConnection(text, time){
    let status = document.createElement('p')
    status.innerHTML = text
    div_connection.appendChild(status)
    setTimeout(() => div_connection.removeChild(status), time)
};
