<template>
  <!-- Modal -->
  <div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-hidden="true"
  ref="modal"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">{{isNew ? '新增' :'編輯'}}</h1>
        <button
        @click="hideModal"
          type="button"
          class="btn-close"
        ></button>
      </div>

      <div class="modal-body">
        <form>
          <input type="hidden" name="id" v-model="tempProduct.id" />

          <div class="form-floating mb-3">
            <input
              class="form-control"
              type="text"
              id="name"
              placeholder="名稱"
              v-model="tempProduct.name"
            ></input>
            <label for="name">名稱</label>
          </div>

          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              v-model="tempProduct.description"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2">描述</label>
          </div>

          <div class="form-floating mb-3">
            <input
              class="form-control"
              type="text"
              id="image"
              placeholder="照片網址"
              v-model="tempProduct.image"
            ></input>
            <label for="image">照片網址</label>
          </div>
        </form>
      </div>

      <div class="modal-footer">
        <button
          @click="hideModal"
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          取消
        </button>

        <button type="submit" @click="$emit('update-product', tempProduct)" class="btn btn-primary">{{isNew ? '新增' :'更新'}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
//   import Modal from '../../node_modules/bootstrap/js/dist/modal'

export default {
  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
    isNew:''
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },
  methods: {
    showModal() {
      console.log("開啟ＭＯＤＡＬ")
      this.modal.show();
    },
    hideModal() {
      console.log("關閉ＭODLE")
      this.modal.hide();
    },

  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
