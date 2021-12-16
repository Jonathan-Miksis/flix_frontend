<template>
  <div class="login">

      <!-- Main -->
    <main>
        <!-- Breadcrumb -->
        <div class="py-3 bg-gray-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 my-2">
                        <h1 class="m-0 h4 text-center text-lg-start">Login</h1>
                    </div>
                    <div class="col-lg-6 my-2">
                        <ol class="breadcrumb dark-link m-0 small justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item"><a class="text-nowrap" href="/"><i class="bi bi-home"></i>Home</a></li>
                            <li class="breadcrumb-item text-nowrap active" aria-current="page">Login</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- login page -->
        <div class="section">
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-lg-5 col-xxl-4">
                        <div class="card">
                            <div class="card-header bg-transparent py-3">
                                <h3 class="h4 mb-0">Login </h3>
                            </div>
                            <div class="card-body">
                                <form class="" v-on:submit.prevent="submit()">
                                    <div class="form-group mb-3">
                                        <label for="email_1" class="form-label">Email<span class="text-danger">*</span></label>
                                        <input type="text" id="email_1" class="form-control" v-model="newSessionParams.email" placeholder="E-mail">
                                    </div>
                                    <div class="form-group mb-3">
                                        <div class="row align-items-center">
                                            <label class="form-label col" for="exampleInputPassword01">Password<span class="text-danger">*</span></label>
                                            <span class="col ms-auto small text-end"><a href="#!">Forgot password?</a></span>
                                        </div>
                                        <input type="password" class="form-control" id="exampleInputPassword01" v-model="newSessionParams.password" placeholder="*********">
                                    </div>
                                    <!-- Checkbox -->
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="form2Example3" checked />
                                        <label class="form-check-label" for="form2Example3"> Remember me </label>
                                    </div>
                                    <div class="form-group text-center">
                                        <button type="submit" class="btn btn-primary w-100" value="submit"><a href="/"></a>
                                            Log in
                                        </button>
                                    </div>
                                </form>
                                <div class="pt-4 text-center">
                                    <span class="text-muted">Don't have an account? <a href="/signup">Signup here</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end login -->
    </main>
    <!-- End Main -->
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newSessionParams: {},
        errors: []
      };
    },
    methods: {
      submit: function () {
        axios
          .post("/sessions", this.newSessionParams)
          .then((response) => {
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.jwt;
            localStorage.setItem("jwt", response.data.jwt);
            this.$router.push("/reviews");
          })
          .catch((error) => {
            console.log(error.response);
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          });
      }
    }
  };
</script>