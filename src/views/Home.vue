<template>
  <div class="home">
    <!-- Main -->
    <main>
        <!-- Home Slider -->
        <div class="slick-carousel slick-nav-rounded home-center-slider" data-slick='{
            "focusOnSelect": true,
            "infinite": true,
            "centerMode": true,
            "centerPadding": "100px",
            "slidesToShow": 3,
            "responsive": [
                {
                    "breakpoint":1200,
                    "settings":{
                        "slidesToShow": 3
                    }
                },
                {
                    "breakpoint":1100,
                    "settings":{
                        "slidesToShow": 2
                    }
                },
                {
                    "breakpoint":992,
                    "settings":{
                        "slidesToShow": 1,
                        "centerPadding": "50px"
                    }
                },
                {
                    "breakpoint":768,
                    "settings":{
                        "slidesToShow": 1,
                        "centerPadding": "0px"
                    }
                }
            ]
        }'>
            <!-- Slide -->
            <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/americans-s1.jpeg);">
                <div class="container">
                    <div class="row min-vh-75 align-items-center justify-content-center py-12">
                        <div class="col-lg-8 text-center">
                            <div class="bg-white px-4 py-4 hc-slider-box">
                                <h6 class="fw-500 text-uppercase mb-3">Home of Movie Lovers</h6>
                                <h1 class="display-6 fw-600 text-uppercase">Flix</h1>
                                <div class="pt-2">
                                    <a class="btn btn-outline-dark" href="/signup">Create an Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/casino_royale.jpg);">
                <div class="container">
                    <div class="row min-vh-75 align-items-center justify-content-center py-12">
                        <div class="col-lg-8 text-center">
                            <div class="bg-white px-4 py-4 hc-slider-box">
                                <h6 class="fw-500 text-uppercase mb-3">Already Have an Account?</h6>
                                <h1 class="display-6 fw-600 text-uppercase">Flix</h1>
                                <div class="pt-2">
                                    <a class="btn btn-outline-dark" href="/login">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/dune.jpg);">
                <div class="container">
                    <div class="row min-vh-75 align-items-center justify-content-center py-12">
                        <div class="col-lg-8 text-center">
                            <div class="bg-white px-4 py-4 hc-slider-box">
                                <h6 class="fw-500 text-uppercase mb-3">Home of Movie Lovers</h6>
                                <h1 class="display-6 fw-600 text-uppercase">Flix</h1>
                                <div class="pt-2">
                                    <a class="btn btn-outline-dark" href="/signup">Create an Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide -->
            <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/lalaland.jpg);">
                <div class="container">
                    <div class="row min-vh-75 align-items-center justify-content-center py-12">
                        <div class="col-lg-8 text-center">
                            <div class="bg-white px-4 py-4 hc-slider-box">
                                <h6 class="fw-500 text-uppercase mb-3">You're Looking Good</h6>
                                <h1 class="display-6 fw-600 text-uppercase">New LookBook</h1>
                                <div class="pt-2">
                                    <a class="btn btn-outline-dark" href="#">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Home Slider -->
        
    </main>
    <!-- End Main -->
  </div>
</template>

<style></style>

<script>

</script>