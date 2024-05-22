<template>
  <!-- Modal -->
  <div class="modal fade" data-bs-keyboard="false" tabindex="-1" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">編輯訊息</h1>
          <button @click="hideModal" type="button" class="btn-close"></button>
        </div>
        <div class="modal-body">
          <form>
            <textarea class="form-control"  style="height:100px"
              v-model="tempNote" ></textarea>
            </form>
        </div>

        <div class="modal-footer">
          <button type="button" @click="hideModal" class="btn btn-secondary">取消</button>
          <button type="submit" @click="update" class="btn btn-primary">更新</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import { useStoreNotes } from '../stores/storeNotes'
const storeNotes = useStoreNotes()

export default {
  // props: {
  //   note: {
  //     default() {""},
  //   },
  // },

  props:['note','noteId'],

  watch: {
    note() {
      this.tempNote = this.note;
    },
  },
  data() {
    return {
      modal: {},
      tempNote: {},
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    // update(){
    //   // console.log("note",this.note)
    //   // console.log('noteId', this.noteId)
    //   // console.log("更新訊息後:",this.tempNote)
    //   // console.log("id",key)
    
    //   this.hideModal();
    // }

    update(){
      // console.log('router.params:', this.noteId)
      // console.log('noteContent.value:', this.tempNote)
      storeNotes.updateNote(this.noteId, this.tempNote);
      this.hideModal();
      // console.log("更新完成");
      storeNotes.getNotes();
    }

  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
