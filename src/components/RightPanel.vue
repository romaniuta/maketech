<template>
  <div class="col-1 right-panel">
    <div class="container text-center" style="height: 100%; padding: 0;">
      <div class="top-panel position-absolute" style="width: 100%; height: 100%; padding-top: 15px;">
        <div class="image">
          <img src="@/assets/profile.svg">
        </div>
        <div class="text">
          <span @click="logout">logout</span>
        </div>
      </div>
      <div class="center-panel d-flex justify-content-center align-items-center">
        <div class="links">
          <div class="row" style="width: 84px;height: 70px;">
            <div class="col">
              <router-link active-class="active" to="/" class="calendar align-items-center justify-content-center d-flex">
                <img src="@/assets/calendar.svg">
              </router-link>
            </div>
          </div>
          <div class="row" style="margin-top: 15px;">
            <div class="col">
              <router-link active-class="active" to="/settings" class="files">
                <img src="@/assets/files.svg">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightPanel",
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
            .then(() => {
              this.$router.push('/login')
            })
      },
    }
  }
</script>

<style scoped>

.right-panel {
  width: 84px;
  padding: 0;
  flex: none;
  background: #FFFFFF;
  position: fixed;
  height: 100vh;
  z-index: 2;
}

.text span {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #505363;
  cursor: pointer;
}

.calendar {
  left: 0;
  position: absolute !important;
}

.active {
  width: 96px;
  height: 70px;
  background: #7463F7;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 5px 15px #ACB2C1;
}

.center-panel {
  width: 100%;
  height: 100%;
}
</style>