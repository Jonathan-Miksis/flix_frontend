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
            <div v-for="medium in media">
            <div class="bg-no-repeat bg-cover bg-center mx-1" img v-bind:src="medium.artwork_url">            
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
            <!-- Slide -->
            <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/1000x1000.jpg);">
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
            <!-- Slide -->
            <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/1000x1000.jpg);">
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
            <!-- Slide -->
            <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/1000x1000.jpg);">
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
import axios from 'axios';

  export default {
    data: function () {
      return {
        message: "Welcome to Flix",
        medium: {},
      };
    },
    created: function() {
    this.indexMedia();
  },
  methods: {
    indexMedia: function() {
      axios.get("/media").then((response) => {
        console.log("Here's the movies and tv...");
        this.media = response.data;
      });
    }
  }
}
</script>