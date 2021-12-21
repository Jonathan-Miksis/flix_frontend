<template>
  <div id="app">
       <!-- Skippy -->
    <a id="skippy" class="visually-hidden visually-hidden-focusable u-skippy" href="#content">
        <div class="container">
            <span class="u-skiplink-text">Skip to main content</span>
        </div>
    </a>
    <!-- End Skippy -->
    <!-- Preload -->
    <div id="loading" class="preloader">
        <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <!-- End Preload -->
    <!-- Quick View Modal-->
    <div class="modal-quick-view modal fade" id="px-quick-view" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <button class="btn-close position-absolute end-0 top-0 me-2 mt-2 z-index-1" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body p-3">
                    <div class="row">
                        <!-- Product Gallery -->
                        <div class="col-lg-6 lightbox-gallery product-gallery">
                            <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                        </div>
                        <!-- End Product Gallery -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Quick View Modal-->
    <!-- Header -->
    <div class="header-height-bar"></div>
    <header class="header-main bg-white header-light fixed-top header-height">
        <!-- End Top Header -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <!-- Logo -->
                <a class="navbar-brand" href="/">
                    <img src="../public/static/img/logo_final-2.png">
                </a>
                <!-- Logo -->
                <!-- Menu -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="dropdown nav-item">
                            <a href="/media" class="nav-link">Movies and TV</a>
                            <label class="px-dropdown-toggle mob-menu"></label>
                            <ul class="dropdown-menu list-unstyled left">
                                <li><a class="dropdown-item" href="/media">Database</a></li>
                            </ul>
                        </li>
                        <li class="dropdown dropdown-full nav-item">
                            <a href="/reviews" class="nav-link">Reviews</a>
                            <label class="px-dropdown-toggle mob-menu"></label>
                            <div class="dropdown-menu dropdown-menu-lg py-lg-2">
                                <div class="container px-0">
                                    <div class="row g-0">
                                        <div class="col-md-6 my-3">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <a href="/reviews" class="dropdown-item">Reviews</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                     </uL>
                </div>
                <!-- End Menu -->
                <div class="nav flex-nowrap align-items-center header-right">
                    <!-- Account -->
                    <div class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" id="dropdown_myaccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-person-circle"> </i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end mt-2 shadow" aria-labelledby="dropdown_myaccount">
                            <a class="dropdown-item" v-if="!isLoggedIn()" href="/login">Login</a>
                            <a class="dropdown-item" v-if="isLoggedIn()" href="/logout">Logout</a>
                            <a class="dropdown-item" v-if="!isLoggedIn()"  href="/signup">Register</a>
                            <a class="dropdown-item" v-if="isLoggedIn()" href="/watchlist">Watchlist</a>
                            <a class="dropdown-item" v-if="isLoggedIn()" href="my-account.html">My account</a>
                        </div>
                    </div>
                    <!-- Mobile Toggle -->
                    <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- End Mobile Toggle -->
                </div>
            </div>
        </nav>
    </header>
    <!-- Header End -->
    <router-view />
    </div>
</template>

<style>
</style>

<script>
import Vue2Filters from 'vue2-filters';

export default {
    
  data: function () {
    return {
      searchTerm: "",
      };
    },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    },
  }
}
</script>

