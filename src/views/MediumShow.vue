<template>
  <div class="media-show">

        <!-- Main -->
    <main>
        <!-- Breadcrumb -->
        <div class="py-3 bg-gray-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 my-2">
                        <h1 class="m-0 h4 text-center text-lg-start">Shop</h1>
                    </div>
                    <div class="col-lg-6 my-2">
                        <ol class="breadcrumb dark-link m-0 small justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item"><a class="text-nowrap" href="#"><i class="bi bi-home"></i>Home</a></li>
                            <li class="breadcrumb-item text-nowrap active" aria-current="page">Product</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- Product Details -->
        <section class="product-details py-6">
            <div class="container">
                <div class="row align-items-start">
                    <!-- Product Gallery -->
                    <div class="col-lg-6 lightbox-gallery product-gallery sticky-lg-top">
                        <div class="slick-carousel product-slider" data-slick='{
                                "slidesToShow": 1,
                                "slidesToScroll": 1,
                                "arrows": false,
                                "fade": true,
                                "asNavFor": ".product-thumb"
                            }'>
                            <div>
                                <a class="gallery-link" href="//../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="//../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div>
                                <a class="gallery-link" href="//../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div>
                                <a class="gallery-link" href="/../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div>
                                <a class="gallery-link" href="/../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div>
                                <a class="gallery-link" href="/../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div>
                                <a class="gallery-link" href="/../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div>
                                <a class="gallery-link" href="/../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div>
                                <a class="gallery-link" href="/../static/img/1000x1000.jpg"><i class="bi bi-arrows-fullscreen"></i></a>
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                        </div>
                        <div class="slick-carousel product-thumb mt-3" data-slick='{
                                "slidesToShow": 5,
                                "slidesToScroll": 1,
                                "asNavFor": ".product-slider",
                                "centerMode": true,
                                "focusOnSelect": true,
                                "centerPadding": "40px",
                                "responsive": [
                                    {
                                        "breakpoint":1200,
                                        "settings":{
                                            "slidesToShow": 5
                                        }
                                    },
                                    {
                                        "breakpoint":992,
                                        "settings":{
                                            "slidesToShow": 4
                                        }
                                    },
                                    {
                                        "breakpoint":768,
                                        "settings":{
                                            "slidesToShow": 4
                                        }
                                    },
                                    {
                                        "breakpoint":576,
                                        "settings":{
                                            "slidesToShow": 3
                                        }
                                    }
                                ]
                            }'>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                            <div class="pe-2">
                                <img src="/../static/img/1000x1000.jpg" class="img-fluid" title="" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- End Product Gallery -->
                    <!-- Product Details -->
                    <div class="col-lg-6 ps-lg-5 pt-5 pt-lg-0">
                        <div class="product-detail">
                            <div class="products-brand pb-2">
                                <span>Brand name</span>
                            </div>
                            <div class="products-title mb-2">
                                <h4 class="h4">Fine-knit sweater</h4>
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
                                        <input class="form-check-input" type="radio" name="size_d3" id="xs_2" checked="">
                                        <label class="radio-text-label" for="xs_2">XS</label>
                                    </div>
                                    <div class="form-check radio-text form-check-inline me-2">
                                        <input class="form-check-input" type="radio" name="size_d3" id="s_2">
                                        <label class="radio-text-label" for="s_2">S</label>
                                    </div>
                                    <div class="form-check radio-text form-check-inline me-2">
                                        <input class="form-check-input" type="radio" name="size_d3" id="m_2">
                                        <label class="radio-text-label" for="m_2">M</label>
                                    </div>
                                    <div class="form-check radio-text form-check-inline me-2">
                                        <input class="form-check-input" type="radio" name="size_d3" id="l_2">
                                        <label class="radio-text-label" for="l_2">L</label>
                                    </div>
                                </div>
                                <label class="fs-6 text-dark pb-2 fw-500">Color</label>
                                <div class="nav-thumbs nav mb-3">
                                    <div class="form-check radio-color large form-check-inline me-2">
                                        <input class="form-check-input" type="radio" name="color_1" id="color_01" checked="">
                                        <label class="radio-color-label" for="color_01">
                                            <span style="background-color: #126532;"></span>
                                        </label>
                                    </div>
                                    <div class="form-check radio-color large form-check-inline me-2">
                                        <input class="form-check-input" type="radio" name="color_1" id="color_2">
                                        <label class="radio-color-label" for="color_2">
                                            <span style="background-color: #ff9922;"></span>
                                        </label>
                                    </div>
                                    <div class="form-check radio-color large form-check-inline me-2">
                                        <input class="form-check-input" type="radio" name="color_1" id="color_3">
                                        <label class="radio-color-label" for="color_3">
                                            <span style="background-color: #326598;"></span>
                                        </label>
                                    </div>
                                    <div class="form-check radio-color large form-check-inline me-2">
                                        <input class="form-check-input" type="radio" name="color_1" id="color_4">
                                        <label class="radio-color-label" for="color_4">
                                            <span style="background-color: #126578;"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="count-down count-down-02 mb-3" data-countdown="January 01, 2022 15:00:00"></div>
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
                                    <button class="btn btn-outline-dark me-3">
                                        <i class="bi bi-heart"></i>
                                    </button>
                                    <button class="btn btn-outline-dark">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info-buttons nav pt-4">
                                <a href="#" class="me-3" data-bs-toggle="modal" data-bs-target="#px_size_chart_modal"><i class="bi bi-scissors"></i>Size guide</a>
                                <a href="#" class="" data-bs-toggle="modal" data-bs-target="#px_shipping_modal"><i class="bi bi-truck me-2"></i>Shipping</a>
                                <a href="#" class="ms-auto" data-bs-toggle="modal" data-bs-target="#px_ask_modal"><i class="bi bi-envelope ms-auto"></i>Ask about product</a>
                            </div>
                            <div class="pt-3 border-top mt-3 small">
                                <p class="theme-link mb-2">
                                    <label class="m-0 text-dark">Categories:</label>
                                    <a href="#">Sunglasses</a>,
                                    <a href="#">Winter</a>,
                                    <a href="#">Shorts</a>,
                                    <a href="#">Cool</a>
                                </p>
                                <p class="theme-link mb-2">
                                    <label class="m-0 text-dark">Tags:</label>
                                    <a href="#">Fashion</a>,
                                    <a href="#">Women</a>,
                                    <a href="#">Winter</a>
                                </p>
                                <p class="theme-link m-0">
                                    <label class="m-0 text-dark">Share:</label>
                                    <a class="icon icon-sm icon-secondary me-2" href="#">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                    <a class="icon icon-sm icon-secondary me-2" href="#">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                    <a class="icon icon-sm icon-secondary me-2" href="#">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                    <a class="icon icon-sm icon-secondary me-2" href="#">
                                        <i class="bi bi-linkedin"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="pt-4">
                                <img class="img-fluid" src="/../static/img/payment-details.png" title="" alt="">
                            </div>
                            <!-- More Details -->
                            <div class="product-detail-collapse">
                                <div class="pd-collapse-row">
                                    <a class="pd-collapse-h5" data-bs-toggle="collapse" href="#pd_description" role="button" aria-expanded="true" aria-controls="pd_description">Description <i class="bi bi-chevron-up"></i></a>
                                    <div class="collapse show" id="pd_description">
                                        <div class="pd-collapse-box">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pd-collapse-row">
                                    <a class="pd-collapse-h5" data-bs-toggle="collapse" href="#pd_information" role="button" aria-expanded="false" aria-controls="pd_information">Information <i class="bi bi-chevron-up"></i></a>
                                    <div class="collapse" id="pd_information">
                                        <div class="pd-collapse-box">
                                            <table class="table text-sm small m-0 table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <th class="fw-500 text-dark px-0">Color:</th>
                                                        <td class="text-muted">Blue, Purple, White</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="fw-500 text-dark px-0">Size:</th>
                                                        <td class="text-muted "> 20, 24</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="fw-500 text-dark px-0">Weight</th>
                                                        <td class="text-muted ">Ut enim ad minim venialo quis nostrud</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="fw-500 text-dark px-0">Material</th>
                                                        <td class="text-muted ">100% Cotton.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="pd-collapse-row">
                                    <a class="pd-collapse-h5" data-bs-toggle="collapse" href="#pd_review" role="button" aria-expanded="false" aria-controls="pd_review">Reviews <i class="bi bi-chevron-up"></i></a>
                                    <div class="collapse" id="pd_review">
                                        <div class="pd-collapse-box">
                                            <div class="row align-items-end">
                                                <div class="col-sm-6">
                                                    <div class="rating-star small">
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star"></i>
                                                        <span>4.85/5 (400 Reviews)</span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 text-sm-end">
                                                    <a href="#" class="me-4">View all</a>
                                                    <a data-bs-toggle="collapse" href="#pd_add_review" role="button" aria-expanded="false" aria-controls="pd_add_review">Write a review</a>
                                                </div>
                                                <div class="col-12 collapse" id="pd_add_review">
                                                    <div class="my-4 p-3 bg-gray-100 border">
                                                        <form>
                                                            <div class="row g-2">
                                                                <div class="col-sm-6">
                                                                    <label class="form-label">Name</label>
                                                                    <input type="text" name="name" class="form-control form-control-sm">
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <label class="form-label">Email</label>
                                                                    <input type="text" name="email" class="form-control form-control-sm">
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <label class="form-label m-0 pe-3 w-100">Rating</label>
                                                                    <div class="rating-star">
                                                                        <i class="bi small bi-star-fill"></i>
                                                                        <i class="bi small bi-star-fill"></i>
                                                                        <i class="bi small bi-star-fill"></i>
                                                                        <i class="bi small bi-star-fill"></i>
                                                                        <i class="bi small bi-star-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <label class="form-label">Review Title</label>
                                                                    <input type="text" name="review" class="form-control form-control-sm">
                                                                </div>
                                                                <div class="col-sm-12">
                                                                    <label class="form-label">Body of Review (1500)</label>
                                                                    <textarea rows="5" class="form-control"></textarea>
                                                                </div>
                                                                <div class="col-sm-12 pt-2">
                                                                    <button class="btn btn-primary">Submit Review</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex review-box border-top mt-3 pt-3">
                                                <div>
                                                    <div class="review-image sm">
                                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <h6 class="m-0">Nancy Bayer</h6>
                                                    <div class="rating-star small">
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star"></i>
                                                        <span>13 April 2012</span>
                                                    </div>
                                                    <p class="m-0 pt-2 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="d-flex review-box border-top mt-3 pt-3">
                                                <div>
                                                    <div class="review-image sm">
                                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <h6 class="m-0">Nancy Bayer</h6>
                                                    <div class="rating-star small">
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star"></i>
                                                        <span>13 April 2012</span>
                                                    </div>
                                                    <p class="m-0 pt-2 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            <div class="d-flex review-box border-top mt-3 pt-3">
                                                <div>
                                                    <div class="review-image sm">
                                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                                    </div>
                                                </div>
                                                <div class="col ps-3">
                                                    <h6 class="m-0">Nancy Bayer</h6>
                                                    <div class="rating-star small">
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star-fill active"></i>
                                                        <i class="bi small bi-star"></i>
                                                        <span>13 April 2012</span>
                                                    </div>
                                                    <p class="m-0 pt-2 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End More Details -->
                        </div>
                    </div>
                    <!-- End Product Details -->
                </div>
            </div>
        </section>
        <!-- End Product Details -->
        <!-- You may also like -->
        <section class="section bg-gray-100 mt-6 mt-lg-10">
            <div class="container">
                <div class="row justify-content-center mb-4 mb-lg-6">
                    <div class="col-lg-6 text-center">
                        <h3 class="h2 mb-2">You might also like these</h3>
                        <p class="fs-6 m-0">Read Today’s News.</p>
                    </div>
                </div>
                <div class="slick-carousel slick-nav-dark" data-slick='{
                    "slidesToShow": 4,
                    "slidesToScroll": 1,
                    "focusOnSelect": true,
                    "infinite": false,
                    "responsive": [
                        {
                            "breakpoint":1200,
                            "settings":{
                                "slidesToShow": 4
                            }
                        },
                        {
                            "breakpoint":992,
                            "settings":{
                                "slidesToShow": 3
                            }
                        },
                        {
                            "breakpoint":768,
                            "settings":{
                                "slidesToShow": 2
                            }
                        },
                        {
                            "breakpoint":576,
                            "settings":{
                                "slidesToShow": 1
                            }
                        }
                    ]
                }'>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="product-card-1">
                            <div class="product-card-image">
                                <div class="badge-ribbon">
                                    <span class="badge bg-danger">Sale</span>
                                </div>
                                <div class="product-action">
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-heart"></i>
                                    </a>
                                    <a href="#" class="btn btn-outline-primary">
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a>
                                    <a data-bs-toggle="modal" data-bs-target="#px-quick-view" href="javascript:void(0)" class="btn btn-outline-primary">
                                        <i class="bi bi-eye-fill"></i>
                                    </a>
                                </div>
                                <div class="product-media">
                                    <a href="#">
                                        <img class="img-fluid" src="/../static/img/1000x1000.jpg" title="" alt="">
                                    </a>
                                    <div class="product-cart-btn">
                                        <a href="#" class="btn btn-primary btn-sm w-100">
                                            <i class="bi bi-cart"></i>
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card-info">
                                <div class="product-meta small">
                                    <a href="#">Clothing</a>, <a href="#">Men</a>
                                </div>
                                <div class="rating-star text">
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star-fill active"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <h6 class="product-title">
                                    <a href="#">Fine-knit sweater</a>
                                </h6>
                                <div class="product-price">
                                    <span class="text-primary">$28.<small>50</small></span>
                                    <del class="fs-sm text-muted">$38.<small>50</small></del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End You may also like -->
    </main>
    <!-- End Main -->
    <h2>Title: {{ medium.title}}</h2>
    <p>Release Year: {{ medium.year }}</p>
    <p>Director: {{ medium.director }}</p>
    <p>Cast: {{ medium.cast }}</p>  
    <p>Synopsis: {{ medium.synopsis }}</p>  
    <p>IMDb Rating: {{ medium.rating }}</p>
    <img v-bind:src="medium.artwork_url" v-bind:alt="medium.title"> 
    <img v-bind:src="medium.trailer_url" v-bind:alt="medium.title">
    <h3>Flix Reviews:</h3> 
    <div v-for="review in medium.reviews" v-bind:key="review.id"> 
      <p>{{ review.user }}</p>
      <p><b>{{ review.title }}</b></p>
      <p> Rating: {{ review.flix_rating }}</p>
      <p> {{ review.post }}</p>
    </div>

    <div>
      Title:
        <input type="text" v-model="newReview.title" />
      Rating:
        <input type="text" v-model="newReview.flix_rating" />
      Post:
        <input type="text" v-model="newReview.post" />
      
      <button v-on:click="createReview()">Write A Review</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      medium: {},
      newReview: {
        medium_id: this.$route.params.id
      },
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
    createReview: function () {
      axios.post("/reviews", this.newReview).then((response) => {
          console.log("creating a new review...");
          this.$router.push("/reviews");
        })
        .catch((error) => {
          console.log("error creating the review", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>