const input = document.querySelector('.input-list');
const button = document.querySelector('.button-list');
const list = document.querySelector('.list-group');
const divs = document.querySelectorAll('.search');
const buts = document.querySelector('.but');
const search = document.querySelector('#search-input')

button.addEventListener('click',addtodo)
list.addEventListener('click', deletes)


function addtodo (event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add('lists');

    const addList = document.createElement('li');
    addList.classList.add('add-list');
    addList.innerText = input.value;
    listDiv.appendChild(addList);

    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('add-btn');
    buttonAdd.innerHTML = `<i class="fa-regular fa-square-check fa-2x"></i>`;
    listDiv.appendChild(buttonAdd);

    const buttonremove = document.createElement('button');
    buttonremove.classList.add('remove-btn');
    buttonremove.innerHTML = `<i class="fa-solid fa-trash-can fa-2x"></i>`;
    listDiv.appendChild(buttonremove);

    list.appendChild(listDiv);

    };

function deletes(e){
    if(e.target.classList.contains('fa-trash-can')){
        // e.target.parentElement.parentElement.remove();
        e.target.closest('.lists').remove();
    }
    if(e.target.classList.contains('fa-square-check')){
        e.target.closest('.lists').classList.toggle('check')
    }
    } 

buts.addEventListener('click',function(e){
    e.preventDefault();
divs[0].classList.toggle('expand')
})

const filter = (word)=>{
    Array.from(list.children)
    .forEach(lists => {
        if(lists.textContent.toLowerCase().includes(word)){
            lists.classList.remove('remove')
        }
        else{
            lists.classList.add('remove')
        }
    })
}

search.addEventListener('keyup', ()=>{
    const word = search.value.trim().toLowerCase();
    filter(word);
})