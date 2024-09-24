let openHamburger = document.querySelector('.bi-list');
let closeHamburger = document.querySelector('.bi-x-lg');
let menu =document.querySelector('.navbar__menu');
let deletebtns= document.querySelectorAll('.section3__delete')

openHamburger.addEventListener('click',()=>{
    openHamburger.style.display="none";
    closeHamburger.style.display="block";
    menu.classList.toggle('hidden');
})

closeHamburger.addEventListener('click',()=>{
    closeHamburger.style.display="none";
    openHamburger.style.display="block";
    menu.classList.toggle('hidden');
})

deletebtns.forEach(deletebtn=>{
    deletebtn.addEventListener('click', ()=>{
        const endpoint = `/contact/${deletebtn.dataset.doc}`;
        fetch(endpoint, {method: 'DELETE'})
            .then((result)=>result.json())
                .then((response)=>{
                    window.location.href=response.redirect;
                })
            .catch((err)=>console.log(err));
    })
})
