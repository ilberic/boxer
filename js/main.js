document.addEventListener('DOMContentLoaded', () => {
    //Гамбургер
    let hamburger = document.querySelector('.nav__open'),
        navMenu = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    //меню сворачивающиеся 
    let scrollTop;
    
    if (document.documentElement.clientWidth > 992)   {
        window.addEventListener('scroll', () => {
            scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 100)   {
                navMenu.style.background = "linear-gradient(180deg, rgba(209, 161, 93, 0.5) -90.56%, rgba(255, 255, 255, 0) 224.33%), rgba(255, 255, 255, 0.5)";
            } else {
                navMenu.style.background = "";
            }
    
        });
    }
    
    //Маска ввода номера:
    $(function(){
        $("#phone").mask("+380999999999");
      });
});