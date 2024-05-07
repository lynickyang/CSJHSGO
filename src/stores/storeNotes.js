import { defineStore } from 'pinia'
import {db} from '../js/firebase'

import { collection, onSnapshot,doc,
   deleteDoc,updateDoc,addDoc,
   query, orderBy} from 'firebase/firestore';
   

// notesCollectionRef = collection(db,'products',this.setId,'message')
// notesCollectionQueryRef = query(notesCollectionRef , orderBy('date', 'desc'))



export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
      ],
      setId:'香水芭樂',
    }
  },
  actions: {
    
    setdbId(id){
      // console.log("觸發setdbIdstore")
      this.setId= id
      // console.log("after set this.setId:",this.setId)
      this.getNotes()
      // setTimeout(() => {
      // }, 2000);

    },

    async getNotes(){
      onSnapshot(query(collection(db,'products',this.setId,'message'), orderBy('date', 'desc')), (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note={
            id:doc.id,
            content:doc.data().content,
            date:doc.data().date
            } 
          notes.push(note)
        })
        this.notes=notes
      })
    },

    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
          date = currentDate.toString()

      await addDoc(collection(db,'products',this.setId,'message'), {
        content:newNoteContent,
        date
      });

    },
    async deleteNote(idToDelete) {
      console.log("觸發delete",idToDelete)
      await deleteDoc(doc(collection(db,'products',this.setId,'message'), idToDelete));
    },

    async updateNote(id, content) {
      await updateDoc(doc(collection(db,'products',this.setId,'message'),id), {
        content
      });
    }
  },
  getters: {
    getNoteContent: (state) => {
      console.log("觸發getNoteContent")
      return (id) => {
        console.log("id:",id)
        return state.notes.filter(note => note.id === id )[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})