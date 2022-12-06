<template>

    <div class="footer-resume">

        <div class="footer-content">

            <div class="column-1">

                <img src="../assets/img/classic_shop_logo_footer.png" alt="">


                <p>12345 North Main Street,
                    <br>
                    New York, NY 555555
                    <br>
                    Phone: 1.800.555.6789
                    <br>
                    Email: info@company.com
                    <br>
                    Web: Theme-fusion.com
                </p>

                <div class="font-icon"> <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
                </div>
            </div>

            <div class="column-2">
                <p class="text-uppercase">top rated</p>

                <div class="d-flex">
                    <div class="text">
                        <p>Leather Gloves</p>
                        <div><font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                        </div>
                        <p>45$</p>
                    </div>

                    <div>
                        <img class="img" src="../assets/img/leather_gloves-120x156.jpg" alt="">
                    </div>
                </div>

                <hr>

                <div class="d-flex">

                    <div class="text">
                        <p>Black Leather Jacket</p>
                        <div><font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                        </div>
                        <span> 
                                    <span class="line-th"><strong>235$</strong></span>
                                    <span class="line-under"><strong>200$</strong></span>
                                </span>
                    </div>

                    <div >
                        <img class="img" src="../assets/img/black_elegant_leather_jacket-120x156.jpg" alt="">
                    </div>
                </div>

                <hr>

                <div class="d-flex">
                    <div class="text">
                        <p>Spring Printed Dress</p>
                        <div><font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                            <font-awesome-icon class="blue-star" icon="fa-solid fa-star" />
                        </div>
                        <p><strong>$47</strong></p>
                    </div>


                    <div >
                        <img class="img" src="../assets/img/spring_printed_dress-120x156.jpg" alt="">
                    </div>
                </div>

                <hr>


            </div>

            <div class="column-3">

                <p class="text-uppercase">RECENT POSTS</p>

                <div class="p-post">
                    <p> <font-awesome-icon icon="fa-solid fa-angle-right" /> Aenean lobortis sapien enim viverra</p>
                    <hr>
                    <p><font-awesome-icon icon="fa-solid fa-angle-right" />Aenean lobortis sapien enim viverra</p>
                    <hr>
                    <p><font-awesome-icon icon="fa-solid fa-angle-right" />Aenean lobortis sapien enim viverra</p>
                    <hr>
                    <p><font-awesome-icon icon="fa-solid fa-angle-right" />Aenean lobortis sapien enim viverra</p>
                    <hr>
                    <p><font-awesome-icon icon="fa-solid fa-angle-right" />Aenean lobortis sapien enim viverra</p>
                    <hr>
                    <p><font-awesome-icon icon="fa-solid fa-angle-right" />Aenean lobortis sapien enim viverra</p>
                    <hr>
                </div>
                
            </div>

            <div class="column-4">
                <p class="text-uppercase m-bot">TAGS</p>

                <div class="tags"> <a href="" class="tag">Black</a>
                <a href="" class="tag">boots</a>
                <a href="" class="tag">Brown</a>
                <a href="" class="tag">Casual</a></div>

                
                <div class="tags"> <a href="" class="tag">D&G</a>
                <a href="" class="tag">Fabric</a>
                <a href="" class="tag">flowers</a>
                <a href="" class="tag">Grey</a></div>
               
               

                <div class="tags">
                    <a href="" class="tag">hat</a>
                <a href="" class="tag">Hipster</a>
                <a href="" class="tag">lines</a>
                </div>

                <div class="tags">
                    <a href="" class="tag">Multi-purpose</a>
                <a href="" class="tag">New York</a>
    
                </div>
               
               
                <div class="tags">
                    <a href="" class="tag">Outdoors</a>
                <a href="" class="tag">red</a>
                <a href="" class="tag">responsive</a>
                </div>

                <div class="tags">
                    <a href="" class="tag">summer</a>
                <a href="" class="tag">sweater</a>
                <a href="" class="tag">Travel</a>
                </div>

                <div class="tags">
                    <a href="" class="tag">Warm</a>
                <a href="" class="tag">White</a>
                <a href="" class="tag">winter</a>
                </div>

                
            </div>







        </div>
    </div>
</template>
   
<script>


export default {
    name: 'FooterResume',
    components: {

    },
    props: {

    }
}
</script>
   
   
<style scoped lang="scss">
.d-flex {
    display: flex;
}



.text {
    font-size: 15px;
    line-height: 28px;
}

.text-uppercase {
    margin-top: 28px;
    text-transform: uppercase;
    margin-bottom: 5rem;
}

.footer-resume {
    height: 650px;
    background-color: #2b2e32;
    color: white;
    
}

.img {
    width: 90px;
    margin-left: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
}


.footer-content {
    width: 75%;
    margin: auto;
    display: flex;
    padding-top: 2rem;

}

.column-1 {
    flex-direction: column;
    display: flex;
    width: 25%;
    text-align: left;

    .font-icon {
        font-size: 25px;
        margin-left: -10px;


        .icon {
            width: 30px;
            height: 30px;
            padding: 0rem 0.3rem;
            margin-right: 10px;
            margin-top: 25px;
            border-radius: 40%;

            background-color: #2B2E32;

        }

    }

    img {
        margin-top: 2rem;
        width: 200px;
        margin-bottom: 50px;
    }

    p {
        line-height: 70px;
    }
}


.column-2 {
    display: flex;
    flex-direction: column;
}

.column-3 {
    display: flex;
    flex-direction: column;
    margin-left: 7rem;

    .p-post {
        line-height: 70px;
        
    }
}

.column-4 {
    flex-wrap: wrap;
    margin-left: 5rem;

    a {
        text-decoration: none;
        color: white;
        margin-right: 8px;
    }
}


.line-th {
    text-decoration: line-through;
}

.line-under {
    text-decoration: underline;
}

// fix img 
#app > div:nth-child(3) > div.footer-resume > div > div.column-2 > div:nth-child(2) > div:nth-child(2) > img {
    margin-left: 70px;
}

// fix

.blue-star {
    color: #427ED1;
    size: 15px;
    line-height: 15px;
}

.tags {
    
    padding: 1.4rem 0rem;

}
.tag {
    border: 1px solid ;
    border-color: #2E3238;
    padding: 0.4rem 1rem;
    margin-top: 5rem; 
}

.tag:hover {
    background-color: #427ED1;

}

</style>
   