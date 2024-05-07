<script setup>
import { ref,computed, onMounted } from "vue";
import { useFirebaseStore } from "../stores/useFirebaseStore"
const useFBstore = useFirebaseStore();

const props = defineProps(['id']);
// console.log("props.id:",props.id)
/*
  留言板
*/
import Note from '../components/notes/Note.vue'
import AddEditNote from '../components/notes/AddEditNote.vue'
import { useStoreNotes } from '../stores/storeNotes'
import { useWatchCharacters } from '../use/useWatchCharacters'
const storeNotes = useStoreNotes()



// onMounted(()=>{
//   console.log("onMOunted id",props.id)  
//   // storeNotes.setdbId(props.id)
// })

const newNote = ref('')
  const addEditNoteRef = ref(null)

  const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
  }
  useWatchCharacters(newNote)

const itemData = ref(useFBstore.products);
// console.log('useFBstore.products:',useFBstore.products)
// console.log('itemData:',itemData.value)

//從網址抓id,找出資料,指定給movie
const item = computed(() => itemData.value.find((m) => m.id === props.id));


// console.log("item:",item)
</script>
<template>
  <div class="container-md">
      <img class="img-fluid" :src="item.image" :alt="item.name"  />
<!-- 顯示資料movie -->
    <div>
      <h1 class="mb-4 text-5xl">{{ item.name }}</h1>
      <div class="mb-3 movie-item-genres-wrapper">
      </div>
      <p class="text-xl">{{ item.description }}</p>
    </div>
  </div>
<!-- 留言板 -->

<div class="container-md">
    <AddEditNote
      v-model="newNote"
      placeholder="留言區"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="btn btn-light text-success"
        >
          新增紀錄
        </button>
      </template>
    </AddEditNote>

<Note
  v-for="note in storeNotes.notes"
  :key="props.id"
  :note="note"
/>
</div>


</template>
