<template>
    <div class="authentication-page">
<div class="main-layout card-bg-1">
            <div class="container d-flex flex-column">
                <div class="row no-gutters text-center align-items-center justify-content-center min-vh-100">
                    <div class="col-12 col-md-6 col-lg-5 col-xl-4">
                        <h1 class="font-weight-bold">Inscrivez-vous</h1>
                        <p class="text-dark mb-3">We are Different, We Make You Different.</p>
                        <form class="mb-3">
                             <div class="form-group">
                                <label for="name" class="sr-only">Pseudo</label>
                                <input type="text" class="form-control form-control-md" id="name"
                                    placeholder="Enter your username"
                                    v-model="form.username"
                                    >
                                    
                            </div>
                            <div class="form-group">
                                <label for="name" class="sr-only">Name</label>
                                <input type="text" class="form-control form-control-md" id="name"
                                    placeholder="Enter your First name"
                                    v-model="form.firstname"
                                    >
                                    
                            </div>
                             <div class="form-group">
                                <label for="name" class="sr-only">Prénom</label>
                                <input type="text" class="form-control form-control-md" id="prenom"
                                    placeholder="Enter your Last name"
                                    v-model="form.lastname"
                                    >
                                    
                            </div>
                            <div class="form-group">
                                <label for="name" class="sr-only">E-mail</label>
                                <input type="email" class="form-control form-control-md" id="email"
                                    placeholder="Enter your email"
                                    v-model="form.email"
                                    >
                                    
                            </div>
                            <div class="form-group">
                                <label for="password" class="sr-only">Password</label>
                                <input type="password" class="form-control form-control-md" id="password"
                                    placeholder="Enter your password"
                                    v-model="form.password">
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="sr-only">Rôle</label>
                                <select  class="form-control form-control-md" id="name" v-model="form.role">
                                    <option value="Agent">Agent</option>
                                    <option value="Admin" disabled>Admin</option>
                                </select>
                            </div>

                            <button class="btn btn-primary btn-lg btn-block text-uppercase font-weight-semibold"
                                type="submit" @click.prevent="addUser()">Ajouter</button>
                        </form>

                        <p>Already have an account? <a class="font-weight-semibold" href="/">Sign in</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { chatService } from "../../api/messengerServices";
export default {
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: ""
      },
      on_loading: false,
      message: "Information incorect"
    };
  },
  methods: {
    addUser() {
      chatService.register(this.form).then(alert('Utilisateur créer avec succès'), this.$router
          .push({ name: "login" }))

      
  },
}

}
</script>
