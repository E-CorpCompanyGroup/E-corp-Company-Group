function SERVICESPAGE() {
    DIV.innerHTML=`
        <div class="services-page">
            <div class="services-intro-holder">
                <p>
                    Winksta provides wide range of services. Most of which have been provided below.
                </p>
            </div>

            <div class="services-wrapper">
                <div class="artandcrafts">
                    <div class="services-details">
                        <h3 id="service-title">Art & Crafts</h3>

                        <div class="services-offered">
                            <ul>
                                <li>Jewellery</li>
                                <li>Key Chains</li>
                                <li>Hair Accessories</li>
                                <li>Ceremonial Cards</li>
                                <li>Book Marks</li>
                                <li>Home Decor</li>
                                <li>Photo Frames</li>
                                <li>Mug Mats</li>
                                <li><i>etcetera</i></li>
                            </ul>
                        </div>
                    </div>

                    <hr id="horizontal-line">

                    <div class="rep-icon-holder">
                        <img class="icons" id="rep-icon" src="../../white icons/art.png" />
                    </div>
                </div>

                <div class="graphic-services">
                    <div class="services-details">
                        <h3 id="service-title2">Graphic Design</h3>

                        <div class="services-offered">
                            <ul>
                                <li>Business Cards</li>
                                <li>Logos</li>
                                <li>Company Profiles</li>
                                <li>Banners</li>
                                <li>Posters / Flyers</li>
                                <li>Brochures</li>
                                <li>Mockups</li>
                                <li>Photo Editing</li>
                            </ul>
                        </div>
                    </div>

                    <hr id="horizontal-line">

                    <div class="rep-icon-holder">
                        <img class="icons" id="rep-icon" src="../../white icons/graphicicon.png" />
                    </div>
                </div>
            </div>

            <p id="services2products-txt">
                Click <a id="click-here" onclick="PRODUCTSPAGE()">HERE</a> to view images of our products.
            </p>
        </div>

    <!--------------------------------products-header----------------------------------------------------------------->
    <div class="backbtn-container">
        <img class="icons" id="backbtn" src="../../white icons/small/angle-left.png" onclick="HOMEPAGE()" />
        <h3 class="nav-sections">Services</h3>
    </div>
    `;

}