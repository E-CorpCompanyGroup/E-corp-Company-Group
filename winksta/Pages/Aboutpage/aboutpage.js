function ABOUTPAGE() {
    DIV.innerHTML=`
        <div class="about-page">

            <div class="about-winksta">
                <div class="logo-holder">
                    <img id="logo-abt-page" src="../../Logos/winksta logo.png" />
                </div>
                <div class="bio-text">
                    <h2 id="welcome-theme">Welcome to Winksta</h2>
                    <p>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Meet creativity and beauty here at Winksta with well crafted material to satisfy your needs toward uniqueness and elegancy.<br>
                    Winksta promotes Art in various forms since its products are entirely crafted by hand.
                    </p><br>
                    <p>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Some of the products made include; Jewellery, Home Decorations, Cards, Diaries, Crochets, Paintings and many more.<br>
                    Winksta has an app provided for you to purchase these products and also enabling you make special orders to us, your orders make us get inspired and enable us reach the customers' satisfaction.
                    </p><br>
                    <p>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Winksta does not only deal in physical crafts, but also provides Graphic design services which include; Logos, Company profiles, Business cards, Banners, Posters and more.<br>
                    The client can hire us to provide the services mentioned through the app. This website showcases our work in the <a id="showcases" onclick="PRODUCTSPAGE()">products</a> section.
                    </p>
                </div>
            </div>

            <div class="bio-container">
                <div class="name-holder">
                    <img id="myname" src="../../Pics/MYNAMEBLUE.png" />
                </div>
                <div class="bio-text">
                    <h2 id="welcome-theme">About Founder</h2>
                    <p>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Nagami Esther Ruth is a creative and artistic person, for her love for art, she founded Winksta in order to showcase her work and also for the world to easily reach out to aquire some of her works.<br>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Art and crafts started up as a hobby in her early ages and aquired various skills that kept on growing till date.
                    </p><br>

                    <p>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Esther embraced this talent and learnt a lot in this sector though she is a software developer and graphic designer by profession.
                    </p><br>

                    <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere, dolores reiciendis illum eaque eum explicabo qui autem amet ducimus reprehenderit? Ipsam rem provident natus placeat nam aliquam officiis quo.</p>
                </div>
            </div>

            <div class="bio-pics">
                <div id="bio-image1">
                    <img id="picture1" src="../../Pics/erous babe1.jpg" />
                </div>
                <div id="bio-image1">
                    <img id="picture1" src="../../Pics/Snapchat-2031364609.jpg" />
                </div>
                <div id="bio-image1">
                    <img id="picture1" src="../../Pics/Snapchat-995534130.jpg" />
                </div>
            </div>

<!--------------------------------about-header----------------------------------------------------------------->
            <div class="backbtn-container">
                <img class="icons" id="backbtn" src="../../white icons/small/angle-left.png" onclick="HOMEPAGE()" />
                <h3 class="nav-sections">About</h3>
            </div>
        </div>
    `;
}