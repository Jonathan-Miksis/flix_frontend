<template>
  <div class="reviews-index">
    <h1>All Reviews</h1>
    <div v-for="review in reviews" v-bind:key="review.id">
      <h2>{{ review.title }}</h2>
      <p>User: {{ review.user.username }}</p> 
      <p>Flix Rating: {{ review.flix_rating }}</p>
      <p>{{ review.post }}</p>
      <p>Movie: {{ review.medium.title }}</p>
      <p>{{ review.commemts }}</p>
      <hr>
    </div>
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
