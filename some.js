// // Test part 

// import {some} from './index.js';


// function add(some){
//     return some + 23 /* random number */
// }
// console.log(add(some))

// // Get data from JSON SERVER 

async function getData(){

    const data = await fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(dat => dat);

    console.log(data);

    return data

}

async function buildPage(){
    
    const final_data =  await getData()
    const divData = document.createElement('div')

    for(let item of final_data){
        divData.textContent += `${item.author} написал произведение "${item.name}". `
    }
    
    document.body.append(divData)
    

}

dataButton = document.getElementById('dataButton')

dataButton,addEventListener('click', (ev) => {
    document.body.removeChild(dataButton)
    buildPage()
})


