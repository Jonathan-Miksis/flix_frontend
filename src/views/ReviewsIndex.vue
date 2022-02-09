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
                                        <img class="img-fluid" v-bind:src="review.medium.artwork_url" title="" alt="">
                                    <div class="mt-n8 mx-3 mx-lg-4 border bg-white p-4 position-relative">
                                        <div class="text-muted mb-3">{{ review.user.username }}</div>
                                        <div class="h5" href="#">{{ review.title }} </div> 
                                        <div class="product-meta small rating-star text">
                                          <b> {{review.flix_rating}} / 10 </b> <i class="bi bi-star-fill active"></i>
                                        </div>
                                        <p class="pt-3">{{review.post}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <!-- blog end -->
    </main>
    <!-- End Main -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      reviews: {},
      comments: {}
    };
  },
  created: function() {
    this.indexReviews();
  },
  methods: {
    indexReviews: function() {
      axios.get("/reviews").then((response) => {
        this.reviews = response.data;
      });
    },
    showMedium: function(medium) {
      axios.get("/media/" + this.$route.params.id).then((response) => {
        this.medium = response.data;
        this.$router.push("/media/" + medium.id);
      });
    },
    createComment: function () {
      axios.post("/comments", this.newComment).then((response) => {
          console.log("creating a new comment...");
          this.comments = response.data
        })
        .catch((error) => {
          console.log("error creating the review", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
