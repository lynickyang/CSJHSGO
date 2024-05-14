<script setup>
//如果網址變動要重新取得遠端檔案。

import { ref, onBeforeMount } from "vue";
import Note from "../components/notes/Note.vue";
import AddEditNote from "../components/notes/AddEditNote.vue";
import { useWatchCharacters } from "../use/useWatchCharacters";
import { db } from "../js/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useStoreNotes } from '../stores/storeNotes'
const storeNotes = useStoreNotes()
const props = defineProps(["id"]);
const item = ref({});

async function getItemData() {
  const docRef = doc(db, "products", props.id);
  const itemData = await getDoc(docRef);
  item.value = itemData.data();
}

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

useWatchCharacters(newNote);

onBeforeMount(() => {
  getItemData();
  storeNotes.SetIdKey(props.id)
});

// //從網址抓id,找出資料,指定給movie
// function getItemData(){
//   setTimeout(() => {
//     item = itemData.value.find((m) => m.id === storeNotes.setId);
//   }, 3000);
// }
</script>

<template>
  <h1 class="mt-5">card</h1>
  <div class="card pt-5" style="width: 18rem">
    <img :src="item.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <p class="card-text">{{ item.description }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <!-- 留言板 -->
  <div class="container-md">
    <AddEditNote v-model="newNote" placeholder="留言區" ref="addEditNoteRef">
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

    <Note v-for="note in storeNotes.notes" :key="props.id" :note="note" />
  </div>
</template>
