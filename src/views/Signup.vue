<template>
  <div class="signup">
        <!-- Main -->
    <main>
        <!-- Breadcrumb -->
        <div class="py-3 bg-gray-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 my-2">
                        <h1 class="m-0 h4 text-center text-lg-start">Create Your Flix Account</h1>
                    </div>
                    <div class="col-lg-6 my-2">
                        <ol class="breadcrumb dark-link m-0 small justify-content-center justify-content-lg-end">
                            <li class="breadcrumb-item"><a class="text-nowrap" href="#"><i class="bi bi-home"></i>Home</a></li>
                            <li class="breadcrumb-item text-nowrap active" aria-current="page">Register</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb -->
        <!-- signup page -->
        <div class="section">
            <div class="container">
                <div class="justify-content-center row">
                    <div class="col-lg-10 col-xxl-6">
                        <div class="card">
                            <div class="card-header bg-transparent py-3">
                                <h3 class="h4 mb-0">Register </h3>
                            </div>
                            <div class="card-body">
                                <form class="" v-on:submit.prevent="submit()">
                                  <ul>
                                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                                  </ul>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label for="name_1" class="form-label">Username<span class="text-danger">*</span></label>
                                                <input type="text" id="name_1" v-model="newUserParams.username" class="form-control" placeholder="Username">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label for="email_1" class="form-label">Email<span class="text-danger">*</span></label>
                                                <input type="email" id="email_1" v-model="newUserParams.email" class="form-control" placeholder="E-mail">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label col" for="exampleInputPassword_01">Password<span class="text-danger">*</span></label>
                                                <input type="password" class="form-control" id="exampleInputPassword_01" v-model="newUserParams.password" placeholder="*********">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label col" for="exampleInputPassword1">Conform Password<span class="text-danger">*</span></label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" v-model="newUserParams.password_confirmation" placeholder="*********">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" type="checkbox" value="" id="form2Example3" unchecked />
                                        <label class="form-check-label" for="form2Example3"> By registering, I read &amp; accept the terms. </label>
                                    </div>
                                    <div class="form-group row align-items-center">
                                        <div class="col">
                                            <button type="submit" class="btn btn-dark">
                                                Create Account
                                            </button>
                                        </div>
                                        <div class="col-12 col-sm text-sm-end mt-3 mt-sm-0">
                                            <span class="text-muted">Have an account? <a href=/login>Login here</a></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end signup -->
    </main>
    <!-- End Main -->
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        newUserParams: {},
        errors: []
      };
    },
    methods: {
      submit: function () {
        axios
          .post("/users", this.newUserParams)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/login");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    }
  };
</script>