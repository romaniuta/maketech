<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center" style="height: 100vh">
      <div class="card text-center" style="width: 30rem;">
        <div class="card-body">
          <h2 class="card-title">Registration</h2>
          <form @submit.prevent="register">
            <div class="row justify-content-center mt-2">
              <div class="row-block">
                <input type="email" id="email" required v-model="email" :class="error ? 'error' : ''">
                <label for="email" :class="error ? 'error-label' : ''">email</label>
              </div>
            </div>
            <div class="row justify-content-center mt-3">
              <div class="row-block">
                <input type="text" id="username" required v-model="username" :class="error ? 'error' : ''">
                <label for="text" :class="error ? 'error-label' : ''">username</label>
              </div>
            </div>
            <div class="row justify-content-center mt-3">
              <div class="row-block">
                <input type="password" id="password" required v-model="password" :class="error ? 'error' : ''">
                <label for="password" :class="error ? 'error-label' : ''">password</label>
              </div>
            </div>
            <div class="row justify-content-center mt-2">
              <button type="submit" class="btn"><h2>login</h2></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regsiter",
  data(){
    return {
      username : "",
      email : "",
      password : "",
      error: false
    }
  },
  methods: {
    register: function () {

      if (this.email === '') {
        this.error = true;
      } else if (this.password === '') {
        this.error = true;
      } else {
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch('register', data)
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style scoped>

h2 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  margin: 0;
}

.card-title {
  color: #505363;
}

.row-block {
  width: 328px;
  position: relative;
}

.row-block input {
  display: block;
  outline: none;
  width: 100%;
  height: 100%;
  background: #fff;
  border: 2px solid #505363;
  border-radius: 4px;
  padding-top: 16px;
  padding-left: 22px;
  padding-bottom: 16px;
}

.row-block label {
  cursor: pointer;
  display: block;
  position: absolute;
  left: 22px;
  top: 16px;
  -webkit-transition: .2s;
  transition: .2s;
  background: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  color: #505363;
}

.row-block input:focus {
  border: 2px solid #6200EE;
}

.row-block input:valid + label,
.row-block input:focus + label {
  top: -10px;
  left: 10px;
  font-size: 11px;
  color: #7463F7;
  padding-left: 10px;
  padding-right: 10px;
}

.btn {
  width: 326px;
  height: 56px;
  background: #7463F7;
}

.btn:hover {
  background: #8A7AFD;
}

.error {
  border-color: #FE5C61 !important;
}

.error-label {
  color: #FE5C61 !important;
}

</style>