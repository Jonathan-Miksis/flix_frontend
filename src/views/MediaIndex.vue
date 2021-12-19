<template>
  <div class="media-index">
        <!-- Search: <input type="text" v-model="searchTerm" list="titles">
    <datalist id="titles">
        <option v-for="medium in media">{{ medium.title }}</option>
    </datalist>
    <div v-for="medium in orderBy(filterBy(media, searchTerm, 'title'), sortAttribute, sortOrder)">
    <h1>Movies and TV</h1>
      <h2>Title: {{ medium.title}}</h2>
      <p>Release Year: {{ medium.year }}</p>
      <p>IMDb Rating: {{ medium.rating }}</p>
      <!-- <img v-bind:src="medium.artwork_url" v-bind:alt="medium.title">  -->
      <!-- <button v-on:click="showMedium(medium)">More Information</button>
      <hr>
    </div> --> 

    <main>
        <!-- Breadcrumb -->
        <div class="py-3 bg-gray-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 my-2">
                        <h1 class="m-0 h4 text-center text-lg-start">Movies &amp; TV</h1>
                    </div>
                    <div class="col-lg-6 my-2">
                        <ol class="breadcrumb dark-link m-0 small justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item"><a class="text-nowrap" href="/"><i
                                        class="bi bi-home"></i>Home</a></li>
                            <li class="breadcrumb-item text-nowrap active" aria-current="page">Movies &amp; TV</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- Shop -->
        <section class="py-6">
            <div class="container-fluid px-xxl-8">
                <!-- Product Box -->
                <div class="shop-top-bar d-flex pb-3">
                    <div class="layout-change">
                        <form class="position-relative w-100 pt-4">
                        <div class="mb-3 input-group">
                            <!-- Search input -->
                            <input class="form-control mr-sm-2" type="text" name="search" placeholder="Search" v-model="searchTerm" list="titles">
                             <datalist id="titles">
                                <option v-for="medium in media">{{ medium.title }}</option>
                            </datalist>
                            <!-- Search button -->
                            <button type="button" class="btn btn-dark shadow-none" v-on:click="searchMedium(medium)">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                    </div>
                    <div class="shortby-dropdown ms-auto">
                        <div class="dropdown" >
                            <a class="btn btn-white btn-sm border dropdown-toggle" href="#" role="button"
                                id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Featured</a></li>
                                <li><a class="dropdown-item" href="#">Best selling</a></li>
                                <li><button class="dropdown-item" v-on:click="setSortAttribute('title')" > Alphabetically, A-Z</button></li>
                                <li><a class="dropdown-item" href="#">Alphabetically, Z-A</a></li>
                                <li><a class="dropdown-item" href="#">Date, old to new</a></li>
                                <li><a class="dropdown-item" href="#">Date, new to old</a></li>
                                    <datalist id="titles">
                                        <option v-for="medium in media">{{ medium.title }}</option>
                                    </datalist>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row g-3">
                    <!-- Product Box -->
                    <div class="col-sm-6 col-lg-3" v-for="medium in media">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-dark">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" v-bind:src="medium.artwork_url" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a v-on:click="showMedium(medium)" class="btn btn-dark btn-sm w-100">    
                                            More on This
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                              <h6 class="product-title">
                                    {{medium.title}}
                                </h6>
                                <div class="product-meta small">
                                    {{medium.year}}
                                </div>
                                <div class="product-meta small rating-star text">
                                   <b> {{medium.rating}} / 10 </b> <i class="bi bi-star-fill active"></i>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <!-- End Shop -->
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import Vue2Filters from 'vue2-filters';

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      media: [],
      searchTerm: "",
      sortOrder: 1,
      sortAttribute: "title",
      filterOptions: ["Title", "Director", "Rating"],
      medium: {},
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
    searchMedium: function(movie) {
      axios.get("/media/" + 13).then((response) => {
        console.log(response.data);
        this.media = response.data;
        console.log(this.media)

      });
    },
    createWatchlist: function() {
        axios.post("/watchlist" + this.newWatchlistItem).then((response) => {
          console.log("adding to watchlist..");
        })
        .catch((error) => {
          console.log("error creating the review", error.response);
          this.errors = error.response.data.errors;
        });
    }
    // searchMedium: function(medium) {
    //     axios.get("/media/" + medium.title).then((response) => {
    //     console.log("pulling up the medium...");
    //     console.log(response.data);
    //     this.medium = response.data;
    //     this.$router.push("/media/" + medium.id);
    //     });
    // },
  },
};
</script>