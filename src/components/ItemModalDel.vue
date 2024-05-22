<template>
  <!-- Modal -->
  <div class="modal fade" data-bs-keyboard="false" tabindex="-1" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-danger">確認刪除</h1>
          <button @click="hideModal" type="button" class="btn-close"></button>
        </div>
        <div class="modal-body">
          <p>確定要刪除嗎?</p>
        </div>

        <div class="modal-footer">
          <button type="button" @click="hideModal" class="btn btn-secondary">取消</button>
          <button type="submit" @click="deleteCheck()" class="btn btn-danger">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {  
  emits: ['item-delete'],
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    deleteCheck(){
      console.log("傳回ID觸發DEL");
      this.$emit('item-delete')
      this.hideModal();
    },
    // submit() {
    //   this.$emit('someEvent')
    // }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
