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
      <a @click.prevent="DeleteModel()" class="text-decoration-none text-danger" href="#">
        刪除
      </a>
    </div>
  </div>
  <ModelMes ref="editModal" :note="tempNote" :noteId="note.id" />
  <ModelDel ref="DelModal" :id="note.id" />
    <!-- <ModalDeleteNote ref="delModal" v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" /> -->
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useDateFormat } from "@vueuse/core";
import ModelDel from "../../components/ModalDel.vue"
import { useStoreNotes } from '../../stores/storeNotes.js'
import { ref } from 'vue'
import ModelMes from '../../components/ModalMess.vue'
const editModal = ref(null)
const DelModal = ref(null)
let tempNote = ref({})

function OpenModel(data){
  tempNote.value = data;
  editModal.value.showModal();
}

function DeleteModel(){
  DelModal.value.showModal();
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