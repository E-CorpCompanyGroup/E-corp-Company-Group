const homepageHeader=`
    <div class="shop-container">
        <p class="nav-sections"><a id="shopping-cart-icon" href='#'><img class="icons" src="../../white icons/cart.png" /></a></p>
    </div>

        <img id="logo" src="../../Logos/winksta logo.png" />

    <nav class="home-nav">
        <span class="menu-icon-holder">
            <img class="icons" id="menu-icon" onclick="opendropdown()" src="../../white icons/menu.png" />
            <img class="icons" id="close-icon" onclick="closedropdown()"src="../../white icons/small/cross-small(1).png" />
        </span>
        <h3 class="nav-sections"><a id="section" onclick="closefooter()" href='index.html'>Home</a></h3>
        <h3 class="nav-sections"><a id="section" href='#' onclick="ABOUTPAGE()">About</a></h3>
        <h3 class="nav-sections"><a id="section" href='#' onclick="SERVICESPAGE()">Services</a></h3>
        <h3 class="nav-sections"><a id="section" href='#' onclick="PRODUCTSPAGE()">Products</a></h3>
    </nav>
`;

function closefooter() {
    let FOOTERCONTAINER=document.querySelector('.footer-container');
    FOOTERCONTAINER.style.width=0+'%';

    let CONTACTUSBTNOPEN=document.querySelector('.contactus-btn-open');
    CONTACTUSBTNOPEN.style.display='block';

    let CONTACTUSBTNCLOSE=document.querySelector('.contactus-btn-close');
    CONTACTUSBTNCLOSE.style.display='none';
}

function opendropdown() {
    let MENUOPEN=document.querySelector('#menu-icon');
    MENUOPEN.style.display='none';

    let MENUCLOSE=document.querySelector('#close-icon');
    MENUCLOSE.style.display='block';
}

function closedropdown(){
    let MENUOPEN=document.querySelector('#menu-icon');
    MENUOPEN.style.display='block';

    let MENUCLOSE=document.querySelector('#close-icon');
    MENUCLOSE.style.display='none';
}