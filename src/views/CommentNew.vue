<template>
   <div class="comment-new">
     <h1>New Review</h1>
     <form v-on:submit.prevent="createComment()">
       <ul>
         <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
       </ul>
       Comment:
       <input type="text" v-model="newComment.body" />
       <input type="submit" value="Create" />
     </form>
   </div>
 </template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newComment: {},
      errors: [],
    };
  },
  methods: {
    createComment: function () {
      axios.post("/comments", this.newComment).then((response) => {
          console.log("creating a new comment...");
          this.$router.push("/commemts");
        })
        .catch((error) => {
          console.log("error creating the review", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>