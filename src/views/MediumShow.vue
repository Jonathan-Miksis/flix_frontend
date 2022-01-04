<template>
  <div class="media-show">
        <!-- Main -->
    <main>
        <!-- Breadcrumb -->
        <div class="py-3 bg-gray-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 my-2">
                        <h1 class="m-0 h4 text-center text-lg-start"></h1>
                    </div>
                    <div class="col-lg-6 my-2">
                        <ol class="breadcrumb dark-link m-0 small justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item"><a class="text-nowrap" href="#"><i class="bi bi-home"></i>Home</a></li>
                            <li class="breadcrumb-item text-nowrap active" aria-current="page">{{medium.title}}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- Product Details -->
        <section class="product-details py-6">
            <div class="container">
                <div class="row align-items-start">
                    <!-- Product Gallery -->
                    <div class="col-lg-6 lightbox-gallery product-gallery sticky-lg-top">
                        <div>
                            <img v-bind:src="medium.artwork_url" class="img-fluid" title="" alt="">
                        </div>
                    </div>
                    <!-- End Product Gallery -->
                    <!-- Product Details -->
                    <div class="col-lg-6 ps-lg-5 pt-5 pt-lg-0">
                        <div class="product-detail">
                            <div class="products-title mb-2">
                                <h4 class="h4">{{medium.title}}</h4>
                            </div>
                            <div class="products-brand pb-2">
                              <span> {{medium.year}} </span>
                            </div>
                            <div class="rating-star text small pb-4">
                                <b><small>{{medium.rating}} / 10</small></b> <i class="bi bi-star-fill active"></i>
                            </div>
                            <div class="product-description">
                                <p>Director: {{medium.director}}</p>
                                <p>Cast: {{medium.cast}}</p>
                            </div>
                            </div>
                            
                            <div class="product-detail-actions d-flex flex-wrap pt-3">
                                <div class="cart-button mb-3 d-flex">
                                    <a v-bind:href="medium.trailer_url" target="_blank" rel="noopener noreferrer">
                                    <button class="btn btn-dark me-3">
                                        <i></i> Trailer
                                    </button>
                                    </a>
                                </div>
                            </div>
                        
                            <div class="pt-3 border-top mt-3 small">
                                
                            <!-- More Details -->
                            <div class="product-detail-collapse">
                                <div class="pd-collapse-row">
                                    <a class="pd-collapse-h5" data-bs-toggle="collapse" href="#pd_description" role="button" aria-expanded="true" aria-controls="pd_description">Synopsis<i class="bi bi-chevron-up"></i></a>
                                    <div class="collapse show" id="pd_description">
                                        <div class="pd-collapse-box">
                                            <p>{{medium.synopsis}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pd-collapse-row">
                                    <a class="pd-collapse-h5" data-bs-toggle="collapse" href="#pd_review" role="button" aria-expanded="false" aria-controls="pd_review">Reviews<i class="bi bi-chevron-up"></i></a>
                                    <div class="collapse" id="pd_review">
                                        <div class="pd-collapse-box">
                                            <div class="row align-items-end">
                                                <div class="col-sm-6">
                                                    <div class="rating-star small">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 text-sm-end">
                                                    <a data-bs-toggle="collapse" href="/login" role="button" aria-expanded="false" aria-controls="pd_add_review" v-if="!isLoggedIn()" >Sign in to leave a review</a>
                                                    <a data-bs-toggle="collapse" href="#pd_add_review" role="button" aria-expanded="false" aria-controls="pd_add_review" v-if="isLoggedIn()">Write a review</a>
                                                </div>
                                                <div class="col-12 collapse" id="pd_add_review">
                                                    <div class="my-4 p-3 bg-gray-100 border">
                                                        <form>
                                                            <div class="row g-2">
                                                                <div class="col-sm-12">
                                                                    <label class="form-label m-0 pe-3 w-100">Rating</label>
                                                                    <input type="text" v-model="newReview.flix_rating" class="form-control form-control-sm">
                                                                    
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <label class="form-label">Review Title</label>
                                                                    <input type="text" v-model="newReview.title" name="review" class="form-control form-control-sm">
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <label class="form-label">Body of Review</label>
                                                                    <textarea rows="5" v-model="newReview.post" class="form-control"></textarea>
                                                                </div>
                                                                <div class="col-sm-12 pt-2">
                                                                    <button class="btn btn-dark" v-on:click="createReview()">Submit Review</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex review-box border-top mt-3 pt-3">
                                                <div>
                                                </div>
                                                <div class="col ps-3" v-for="review in medium.reviews" v-bind:key="review.id">
                                                    <h6 class="m-0">{{ review.user }}</h6>
                                                    <span><b>{{ review.title }}</b></span>
                                                    <div class="product-meta small rating-star text">
                                                        <b> {{review.flix_rating}} / 10 </b> <i class="bi bi-star-fill active"></i>
                                                    </div>
                                                    <p class="m-0 pt-2 small">{{ review.post }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End More Details -->
                        </div>
                    </div>
                    <!-- End Product Details -->
                </div>
            </div>
        </section>
        <!-- End Product Details -->
        <!-- You may also like -->
        <!-- <section class="section bg-gray-100 mt-6 mt-lg-10">
            <div class="container">
                <div class="row justify-content-center mb-4 mb-lg-6">
                    <div class="col-lg-6 text-center">
                        <h3 class="h2 mb-2">You Might Also Enjoy</h3>
                    </div>
                </div>
                <div class="slick-carousel slick-nav-dark" data-slick='{
                    "slidesToShow": 4,
                    "slidesToScroll": 1,
                    "focusOnSelect": true,
                    "infinite": false,
                    "responsive": [
                        {
                            "breakpoint":1200,
                            "settings":{
                                "slidesToShow": 4
                            }
                        },
                        {
                            "breakpoint":992,
                            "settings":{
                                "slidesToShow": 3
                            }
                        },
                        {
                            "breakpoint":768,
                            "settings":{
                                "slidesToShow": 2
                            }
                        },
                        {
                            "breakpoint":576,
                            "settings":{
                                "slidesToShow": 1
                            }
                        }
                    ]
                }'> -->
                        <!-- <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/americans-s1.jpeg);">
                            <div class="container">
                                <div class="row min-vh-75 align-items-center justify-content-center py-12">
                                </div>
                            </div>
                        </div>
                        <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/casino_royale.jpg);">
                            <div class="container">
                                <div class="row min-vh-75 align-items-center justify-content-center py-12">
                                </div>
                            </div>
                        </div>
                        <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/dune.jpg);">
                            <div class="container">
                                <div class="row min-vh-75 align-items-center justify-content-center py-12">
                                </div>
                            </div>
                        </div>
                        <div class="bg-no-repeat bg-cover bg-center mx-1" style="background-image: url(/../static/img/lalaland.jpg);">
                            <div class="container">
                                <div class="row min-vh-75 align-items-center justify-content-center py-12">               
                                </div>
                            </div>
                        </div> -->
                <!-- </div>
            </div>
        </section> -->
    </main>
    <!-- End Main -->

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      medium: {},
      newReview: {
        medium_id: this.$route.params.id,
      },
    };
  },
  created: function() {
    this.showMedium();
  },
  methods: {
    showMedium: function(){
      axios.get("/media/" + this.$route.params.id).then((response) => {
        this.medium = response.data;
      })
    },
    createReview: function () {
      axios.post("/reviews", this.newReview).then((response) => {
          this.$router.push("/reviews");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    indexMedia: function() {
      axios.get("/media").then((response) => {
        this.media = response.data;
      });
    },
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    },
    createWatchlist: function(medium) {
    axios.post("/watchlist", {
        status: "watch",
        medium_id: medium.id
    }).then((response) => {
        this.watchlist = response.data
    })
    .catch((error) => {
        this.errors = error.response.data.errors;
    });
    },
  },
};
</script>