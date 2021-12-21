<template>
  <div class="watchlist">

        <!-- Main -->
    <main>
        <!-- Breadcrumb -->
        <div class="py-3 bg-gray-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-6 my-2">
                        <h1 class="m-0 h4 text-center text-lg-start">My Watchlist</h1>
                    </div>
                    <div class="col-6 my-2">
                        <ol class="breadcrumb dark-link m-0 small justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item"><a class="text-nowrap" href="#"><i class="bi bi-home"></i>Home</a></li>
                            <li class="breadcrumb-item text-nowrap active" aria-current="page">Watchlist</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- Cart Table -->
        <div class="py-6">
            <div class="container">
                <!-- Cart Table -->
                <div class="table-content table-responsive cart-table-content">
                    <table class="table table-bordered align-middle">
                        <thead>
                            <tr class="text-uppercase text-nowrap">
                                <th style="width: 80px;" class="text-dark fw-500">Artwork</th>
                                <th class="text-dark fw-500">Title</th>
                                <th style="width: 120px;" class="text-dark fw-500">IMDb Rating</th>
                                <th style="width: 230px;" class="text-dark text-end fw-500 ">Watched?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="watchlist_item in watchlists">
                                <td class="product-thumbnail">
                                    <a class="text-reset" href="#"><img v-bind:src="watchlist_item.medium.artwork_url" class="img-fluid" width="60" alt=""></a>
                                </td>
                                <td class="product-name"><a class="text-reset" href="#">{{watchlist_item.medium.title}}</a></td>
                                <td class="product-price-cart"><span class="amount">{{watchlist_item.medium.rating}}</span></td>
                                <td class="product-remove text-end text-nowrap">
                                    <button v-on:click="destroyWatchlist(watchlist_item)" class="btn btn-sm btn-outline-dark text-nowrap px-3"><i class="bi bi-x lh-1" @click="reloadPage"></i> <span class="d-none d-md-inline-block">Remove</span></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Cart Table -->
    </main>
    <!-- End Main -->
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data: function() {
    return {
      watchlists: []
    }
  },
  methods: {
    indexWatchlist: function() {
      axios.get("/watchlist").then((response) => {
        this.watchlists = response.data;
      });
    },
    destroyWatchlist: function(watchlist_item) {
       console.log('removing item...')
       console.log(watchlist_item.id)
       axios.delete(`/watchlist/${watchlist_item.id}`).then(response => {
         console.log(response.data);
        //  this.$router.push('/watchlist')
       });
     },
     reloadPage() {
         window.location.reload();
     },
  },
  created: function() {
    this.indexWatchlist();
  },
};
</script>