<template>
  <div class="card mb-2">
    <div class="card-body">
      <div class="card-title">
        <small class=" col text-body-tertiary ">{{ deteFormatted }}</small>
      </div>
      <p class="card-text">{{ note.content }}</p>

    </div>
    <div class="card-footer ">
      <a @click.prevent="OpenModel(note.content)" class="text-decoration-none text-primary" href="#">
        編輯
      </a>
      <a @click.prevent="DelModel" class="text-decoration-none text-danger" href="#">
        刪除
      </a>
    </div>
  </div>
  <ModelMes ref="eitModal" :note="tempNote" :noteId="note.id"/>
  <!-- <ModalDeleteNote ref="delModal" v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" /> -->
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useDateFormat } from "@vueuse/core";
// import ModalDeleteNote from '../notes/ModalDeleteNote.vue'
import ModelDel from "../../components/ModalDel.vue"
import { useStoreNotes } from '../../stores/storeNotes.js'
import { ref } from 'vue'
import ModelMes from '../../components/ModalMess.vue'
const eitModal = ref(null)

const delModal = ref(null)
let tempNote = ref({})

function OpenModel(data){
  // console.log("按鈕觸發OPENmodel")
  // console.log("假查傳入DATA:",data)
  tempNote.value = data;
  // console.log("temNOte:",tempNote)
  eitModal.value.showModal();
}
const DelModel = () => {
  console.log("刪除")
}

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  character length
*/

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

/*
  modals
*/

const modals = reactive({
  deleteNote: false
})
/*
  date formatted
*/
const deteFormatted = computed(()=>{
  let date = new Date(parseInt(props.note.date))
  let formattedDate= useDateFormat(date,'YYYY-MM-DD HH:mm:ss')
  return formattedDate.value
})
</script>