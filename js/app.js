const burger = document.querySelector('.burger');
const nav = document.querySelector('.navs');
const toggle = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('nav-collapse');
        nav.classList.toggle('nav-toggle')

    })
}

toggle();