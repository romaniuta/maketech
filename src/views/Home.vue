<template>
  <div>
    <div class="container-fluid">
        <div class="row">
          <RightPanel />
          <CenterPanel />
          <Modal />
        </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from "vuex";
  import RightPanel from "@/components/RightPanel";
  import CenterPanel from "@/components/CenterPanel";
  import Modal from "@/components/Modal";
  export default {
    name: "Home",
    components: {Modal, CenterPanel, RightPanel},
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
      ...mapActions(['getUserOrganizations', 'fetchUser']),
      getOragization: function () {
        this.getUserOrganizations();
        this.fetchUser();
      },
      create: function () {
        let name = this.name
        this.$store.dispatch('create', { name })
      }
    },
  }
</script>

<style scoped>

.container-fluid {
  background: #F4F7FF;
}

.center-block {
  width: 1000px;
  height: 860px;
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
</style>