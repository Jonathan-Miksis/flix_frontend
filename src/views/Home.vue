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
        <!-- Privacy Policy -->
        <section class="py-5 bg-gray-100 border-top">
            <div class="container">
                <div class="row g-3">
                    <div class="col-sm-6 col-lg-3">
                        <div class="d-flex">
                            <div class="fs-1 lh-1 text-primary">
                                <i class="bi bi-search"></i>
                            </div>
                            <div class="col ps-3">
                                <h6 class="mb-1">100s of Movies and Shows</h6>
                                <p class="m-0">FInd your next obsession in the database</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="d-flex">
                            <div class="fs-1 lh-1 text-primary">
                                <i class="bi bi-person-circle"></i>
                            </div>
                            <div class="col ps-3">
                                <h6 class="mb-1">Review and Find Friends</h6>
                                <p class="m-0">Write and comment on other reviews while following other members to read theirs</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="d-flex">
                            <div class="fs-1 lh-1 text-primary">
                                <i class="bi bi-heart"></i>
                            </div>
                            <div class="col ps-3">
                                <h6 class="mb-1">Keep Your Watchlist</h6>
                                <p class="m-0">Always make sure you have the next best movie or show on your list</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="d-flex">
                            <div class="fs-1 lh-1 text-primary">
                                <i class="bi bi-star-fill active"></i>
                            </div>
                            <div class="col ps-3">
                                <h6 class="mb-1">Rate Each Movie or Show</h6>
                                <p class="m-0">Take a look at the Flix Rating to see what other people think!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Privacy Policy -->
        
    </main>
    <!-- End Main -->
  </div>
</template>

<style></style>

<script>

</script>