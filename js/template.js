let count = null //Счетчик кликов по  элементам

const burger = document.querySelector('.main-btn') // Запуск ракеты

burger.addEventListener('click', (event)=> {
    count += 1
    const rocketElem = document.querySelector('.main-rocket')
    if(count%2 !== 0) {
        rocketElem.classList.add('show-animation')
        event.target.textContent = "Завершить путешествие"
    } else {
        rocketElem.classList.remove('show-animation')
        event.target.textContent = "Начать путешествие"
    }
})


const showMenu = document.querySelector('.header_burger-menu') // Показываем меню на мобильной, планшетной версиях

    showMenu.addEventListener('click', (event)=> {
        count += 1
        const menuElem = document.querySelector('.menu')
        const LogoElem = document.querySelector('.header-image_logo')
        if(count%2 !== 0) {
            LogoElem.style.zIndex = 3
            menuElem.classList.add('menu-show')
            const spanBurgerElem = document.querySelectorAll('.line')
            spanBurgerElem.forEach(elem => {
                if(elem) {
                    elem.style.backgroundColor = 'white'
                    elem.style.zIndex = 2
                    document.body.style.overflow = 'hidden' // Прекращает скролл странцы при открытом - МЕНЮ
                }
            })
        } else {
            menuElem.classList.remove('menu-show')
            document.body.style.overflow = ''
        }


    })
