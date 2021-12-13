<template>
  <div class="media-show">
    <h2>Title: {{ medium.title}}</h2>
    <p>Release Year: {{ medium.year }}</p>
    <p>Director: {{ medium.director }}</p>
    <p>Cast: {{ medium.cast }}</p>  
    <p>Synopsis: {{ medium.synopsis }}</p>  
    <p>IMDb Rating: {{ medium.rating }}</p>
    <img v-bind:src="medium.artwork_url" v-bind:alt="medium.synopsis"> 
    <img v-bind:src="medium.trailer_url" v-bind:alt="medium.synopsis"> 
    <p>Flix Reviews: {{ medium.reviews.title }}</p>
    <p> {{ medium.reviews.flix_rating }}</p>
    <p> {{ medium.reviews.post }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      medium: {},
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
  },
};
</script>