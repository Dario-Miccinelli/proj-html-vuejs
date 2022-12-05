<template>

    <div class="main-under">



        <!-- jumbo  -->
        <div class="jumbo-under">

            <img class="m-top" src="../assets/img/man_testimonial.png" alt="">
            <p class="m-top paragraph">Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat.
                Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et
                nibh sadip hendrerit bibendum.</p>

            <p class="m-top paragraph"><strong>Dario Pineda</strong>, Theme Fusion</p>

            <div class="padding">
                <a class="circle"></a>
                <a class="trasparent-circle"></a>
            </div>

        </div>

        <!-- /jumbo -->
        


        <!-- our blog  -->
        <div class="our-blog">
            <h2>From Our Blog</h2>
            <p class="padding font-size">The latest Classic Shop news</p>
        </div>

        <div class="our-blog-img">
            <div class="single-card"><img class="our-img" src="../assets/img/post_img_12-300x188.jpg" alt="">
                <h5>Aenean lobortis sapien enim viverra</h5>
                <p class="">September 9th, 2015|0 Comments</p>
                <p class="">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,</p>
            </div>

            <div class="single-card"><img class="our-img" src="../assets/img/post_img_11-320x202.jpg" alt="">
                <h5>Duis ac massa semper maximus</h5>
                <p class="">September 9th, 2015|0 Comments</p>
                <p class="">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,</p>
            </div>
            <div class="single-card"><img class="our-img" src="../assets/img/post_img_10-320x202.jpg" alt="">
                <h5>Nunc fermint nulla eu justo sem id</h5>
                <p class="">September 9th, 2015|0 Comments</p>
                <p class="">Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla,</p>
            </div>

        </div>
        <hr>

        <!-- fine our blog -->

    </div>
</template>
   
<script>
export default {
    name: 'MainCompBottom',
    props: {

    }
}
</script>
   
   
<style scoped lang="scss">
.m-top {
    margin-top: 3rem;
}

.padding {
    padding: 1.5rem;
}

.font-size {
    font-size: 1.3rem;
}

.jumbo-under {
    background-image: url(../assets/img/testimonials_home_1_bg.jpg);
    background-position: center;
    background-size: cover;
    height: 550px;
    margin-bottom: 5rem;

    .paragraph {
        color: white;
        text-align: center;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        font-size: smaller;
        font-style: italic;
        line-height: 1.5;

    }

    .circle {
        margin: 4px;
        padding: 0rem 0.95rem;
        border: 0px solid white;
        border-radius: 50%;
        background-color: white;
        color: white;

    }

    .trasparent-circle {
        margin: 4px;
        padding: 0rem 0.95rem;
        border: 1px solid white;
        border-radius: 50%;
        background-color: transparent;

    }
}

.our-blog-img {
    display: flex;
    width: 60%;
    margin: auto;
    text-align: left;
    line-height: 1.4rem;
    margin-bottom: 4rem;

    p {
        font-size: 0.9rem;
        margin: 1rem;
    }

    h5 {
        margin-left: 1rem;
        font-size: 1.2rem;
    }
}

.our-img {
    width: 100%;
    padding: 1rem;

}

hr {
    height: 1rem;
    color: black;
}
</style>
   