<template>
    <!-- <div
      class="card mb-4"
    >
      <div class="card-content">
        <div class="content">
          {{ note.content }}
          <div class="columns is-mobile has-text-grey-light mt-2">
            <small class="column">{{ note.date }}</small>
            <small class="column has-text-right">{{ characterLength }}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer ">
        <RouterLink
          :to="`/editNote/${ note.id }`"
          class="card-footer-item"
          href="#"
        >
          編輯
        </RouterLink>
        <a
          @click.prevent="storeNotes.deleteNote(note.id)"
          class="card-footer-item has-text-danger"
          href="#"
        >
          刪除
        </a>
      </footer>

      <ModalDeleteNote
        ref="delModal"
        v-if="modals.deleteNote"
        v-model="modals.deleteNote"
        :noteId="note.id"
      />

    </div> -->


    <div class="card mb-4">
  <div class="card-body">
    <p class="card-text">{{ note.content }}</p> 
    <div class="row">
        <small class="col text-secondary">{{ note.date }}</small>
        <small class="col text-end text-secondary">{{ characterLength }}</small>
    </div>
  </div>
  <div class="card-footer ">
    <RouterLink
      :to="`/editNote/${ note.id }`"
      class="me-3"
      href="#"
    >
      編輯
    </RouterLink>
    <a
      @click.prevent="storeNotes.deleteNote(note.id)"
      class="text-danger"
      href="#"
    >
      刪除
    </a>
  </div>
</div>
<ModalDeleteNote
        ref="delModal"
        v-if="modals.deleteNote"
        v-model="modals.deleteNote"
        :noteId="note.id"
      />
  </template>
  
  <script setup>
  /*
    imports
  */
  
    import { computed, reactive } from 'vue'
    import ModalDeleteNote from '../notes/ModalDeleteNote.vue'
    import { useStoreNotes } from '../../stores/storeNotes.js'
    import {ref} from 'vue'

    const delModal=ref(null)
  
  /*
    props
  */
  
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
      return `${ length } ${ description }`
    })
  
  /*
    modals
  */
  
    const modals = reactive({
      deleteNote: false
    })
  
  </script>