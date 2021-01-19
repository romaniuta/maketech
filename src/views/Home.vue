<template>
  <div>
    <div class="container">
      <div class="left-panel">
        <div class="title">
          <div class="image">
            <img src="@/assets/profile.svg">
          </div>
          <span @click="logout">Logout</span>
        </div>
      </div>
      <div class="right-panel">
        <form @submit.prevent="create">
          <input type="text" v-model="name">
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from "vuex";
  export default {
    name: "Secure.vue",
    data() {
      return {
        name: ''
      }
    },
    computed: {
      ...mapGetters(['user'])
    },
    created() {
      this.getOragization();
    },
    methods: {
      ...mapActions(['getUserOrganizations']),
      getOragization: function () {
        this.getUserOrganizations();
      },
      logout: function () {
        this.$store.dispatch('logout')
            .then(() => {
              this.$router.push('/login')
            })
      },
      create: function () {
        let name = this.name
        this.$store.dispatch('create', { name })
      }
    },
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    padding: 0;
    background: #F5F6FA;
    display: block;
  }

  .left-panel {
    width: 81px;
    height: 100vh;
    background: #FFFFFF;
    justify-content: center;
    display: flex;
  }

  .left-panel > .title {
    padding-top: 35px;
  }

  .left-panel span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #505363;
  }

</style>