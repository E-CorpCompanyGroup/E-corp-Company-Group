function PRODUCTSPAGE() {
    DIV.innerHTML=`
        <div class="products-page">
            <div class="products-introtext-wrapper">
                <p>
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Explore our Winksta products below, both crafts and graphic design.
                </p>
            </div>

            <div class="products-holder">
                <div class="products-theme">
                    <h3 id="products-title">Art and Crafts</h3>
                    <p id="products-paragraph">To purchase any of our craft items, just click on the product to acces the shopping app for a seamless buying experience.</p>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/diamond braclet.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Jewellery</p>
                    </div>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/card-inner-3.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Cards</p>
                    </div>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/IMG_20240809_134752_132.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Photo Frames</p>
                    </div>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/letter e.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Home Decor</p>
                    </div>
                
                </div>
                
            </div>

<!-------------------------------------------------Graphic Design-------------------------------------------------------->

            <div class="products-holder">
                <div class="products-theme">
                    <h3 id="products-title">Graphic Design</h3>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/diamond braclet.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Logos</p>
                    </div>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/card-inner-3.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Business Cards</p>
                    </div>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/IMG_20240809_134752_132.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Brochures & Banners</p>
                    </div>
                </div>

                <div class="product-category">
                    <img id="category-img" loading="lazy" src="../../winkstaedited/letter e.jpg" />
                    <div class="categoryname-holder">
                        <p class="category-name">Flyers / Posters</p>
                    </div>
                
                </div>
                
            </div>
        </div>

<!--------------------------------products-header----------------------------------------------------------------->
        <div class="backbtn-container">
            <img class="icons" id="backbtn" src="../../white icons/small/angle-left.png" onclick="HOMEPAGE()" />
            <h3 class="nav-sections">Products</h3>
        </div>
    `;
    
}