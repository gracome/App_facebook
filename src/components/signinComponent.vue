<template>
  <div class="authentication-page">
    <div class="main-layout card-bg-1">
      <div class="container d-flex flex-column">
        <div class="row no-gutters text-center align-items-center justify-content-center min-vh-100">
          <div class="col-12 col-md-6 col-lg-5 col-xl-4">
            <h1 class="font-weight-bold">Connectez-vous</h1>
            <p class="text-dark mb-3">We are Different, We Make You Different.</p>
            <form class="mb-3">
              <div class="form-group">
                <label for="name" class="sr-only">Username</label>
                <input
                  type="text"
                  class="form-control form-control-md"
                  id="email"
                  placeholder="Enter your username"
                  required
                  v-model="form.username"
                />
                <span class="error-text" v-if="hasError && form.username == ''">
                  Le nom d'utilisateur est obligatoire.
                </span>
              </div>
              <div class="form-group">
                <label for="password" class="sr-only">Password</label>
                <input
                  type="password"
                  class="form-control form-control-md"
                  id="password"
                  placeholder="Enter your password"
                  required
                  v-model="form.password"
                />
                <span class="error-text" v-if="hasError && form.password == ''">
                  Le mot de passe est obligatoire.
                </span>
              </div>
              <div class="form-group d-flex justify-content-between">
              </div>
               <button
                class="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                type="submit"
                :disabled="on_loading"
                @click.prevent="logUser()"
              >
                <template v-if="on_loading">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </template>
                <template v-else>
                  Se connecter
                </template>
              </button>
            </form>
            <p>
              Don't have an account?
              <a class="font-weight-semibold" href="signup">Sign up</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accountService } from "../../api/services";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      on_loading: false,
      message: "Information incorect",
      hasError: false,
    };
  },
  methods: {
    logUser() {
  // Vérifiez si le champ de nom d'utilisateur ou de mot de passe est vide
  if (this.form.username == "" || this.form.password == "") {
    this.hasError = true;
    if (this.form.username == "") {
      this.message = "Le nom d'utilisateur est obligatoire.";
    } else {
      this.message = "Le mot de passe est obligatoire.";
    }
    return;
  }

  this.on_loading = true;
  accountService.login(this.form).then((res) => {
    // Si l'appel de l'API a réussi, enregistrez le jeton dans le localStorage
    accountService.saveToken(res.data.accessToken);

    // Si le jeton n'a pas été enregistré correctement, affichez un message d'erreur
    if (localStorage.getItem("token") === "undefined") {
      this.hasError = true;
      this.message = "Information de connexion incorrecte.";
      this.on_loading = false;
    } else {
      // Sinon, déplacez l'utilisateur vers la page des conversations
      this.$router.push({ name: "home" });
    }
  }).catch(() => {
    // Si l'appel de l'API a échoué, affichez un message d'erreur
    this.hasError = true;
    this.message = "Information de connexion incorrecte.";
    this.on_loading = false;
  });
},
  }
}
</script>
<style>
.spinner-border {
  width: 20px !important;
  height: 20px !important;
}
.error-text{
  color: red;
  font-size: 10px;
}
</style>