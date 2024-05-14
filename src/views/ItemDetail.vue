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
