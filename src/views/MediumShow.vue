<template>
  <div class="media-show">

        <!-- <h2>Title: {{ medium.title}}</h2>
    <p>Release Year: {{ medium.year }}</p>
    <p>Director: {{ medium.director }}</p>
    <p>Cast: {{ medium.cast }}</p>  
    <p>Synopsis: {{ medium.synopsis }}</p>  
    <p>IMDb Rating: {{ medium.rating }}</p>
    <img v-bind:src="medium.artwork_url" v-bind:alt="medium.title"> 
    <img v-bind:src="medium.trailer_url" v-bind:alt="medium.title">
    <h3>Flix Reviews:</h3> 
    <div v-for="review in medium.reviews" v-bind:key="review.id"> 
      <p>{{ review.user }}</p>
      <p><b>{{ review.title }}</b></p>
      <p> Rating: {{ review.flix_rating }}</p>
      <p> {{ review.post }}</p>
    </div>

    <div>
      Title:
        <input type="text" v-model="newReview.title" />
      Rating:
        <input type="text" v-model="newReview.flix_rating" />
      Post:
        <input type="text" v-model="newReview.post" />
      
      <button v-on:click="createReview()">Write A Review</button>
    </div> -->

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
                                <a class="gallery-link" href="//../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
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
                                <i class="bi bi-star-fill active"></i>
                                <i class="bi bi-star-fill active"></i>
                                <i class="bi bi-star-fill active"></i>
                                <i class="bi bi-star-fill active"></i>
                                <i class="bi bi-star"></i>
                                <small>{{medium.rating}}</small>
                            </div>
                            <div class="product-description">
                                <p>Director: {{medium.director}}</p>
                                <p>Cast: {{medium.cast}}</p>
                            </div>
                            </div>
                            
                            <div class="product-detail-actions d-flex flex-wrap pt-3">
                                <div class="cart-button mb-3 d-flex">
                                    <button class="btn btn-dark me-3">
                                        <i></i> Trailer
                                    </button v-bind:src="medium.trailer_url">
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
                                                    <a href="/reviews" class="me-4">View all</a>
                                                    <a data-bs-toggle="collapse" href="#pd_add_review" role="button" aria-expanded="false" aria-controls="pd_add_review">Write a review</a>
                                                </div>
                                                <div class="col-12 collapse" id="pd_add_review">
                                                    <div class="my-4 p-3 bg-gray-100 border">
                                                        <form>
                                                            <div class="row g-2">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label">Username</label>
                                                                    <input type="text" name="name" class="form-control form-control-sm">
                                                                </div>
                                                              
                                                                <div class="col-sm-12">
                                                                    <label class="form-label m-0 pe-3 w-100">Rating</label>
                                                                    <input type="text" v-model="newReview.flix_rating" class="form-control form-control-sm">
                                                                    
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <label class="form-label">Review Title</label>
                                                                    <input type="text" v-model="newReview.title" name="review" class="form-control form-control-sm">
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <label class="form-label">Body of Review (1500)</label>
                                                                    <textarea rows="5" v-model="newReview.post" class="form-control"></textarea>
                                                                </div>
                                                                <div class="col-sm-12 pt-2">
                                                                    <button class="btn btn-primary">Submit Review</button>
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
                                                    <div class="rating-star small">
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star"></i>
                                                        <span><b>{{ review.title }}</b></span>
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
        <section class="section bg-gray-100 mt-6 mt-lg-10">
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
                }'>
                    <div class="p-2" >
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            More on This
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2" v-for="medium in media" v-bind:key="medium.id">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" v-bind:src="medium.artwork_url" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">HELLO</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">{{medium.title}}</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End You may also like -->
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
        medium_id: this.$route.params.id
      },
      media: {},
    };
  },
  created: function() {
    this.showMedium();
  },
  methods: {
    showMedium: function(){
      axios.get("/media/" + this.$route.params.id).then((response) => {
        console.log("pulling up the medium...");
        this.medium = response.data;
      })
    },
    createReview: function () {
      axios.post("/reviews", this.newReview).then((response) => {
          console.log("creating a new review...");
          this.$router.push("/reviews");
        })
        .catch((error) => {
          console.log("error creating the review", error.response);
          this.errors = error.response.data.errors;
        });
    },
    indexMedia: function() {
      axios.get("/media").then((response) => {
        console.log("Here's the movies and tv...");
        this.media = response.data;
      });
    },
  },
};
</script>