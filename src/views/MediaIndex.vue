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
                        <a class="btn btn-white btn-sm active" href="/media"><i class="bi bi-grid"></i></a>
                        <a class="btn btn-white btn-sm" href="/media"><i
                                class="bi bi-view-stacked"></i></a>
                    </div>
                    <div class="shortby-dropdown ms-auto">
                        <div class="dropdown">
                            <a class="btn btn-white btn-sm border dropdown-toggle" href="#" role="button"
                                id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Short by
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Featured</a></li>
                                <li><a class="dropdown-item" href="#">Best selling</a></li>
                                <li><a class="dropdown-item" href="#">Alphabetically, A-Z</a></li>
                                <li><a class="dropdown-item" href="#">Alphabetically, Z-A</a></li>
                                <li><a class="dropdown-item" href="#">Price, low to high</a></li>
                                <li><a class="dropdown-item" href="#">Price, high to low</a></li>
                                <li><a class="dropdown-item" href="#">Date, old to new</a></li>
                                <li><a class="dropdown-item" href="#">Date, new to old</a></li>
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
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)"
                                        class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" v-bind:src="medium.artwork_url" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a v-on:click="showMedium(medium)" class="btn btn-primary btn-sm w-100">    
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
                                <div class="product-meta small">
                                    {{medium.rating}}
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Product Box -->  
                <div class="shop-bottom-bar d-flex align-items-center pt-3 mt-3">
                    <div>Showing: 1 - 12 of 17</div>
                    <div class="ms-auto">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- End Product Box -->
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
      media: {},
      searchTerm: "",
      sortOrder: 1,
      sortAttribute: "title",
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