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
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <!-- End Preload -->
    <!-- Search START -->
    <div class="modal fade px-search-full px-modal-right" id="search_open">
        <div class="modal-dialog px-modal-vertical">
            <div class="modal-content">
                <!-- Header-->
                <div class="modal-header border-bottom">
                    <h6 class="m-0 h5 font-w-600">
                        Search
                    </h6>
                    <!-- Close -->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <form class="position-relative w-100 pt-4">
                        <div class="mb-3 input-group">
                            <!-- Search input -->
                            <input class="form-control shadow-none" type="text" name="search" placeholder="Search Movies &amp; TV">
                            <!-- Search button -->
                            <button type="button" class="btn btn-primary shadow-none">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </form>
                    <!-- <div class="pt-3">
                        <div class="nav tag-cloud">
                            <a class="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 link-dark" href="#">Design</a>
                            <a class="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 link-dark" href="#">Development</a>
                            <a class="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 link-dark" href="#">Travel</a>
                            <a class="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 link-dark" href="#">Web Design</a>
                            <a class="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 link-dark" href="#">Marketing</a>
                            <a class="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 link-dark" href="#">Research</a>
                            <a class="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 link-dark" href="#">Managment</a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <!-- Search END -->
    <!-- Mini Cart -->
    <div class="modal px-modal-right fade" id="modalMiniCart" tabindex="-1" role="dialog" aria-hidden="true">
        <!-- Shopping Cart -->
        <div class="modal-dialog px-modal-vertical">
            <div class="modal-content">
                <!-- Header-->
                <div class="modal-header border-bottom">
                    <h6 class="m-0 fw-bold">
                        Your Cart (2)
                    </h6>
                    <!-- Close -->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <!-- List group -->
                    <ul class="list-unstyled m-0 p-0">
                        <li class="py-3 border-bottom">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <!-- Image -->
                                    <a href="#">
                                        <img class="img-fluid border" src="/../static/img/1000x1000.jpg" alt="...">
                                    </a>
                                </div>
                                <div class="col-8">
                                    <!-- Title -->
                                    <p class="mb-2">
                                        <a class="text-dark fw-500" href="#">Cotton floral print Dress</a>
                                        <span class="m-0 text-muted w-100 d-block">$40.00</span>
                                    </p>
                                    <!--Footer -->
                                    <div class="d-flex align-items-center">
                                        <!-- Select -->
                                        <select class="form-select form-select-sm w-auto">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                        </select>
                                        <!-- Remove -->
                                        <a class="small text-dark ms-auto" href="#!">
                                            <i class="bi bi-x"></i> Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 border-bottom">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <!-- Image -->
                                    <a href="#">
                                        <img class="img-fluid border" src="/../static/img/1000x1000.jpg" alt="...">
                                    </a>
                                </div>
                                <div class="col-8">
                                    <!-- Title -->
                                    <p class="mb-2">
                                        <a class="text-dark fw-500" href="#">Cotton floral print Dress</a>
                                        <span class="m-0 text-muted w-100 d-block">$40.00</span>
                                    </p>
                                    <!--Footer -->
                                    <div class="d-flex align-items-center">
                                        <!-- Select -->
                                        <select class="form-select form-select-sm w-auto">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                        </select>
                                        <!-- Remove -->
                                        <a class="small text-dark ms-auto" href="#!">
                                            <i class="bi bi-x"></i> Remove
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- Footer -->
                <div class="mt-auto p-3 pt-0">
                    <div class="row g-0 py-2">
                        <div class="col-8">
                            <span class="text-dark">Subtotal</span>
                        </div>
                        <div class="col-4 text-end">
                            <span class="ml-auto">$89.00</span>
                        </div>
                    </div>
                    <div class="row g-0 py-2">
                        <div class="col-8">
                            <span class="text-dark">Taxes:</span>
                        </div>
                        <div class="col-4 text-end">
                            <span class="ml-auto">$89.00</span>
                        </div>
                    </div>
                    <div class="row g-0 pt-2 mt-2 border-top fw-bold text-dark">
                        <div class="col-8">
                            <span class="text-dark">Subtotal</span>
                        </div>
                        <div class="col-4 text-end">
                            <span class="ml-auto">$89.00</span>
                        </div>
                    </div>
                    <div class="pt-4">
                        <a class="btn btn-block btn-dark w-100 mb-3" href="#">Continue to Checkout</a>
                        <a class="btn btn-block btn-outline-dark w-100" href="#">View Cart</a>
                    </div>
                </div>
                <!-- Buttons -->
            </div>
        </div>
    </div>
    <!-- End Mini Cart -->
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
                        <!-- Product Details -->
                        <div class="col-lg-6">
                            <div class="product-detail pt-4">
                                <div class="products-brand pb-2">
                                    <span>Brand name</span>
                                </div>
                                <div class="products-title mb-2">
                                    <h1 class="h4">Product Title Here</h1>
                                </div>
                                <div class="rating-star text small pb-4">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                    <small>(4 Reviews )</small>
                                </div>
                                <div class="product-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                                </div>
                                <div class="product-attribute">
                                    <label class="fs-6 text-dark pb-2 fw-500">Size</label>
                                    <div class="nav-thumbs nav mb-3">
                                        <div class="form-check radio-text form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="size3" id="xs2" checked="">
                                            <label class="radio-text-label" for="xs2">XS</label>
                                        </div>
                                        <div class="form-check radio-text form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="size3" id="s2">
                                            <label class="radio-text-label" for="s2">S</label>
                                        </div>
                                        <div class="form-check radio-text form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="size3" id="m2">
                                            <label class="radio-text-label" for="m2">M</label>
                                        </div>
                                        <div class="form-check radio-text form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="size3" id="l2">
                                            <label class="radio-text-label" for="l2">L</label>
                                        </div>
                                    </div>
                                    <label class="fs-6 text-dark pb-2 fw-500">Color</label>
                                    <div class="nav-thumbs nav mb-3">
                                        <div class="form-check radio-color large form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="color1" id="color1" checked="">
                                            <label class="radio-color-label" for="color1">
                                                <span style="background-color: #126532;"></span>
                                            </label>
                                        </div>
                                        <div class="form-check radio-color large form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="color1" id="color2">
                                            <label class="radio-color-label" for="color2">
                                                <span style="background-color: #ff9922;"></span>
                                            </label>
                                        </div>
                                        <div class="form-check radio-color large form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="color1" id="color3">
                                            <label class="radio-color-label" for="color3">
                                                <span style="background-color: #326598;"></span>
                                            </label>
                                        </div>
                                        <div class="form-check radio-color large form-check-inline me-2">
                                            <input class="form-check-input" type="radio" name="color1" id="color4">
                                            <label class="radio-color-label" for="color4">
                                                <span style="background-color: #126578;"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-price fs-3 fw-500 mb-2">
                                    <del class="text-muted fs-6">$38.<small>50</small></del>
                                    <span class="text-primary">$28.<small>50</small></span>
                                </div>
                                <div class="product-detail-actions d-flex flex-wrap pt-3">
                                    <div class="cart-qty me-3 mb-3">
                                        <div class="dec qty-btn">-</div>
                                        <input class="cart-qty-input form-control" type="text" name="qtybutton" value="1">
                                        <div class="inc qty-btn">+</div>
                                    </div>
                                    <div class="cart-button mb-3 d-flex">
                                        <button class="btn btn-dark me-3">
                                            <i class="bi bi-cart"></i> Add to cart
                                        </button>
                                        <button class="btn btn-outline-primary me-3">
                                            <i class="bi bi-heart"></i>
                                        </button>
                                        <button class="btn btn-outline-primary">
                                            <i class="bi bi-arrow-left-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Product Details -->
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
                <a class="navbar-brand" href="../../index.html">
                    <img src="/../static/img/logo.svg" title="" alt="">
                </a>
                <!-- Logo -->
                <!-- Menu -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="dropdown nav-item">
                            <a href="index.html" class="nav-link">Home</a>
                            <label class="px-dropdown-toggle mob-menu"></label>
                            <ul class="dropdown-menu list-unstyled left">
                                <li><a class="dropdown-item" href="../../home/index.html">Home Option 1</a></li>
                            </ul>
                        </li>
                        <li class="dropdown dropdown-full nav-item">
                            <a href="#" class="nav-link">Shop</a>
                            <label class="px-dropdown-toggle mob-menu"></label>
                            <div class="dropdown-menu dropdown-menu-lg py-lg-2">
                                <div class="container px-0">
                                    <div class="row g-0">
                                        <div class="col-md-6 my-3">
                                            <h6 class="px-3">Product Pages</h6>
                                            <ul class="list-unstyled">
                                                <li>
                                                    <a href="../../product-detail/product-details-02.html" class="dropdown-item">Product Details 02</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown dropdown-full nav-item">
                            <a href="#" class="nav-link">Account</a>
                            <label class="px-dropdown-toggle mob-menu"></label>
                            <div class="dropdown-menu dropdown-menu-lg py-lg-2">
                                <div class="container px-0">
                                    <div class="row g-0">
                                        <div class="col-md-6 my-3">
                                            <h6 class="px-3">Account</h6>
                                            <ul class="list-unstyled">
                                                <li>
                                                    <a href="../../account-01/login.html" class="dropdown-item">Login </a>
                                                </li>
                                                <li>
                                                    <a href="../../account-01/sign-up.html" class="dropdown-item">Sign up</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-01/reset-password.html" class="dropdown-item">Forgot Password</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-01/wishlist.html" class="dropdown-item">Wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-01/shopping-cart.html" class="dropdown-item">Shopping Cart </a>
                                                </li>
                                                <li>
                                                    <a href="../../account-01/my-account.html" class="dropdown-item">My Account</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-01/checkout.html" class="dropdown-item">Checkout</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6 my-3">
                                            <h6 class="px-3">My Account Option 2 </h6>
                                            <ul class="list-unstyled">
                                                <li>
                                                    <a href="../../account-02/account-address.html" class="dropdown-item">Account Address</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-02/account-order.html" class="dropdown-item">Account Order</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-02/account-payment.html" class="dropdown-item">Account Payment</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-02/account-profile.html" class="dropdown-item">Account Profile</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-02/account-tickets.html" class="dropdown-item">Account Tickets</a>
                                                </li>
                                                <li>
                                                    <a href="../../account-02/account-wishlist.html" class="dropdown-item">Account Wishlist</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown nav-item">
                            <a href="#" class="nav-link">Blog</a>
                            <label class="px-dropdown-toggle mob-menu"></label>
                            <div class="dropdown-menu left shadow-lg">
                                <a class="dropdown-item" href="../../blog/blog.html">Blog</a>
                                <a class="dropdown-item" href="../../blog/blog-single.html">Blog Single</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- End Menu -->
                <div class="nav flex-nowrap align-items-center header-right">
                    <!-- Nav Search-->
                    <div class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#search_open" href="javascript:void(0)">
                            <i class="bi bi-search"> </i>
                        </a>
                    </div>
                    <!-- Acount -->
                    <div class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" id="dropdown_myaccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bi bi-person-circle"> </i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end mt-2 shadow" aria-labelledby="dropdown_myaccount">
                            <a class="dropdown-item" href="login.html">Login</a>
                            <a class="dropdown-item" href="sign-up.html">Register</a>
                            <a class="dropdown-item" href="wishlist.html">Wishlist</a>
                            <a class="dropdown-item" href="my-account.html">My account</a>
                        </div>
                    </div>
                    <!-- Wishlist -->
                    <div class="nav-item d-none d-xl-block">
                        <a class="nav-link" href="#">
                            <i class="bi bi-heart"> </i>
                        </a>
                    </div>
                    <!-- Cart -->
                    <div class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#modalMiniCart" href="javascript:void(0)">
                            <span class="" data-cart-items="8">
                                <i class="bi bi-cart"> </i>
                            </span>
                        </a>
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

export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

