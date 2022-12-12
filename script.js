const list = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
]

const input = document.querySelector('.input')
const output = document.querySelector('.output')

window.addEventListener('DOMContentLoaded', loadList)
input.addEventListener('input', filter)

function loadList() {
    let temp = `<ul class="listItems">`
    list.forEach((item) => {
        temp+= `<li class="listItem"> ${item} </li>`
    })
    temp+=`</ul>`
    output.innerHTML = temp
}

function filter(event) {
   let temp = ''
   const result = list.filter(item => item.toLowerCase().includes(event.target.value.toLowerCase()))
   if(result.length > 0){
        temp = `<ul class="listItems">`
        result.forEach(item => {
            temp+= `<li class="listItem"> ${item} </li>`
        })
        temp+=`</ul>`
    } else {
        temp = `<div class="noItem">No item found</div>`
    }

    output.innerHTML = temp
}