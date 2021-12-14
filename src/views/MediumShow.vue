<template>
  <div class="media-show">
    <h2>Title: {{ medium.title}}</h2>
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
    </div>
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
  },
};
</script>