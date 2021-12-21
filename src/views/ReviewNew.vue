<template>
   <div class="review-new">
     <h1>New Review</h1>
     <form v-on:submit.prevent="createReview()">
       <ul>
         <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
       </ul>
       <!-- Movie: 
      <input type="text" v-model="" /> -->
       Title:
       <input type="text" v-model="newReview.title" />
       Rating:
       <input type="text" v-model="newReview.flix_rating" />
       Post:
       <input type="text" v-model="newReview.post" />
       <input type="submit" value="Create" />
     </form>
   </div>
 </template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newReview: {},
      errors: [],
    };
  },
  methods: {
    createReview: function () {
      axios.post("/reviews", this.newReview).then((response) => {
          this.$router.push("/reviews");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>