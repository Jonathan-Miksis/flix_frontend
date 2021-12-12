<template>
  <div class="media-show">
    <h2>Title: {{ medium.title}}</h2>
    <p>Release Year: {{ medium.year }}</p>
    <p>Director: {{ medium.director }}</p>
    <p>Cast: {{ medium.cast }}</p>  
    <p>Genre: {{ medium.genre }}</p>
    <p>IMDb Rating: {{ medium.rating }}</p>
    <p>{{ medium.artwork_url }}</p>
    <p>{{ medium.trailer_url }}</p>
    <p>{{ medium.reviews}}</p>
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