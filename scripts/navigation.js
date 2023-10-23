



/*

    Navigation Module

*/



const navigation = {

    navData : [
        {
            page: '../index.html',
            title: 'Forside'
        },
        {
            page: '/pages/Ophold.html',
            title: 'Ophold'
        },
        {
            page: '/pages/Kontakt.html',
            title: 'Kontakt'
        },
        {
            page: '/pages/Aktiviteter.html',
            title: 'Aktiviteter'
        },
      /*   {
            page: '/pages/subscribe.html',
            title: 'Bliv Medlem'
        },
        {
            page: '/pages/basket.html',
            title: 'Kurv/Kvittering/Bestilling'
        } */
    ],

    // Template til rendring af vores menu.
    template : (navDataList) => 
    `<nav class="topnav">    
    <img src="/assets/fav.ico" alt="logo" class="logo">
 
    <div id="myLinks" class="myLinks">
      <ul>
      ${navDataList.map( (link) => `<li><a class="Zen" href="${link.page}">${link.title}</a></li>` ).join(' ')}
      </ul>
    </div>
    
    <a id="burger" class="icon">
      <div class="burger-box">
      <span class="bl-1"></span>
      <span class="bl-2"></span>
      <span class="bl-3"></span>
      </div>
    </a>
    </nav>`,


    // Update metode vi kalder når kurven opdateres.
    update : () => {
 
        console.log('Navigation Update')
        const amountElements = document.querySelectorAll('.navigation .basket-amount');
    
        if(amountElements)
        {
            amountElements.forEach( (amountElem) => {
                amountElem.innerHTML = basketservice.getProductCount()
            });
        }
    },

    // Events vi benytter i navigationen.
    addEvents : () => {

        const Burgermenu = document.querySelector('#myLinks');
        const toggleBurgerMenu = document.querySelector('#burger');
        const nav = document.querySelector('.topnav')
        const logo = document.querySelector('.logo')

        if(toggleBurgerMenu) {
            toggleBurgerMenu.addEventListener('click', () => {
                Burgermenu.classList.toggle('active');
                toggleBurgerMenu.classList.toggle('b-active');
                nav.classList.toggle('nav-farve');
                logo.classList.toggle('none')
            });
        }
    },

    // Initialisere vores navigation. Skriver template, tilføjer events og kalder update for at opdatere kurven
    // Hvis der allerede skulle være en ordre.
    init : () => {

        const navigationElement = document.querySelector('.navigation');
        
        if(navigationElement) {
    
            navigationElement.innerHTML = navigation.template(navigation.navData);
    
         /*    basket.init(); */
            navigation.addEvents();
            navigation.update();
    
        }
        
        
    },

    

};

export default navigation;