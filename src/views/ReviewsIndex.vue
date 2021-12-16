<template>
  <div class="reviews-index">

        <!-- Main -->
    <main>
        <!-- Breadcrumb -->
        <div class="py-3 bg-gray-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 my-2">
                        <h1 class="m-0 h4 text-center text-lg-start">Reviews</h1>
                    </div>
                    <div class="col-lg-6 my-2">
                        <ol class="breadcrumb dark-link m-0 small justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item"><a class="text-nowrap" href="#"><i class="bi bi-home"></i>Home</a></li>
                            <li class="breadcrumb-item text-nowrap active" aria-current="page">Reviews</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- blog -->
        <div class="py-6">
            <div class="container">
                <div class="row" >
                    <div class="col-lg-8">
                        <div class="row" >
                            <div class="col-sm-6 my-3" v-for="review in reviews" v-bind:key="review.id">
                                <div class="hover-top-in">
                                    <a href="#">
                                        <img class="img-fluid" v-bind:src="review.medium.artwork_url" title="" alt="">
                                    </a>
                                    <div class="mt-n8 mx-3 mx-lg-4 border bg-white p-4 position-relative">
                                        <div class="text-muted mb-3">{{ review.user.username }}</div>
                                        <a class="h5" href="#">{{ review.title }}</a>
                                        <p class="pt-3">{{review.post}}</p>
                                        <a class="ms-auto font-w-600 link-effect" href="blog-single.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="col-lg-4 my-3 ps-xl-9">
                        <div class="card">
                            <div class="card-header bg-transparent border-bottom p-3">
                                <span class="h5 m-0">Search</span>
                            </div>
                            <div class="card-body p-3">
                                <form class="d-flex input-group">
                                    <input type="email" class="form-control" placeholder="Search">
                                    <button class="btn btn-primary flex-shrink-0" type="submit"><i class="bi bi-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- blog end -->
    </main>
    <!-- End Main -->
    <!-- <h1>All Reviews</h1>
    <div >
      <h2></h2>
      <p>User: </p> 
      <p>Flix Rating: {{ review.flix_rating }}</p>
      <p>{{ review.post }}</p>
      <p>Movie: {{ review.medium.title }}</p>
      <p>{{ review.commemts }}</p>
      <hr>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      reviews: {},
    };
  },
  created: function() {
    this.indexReviews();
  },
  methods: {
    indexReviews: function() {
      axios.get("/reviews").then((response) => {
        console.log("Here are the reviews...");
        this.reviews = response.data;
      });
    },
  },
};
</script>
