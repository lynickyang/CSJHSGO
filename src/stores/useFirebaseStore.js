import { defineStore } from 'pinia'
import {db} from '../js/firebase'

import { collection, onSnapshot,getDocs,
  deleteDoc,updateDoc,setDoc,doc
  } from "firebase/firestore";

export const useFirebaseStore = defineStore('firebaseStore', {
  state:()=>{
    return{
      products:[],
      dataReady:false
    }
  },
  actions:{
    async getProducts(){
      const querySnapshot = await getDocs(collection(db, 'products'));
      let datas=[];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let data = {
          id:doc.id,
          name:doc.data().name,
          description:doc.data().description,
          image:doc.data().image
        }
      datas.push(data)
      })
      this.products=datas
      this.dataReady=true
      // console.log("擷取完成ready,",this.dataReady)
    },
    async getProductsAnyTime(){
      // console.log("觸發getProducts<ready:" ,this.dataReady)
      onSnapshot(collection(db,'products'), (querySnapshot) => {
        let datas=[];
        querySnapshot.forEach((doc) => {
            let data = {
              id:doc.id,
              name:doc.data().name,
              description:doc.data().description,
              image:doc.data().image
            }
          datas.push(data)
        })
        this.products=datas
        this.dataReady=true
        // console.log("擷取完成ready,",this.dataReady)
      })
    },

    async addData(item){
      // console.log("觸發新增")
      // console.log("傳入資料",item)
      let currentDate = new Date().getTime(),
      date = currentDate.toString()

    await setDoc(doc(db,'products',item.name), {
      id:date,
      name:item.name,
      image:item.image,
      description:item.description,
    })
    this.getProducts();
    },

    async deletData(idToDelete) {
      // console.log("storeDELETE,id:",idToDelete)
      await deleteDoc(doc(collection(db,'products'), idToDelete));
      this.getProducts();
    },

    async editData(content,id ) {
      // console.log("觸發store更新，資料：",content)
      // console.log("觸發store更新，id：",id)
      await updateDoc(doc(collection(db,'products'),id), {
        id:content.id,
        name:content.name,
        image:content.image,
        description:content.description
      });
      this.getProducts();
    }
  }
})
