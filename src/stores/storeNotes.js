import { defineStore } from 'pinia'
import {db} from '../js/firebase'

import { collection, onSnapshot,getDocs,
  deleteDoc,updateDoc,addDoc,doc,
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
    SetIdKey(id){
      // console.log("觸發store Setkey")
      this.setId = id;
      // console.log("抓到的ＩＤ：",this.setId)
      this.getNotes();
    },

    async getNotes(){
      // console.log("觸發getNotes")
      const querySnapshot = await getDocs(query(collection(db,'products',this.setId,'message'), orderBy('date', 'desc')));
      let notes=[];
      querySnapshot.forEach((doc) => {
        let note={
          id:doc.id,
          content:doc.data().content,
          date:doc.data().date
          } 
        notes.push(note)
      })
      this.notes=notes
      // console.log("this.notes",this.notes)
    },

    // async getNotesAnyTime(){

    //   onSnapshot(query(collection(db,'products',this.setId,'message'), orderBy('date', 'desc')), (querySnapshot) => {
    //     let notes = [];
    //     querySnapshot.forEach((doc) => {
    //       let note={
    //         id:doc.id,
    //         content:doc.data().content,
    //         date:doc.data().date
    //         } 
    //       notes.push(note)
    //     })
    //     this.notes=notes
    //   })
    // },

    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
          date = currentDate.toString()

      await addDoc(collection(db,'products',this.setId,'message'), {
        content:newNoteContent,
        date
      });
      this.getNotes();
    },

    async deleteNote(idToDelete) {
      // console.log("觸發delete",idToDelete)
      await deleteDoc(doc(collection(db,'products',this.setId,'message'), idToDelete));
      console.log("deleteNote")
      this.getNotes();
    },

    async updateNote(id, content) {
      await updateDoc(doc(collection(db,'products',this.setId,'message'),id), {
        content
      });
      console.log("updateNote")
      this.getNotes();
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