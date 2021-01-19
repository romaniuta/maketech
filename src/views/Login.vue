<template>
  <div>
      <div class="container">
        <form @submit.prevent="login">
          <div class="card">
            <div class="card-title">
              <h2>Auth</h2>
            </div>
            <div class="card-body">
                <div class="form-control">
                  <input required v-model="email" type="text" placeholder="Snoopy"/>
                </div>
                <div class="form-control">
                  <input required v-model="password" type="password" placeholder="Password"/>
                </div>
            </div>
            <div class="card-footer">
              <button type="submit">login</button>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      email : "",
      password : ""
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
  }

  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    border: 3px solid #7463F7;
    border-radius: 15px;
    width: 400px;
    height: 350px;
  }

  .card-title h2 {
    justify-content: center;
    display: flex;
  }

  .card-body {
    display: flex;
    justify-content: center;
  }

  .form-control {
    margin-top: 15px;
  }

  .form-control input {
    border: 2px solid #505363;
    box-sizing: border-box;
    border-radius: 4px;
    height: 56px;
    width: 355px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 21px;
  }

  .form-control input:focus {
    border: 2px solid #6200EE;
  }
</style>