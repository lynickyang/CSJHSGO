<template>
  <div class="container-md mt-5">
    <h1>編輯</h1>
    <AddEditNote v-model="noteContent" bgColor="link" placeholder="Edit note" label="Edit Note" ref="addEditNoteRef">
      <template #buttons>
        <button @click="$router.back()" class="btn btn-secondary me-2">
          取消
        </button>
        <button @click="handleSaveClicked" class="btn btn-primary" :disabled="!noteContent">
          保存
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>

/*
  imports
*/

  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import AddEditNote from '../components/notes/AddEditNote.vue'
  import { useStoreNotes } from '../stores/storeNotes'

/*
  router
*/

  const route = useRoute()
  const router = useRouter()

/*
  store
*/

  const storeNotes = useStoreNotes()

/*
  note
*/

  const noteContent = ref('')

  noteContent.value = storeNotes.getNoteContent(route.params.id)

/*
  save clicked
*/

  const handleSaveClicked = () => {
    console.log('router.params:',route.params.id)
    console.log('noteContent.value:',noteContent.value)
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.back()
  }

</script>