<template>
  <div class="col-sm" style="width: 100%; height: 100%; margin-left: 40px; padding-bottom: 51px;">
    <div class="row position-relative">
      <div class="center-text" style="padding-top: 40px; padding-bottom: 30px; margin-left: 122px;">
        <h1>Hello {{ this.$store.getters.user.username }}, </h1>
      </div>
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="center-block">
            <div class="center-block--title">
              <div>
                <button class="btn" data-toggle="modal" data-target="#createOrganizationModal">Add new organization</button>
              </div>
            </div>
            <hr>
            <div class="center-block--body">
              <div class="row" style="margin-bottom: 124px;">
                <div class="col" style="margin-top: 37px;" v-for="organizations in this.$store.getters.organizations" :key="organizations">
                  <div class="card" style="width: 230px; height: 155px;">
                    <div class="card-header d-flex align-items-center">
                      <img src="@/assets/other.svg">
                      <h4>{{ organizations.name }}</h4>
                    </div>
                    <div class="card-footer bg-transparent"><span>Users:</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

  export default {
    name: "CenterPanel",
    ...mapGetters(['user', 'organizations'])
  }
</script>

<style scoped>
.container-fluid {
  background: #F4F7FF;
  margin-left: 122px;
}

.center-block {
  width: 1000px;
  min-height: 860px;
  background: #FFFFFF;
}

.center-block--title {
  width: 100%;
  margin-top: 75px;
  margin-left: 49px;
  margin-bottom: 43px;
}

hr {
  margin-right: 38px;
  margin-left: 38px;
  border: 1px solid #EBEEF8;
}

.center-block--body {
  width: 100%;
  margin-left: 35px;
  margin-right: 35px;
}

h4 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #505363;
  margin: 0;
}

.card {
  background: #F4F7FF;
  border: none;
}

.card-header {
  margin-top: 22px;
  border: none;
  padding: 0;
  background: #F4F7FF;
}

.card-header img {
  margin-left: 13px;
}

.card-header h4 {
  margin-left: 15px;
}

.card-footer {
  border: none;
  padding: 0;
  margin-bottom: 16px;
  margin-top: 82px;
  margin-left: 13px;
}

.card-footer {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  color: #505363;
}

.btn {
  background: #7463F7;
  width: 327px;
  height: 56px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}
</style>