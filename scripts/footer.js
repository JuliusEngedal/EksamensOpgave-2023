

const Footer = {


    template : (footer) => `
        <footer class="footer">
        <div class="footer-icons"> 
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        </div>
        <div class="footer-text">
        <h2 class="Zen"> <img src="/assets/fav.ico" alt="logo" class="footer-logo"> Gittes Glamping  </h2>
        </div>
    
        </footer>
    `,



    renderFooter: ( footer ) => {
                footer.insertAdjacentHTML('beforeend', Footer.template(footer))
    },

    init : () => {

        const FooterContainer = document.querySelector('.footer-container');
       
        let cont = FooterContainer;

        if(cont)
        {
            
                Footer.renderFooter( cont);
            
        }   

    }

}




export default Footer
