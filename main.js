let HEADER=document.querySelector('header');
let HERO=document.querySelector('.hero');
let ATTRIBUTES=document.querySelector('.our-attributes');
let SERVICES=document.querySelector('.services');
let ACHIEVEMENTS=document.querySelector('.achievements');
let FOOTER=document.querySelector('.footer');
let ABOUT=document.querySelector('.aboutus');
let PRODUCTS=document.querySelector('.products');
let DROPDOWNMENU=document.querySelector('.dropdownmenu');


HEADER.innerHTML=headerData;
HERO.innerHTML=heroData;
ATTRIBUTES.innerHTML=ourattributesData;
SERVICES.innerHTML=servicesData;
ACHIEVEMENTS.innerHTML=achievementsData;
FOOTER.innerHTML=footerData;
ABOUT.innerHTML=aboutData;
PRODUCTS.innerHTML=productsData;
DROPDOWNMENU.innerHTML=drodownData;




function readmore() {
    ABOUT.style.display="block";
}

function ourproducts() {
    PRODUCTS.style.display="block";
}

/*----------------------------------------------------------------------*/
function drodownopen(){
    let dropdown=document.querySelector('.dropdownmenu');
    dropdown.style.height=50+"%";

    let menuicon=document.querySelector('#menu-icon');
    menuicon.style.display="none";

    let menuicon2=document.querySelector('#menu-icon2');
    menuicon2.style.display="block";
}

function drodownclose(){
    let dropdown=document.querySelector('.dropdownmenu');
    dropdown.style.height=0+"%";
    
    let menuicon=document.querySelector('#menu-icon');
    menuicon.style.display="block";

    let menuicon2=document.querySelector('#menu-icon2');
    menuicon2.style.display="none";
}

function drodownshut() {
    DROPDOWNMENU.style.display="none";
}