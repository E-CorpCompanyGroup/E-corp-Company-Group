const homepageFooter=`
    <div class="footer-container">
        <div class="footer-icon-holder">
            <a href="#" id="footer-icons"><img class="icons" src="../../white icons/small/phone-call.png" /></a>
            <a href="https://mailto:winkstacrafts@gmail.com" id="footer-icons"><img class="icons"  src="../../white icons/small/envelope(1).png" /></a>
            <a href="https://wa.me/+256781476124" id="footer-icons"><img class="icons" src="../../white icons/small/whatsapp(1).png" /></a>
            <a href="#" id="footer-icons"><img class="icons" src="../../white icons/small/instagram(2).png" /></a>
            <a href="#" id="footer-icons"><img class="icons" src="../../white icons/facebook.png" /></a>
        </div>
    </div>

    <div class="contactus-btn-open" onclick="openfooter()">
        <img class="icons" id="contactus-icon" src="../../white icons/phone-guide.png" />
    </div>
    <div class="contactus-btn-close" onclick="closefooter()">
        <img class="icons" id="contactus-icon" src="../../white icons/close.png" />
    </div>
`;



function openfooter() {
    let FOOTERCONTAINER=document.querySelector('.footer-container');
    FOOTERCONTAINER.style.width=90+'%';

    let CONTACTUSBTNOPEN=document.querySelector('.contactus-btn-open');
    CONTACTUSBTNOPEN.style.display='none';

    let CONTACTUSBTNCLOSE=document.querySelector('.contactus-btn-close');
    CONTACTUSBTNCLOSE.style.display='block';
}

function closefooter() {
    let FOOTERCONTAINER=document.querySelector('.footer-container');
    FOOTERCONTAINER.style.width=0+'%';

    let CONTACTUSBTNOPEN=document.querySelector('.contactus-btn-open');
    CONTACTUSBTNOPEN.style.display='block';

    let CONTACTUSBTNCLOSE=document.querySelector('.contactus-btn-close');
    CONTACTUSBTNCLOSE.style.display='none';
}

