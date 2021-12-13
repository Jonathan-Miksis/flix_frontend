<template>
  <div class="media-index">
    Search: <input type="text" v-model="searchTerm" list="titles">
    <datalist id="titles">
        <option v-for="medium in media">{{ medium.title }}</option>
    </datalist>
    <div v-for="medium in orderBy(filterBy(media, searchTerm, 'title'), sortAttribute, sortOrder)">
    <h1>Movies and TV</h1>
      <h2>Title: {{ medium.title}}</h2>
      <p>Release Year: {{ medium.year }}</p>
      <p>IMDb Rating: {{ medium.rating }}</p>
      <!-- <img v-bind:src="medium.artwork_url" v-bind:alt="medium.synopsis"> 
      <img v-bind:src="medium.trailer_url" v-bind:alt="medium.synopsis">  -->
      <router-link v-bind:to="`/reviews/new`">New Review</router-link>
      <button v-on:click="showMedium(medium)">More Information</button>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      media: {},
      searchTerm: "",
      sortOrder: 1,
      sortAttribute: "title"
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
    setSortAttribute: function(attribute) {
      this.sortAttribute = attribute;
    },
    showMedium: function(medium) {
      axios.get("/media/" + this.$route.params.id).then((response) => {
        console.log("pulling up the medium...");
        this.medium = response.data;
        this.$router.push("/media/" + medium.id);
      });
    },
  },
};
</script>