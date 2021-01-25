<template>
  <div class="modal fade" id="createOrganizationModal" tabindex="-1" role="dialog" aria-labelledby="createOrganizationModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" style="border: none;">
        <div class="modal-header">
          <div class="col h-100 p-0 d-flex align-items-center" style="max-width: 16px !important;">
            <span
                style="
                width: 100%;
                background: #7463F7;
                height: 70px;
                border-radius: 0px 3px 3px 0px;
            ">
            </span>
          </div>
          <div class="col-8 h-100 align-items-center d-flex" style="padding-left: 46px;">
            <h1 class="modal-title">Create organization</h1>
          </div>
          <div class="col d-flex align-items-center h-100" style="padding-right: 52px;">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" style="width: 22px; height: 22px;"><img src="@/assets/close.svg"></span>
            </button>
          </div>
        </div>
        <div class="modal-body d-flex justify-content-center" style="margin-top: 125px;">
          <form @submit.prevent="send">
            <div class="row justify-content-center">
              <div class="row-block">
                <input type="text" id="text" required v-model="companyName" :class="error ? 'error' : ''">
                <label for="text" :class="error ? 'error-label' : ''">Company Name</label>
              </div>
            </div>
            <div class="row justify-content-center" style="margin-top: 155px;">
              <button type="submit" class="btn"><h2>Send</h2></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
  export default {
    name: "Modal",

    data() {
      return {
        companyName: '',
        error: false
      }
    },

    methods: {
      ...mapGetters(['user']),
      send: function () {
        let companyName = this.companyName
        let userId = this.$store.getters.user.id
        if (companyName === '') {
          this.error = true;
        } else {
          this.$store.dispatch('create', { companyName, userId })
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

  .modal-dialog {
    width: 785px !important;
    height: 685px !important;
    max-width: none;
  }

  .modal-content {
    width: 715px !important;
    height: 685px;
    border: 1px solid #EEF1F7;
    border-radius: 5px;
  }

  .modal-header {
    height: 100px;
    padding: 0;
    box-shadow: 0px 10px 40px rgba(92, 107, 192, 0.195176);
  }

  .close span{
    width: 22px;
    height: 22px;
  }

  .modal-title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
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