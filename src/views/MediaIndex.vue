<template>
  <div class="media-index">
    Search: <input type="text" v-model="searchTerm" list="titles">
    <datalist id="titles">
        <option v-for="medium in media">{{ medium.title }}</option>
    </datalist>
    <h1>Movies and TV</h1>
    <div v-for="medium in media" v-bind:key="medium.id">
      <h2>Title: {{ medium.title}}</h2>
      <p>Release Year: {{ medium.year }}</p>
      <p>Director: {{ medium.director }}</p>
      <p>Cast: {{ medium.cast }}</p>  
      <p>Genre: {{ medium.genre }}</p>
      <p>IMDb Rating: {{ medium.rating }}</p>
      <p>{{ medium.artwork_url }}</p>
      <p>{{ medium.trailer_url }}</p>
      <p>{{ medium.reviews}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      media: {},
      searchTerm: "",
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
    },
  },
};
</script>