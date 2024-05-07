<template>
  <div class="container-lg">

    <div class="text-end mt-5 mb-4">
      <button class="btn btn-primary" type="button"
      @click="openModal(true)">
        新增項目
      </button>
    </div >
<!-- 
    <div class="row" >
      <div class="col-md-1 border fs-3">
        編號
      </div>
      <div class="col-md-9 border fs-3">
        項目名稱
      </div>
      <div class="col-md-2 border fs-3">
        功能
      </div>
  </div>

    <div class="row" v-for="(item,index) in useFBstore.products"
    :key="item.name">
      <div class="col-md-1 pt-1 pb-1 border text-center fs-5 align-middle">
        {{ index+1 }}
      </div>
      <div class="col-md-9 pt-1 pb-1 border fs-5 align-middle">
        {{ item.name }}
      </div>
      <div class="col-md-2 pt-1 pb-1 border">  
          <button class="btn btn-outline-primary m-1"
          @click="openModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger" @click="deletDate(item.id)">刪除</button>
      </div>
  </div> -->

  <table class="table table-hover">
  <thead>
    <tr>
      <th width="10%" scope="col-md-1">#</th>
      <th width="20%" scope="col-md-4">植物中文</th>
      <th width="50%" scope="col-md-4">植物描述</th>
      <th width="20%" scope="col-md-3">功能</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table align-middle" v-for="(item,index) in useFBstore.products"
    :key="index+1">
      <th scope="row">{{index+1}}</th>
      <td>{{item.name}}</td>
      <td>{{item.description}}</td>
      <td>
        <button class="btn btn-outline-primary m-1"
          @click="openModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger" @click="deletDate(item.id)">刪除</button>

      </td>
    </tr>

  </tbody>
</table>

    <!-- <table class="table mt-4 container-lg">
      <thead>
        <tr>
          <th width="80" class="white-space: pre-wrap">id</th>
          <th width="150" class="white-space: pre-wrap">姓稱</th>
          <th width="450" class="white-space: pre-wrap">描述</th>
          <th width="200" class="white-space: pre-wrap">網址</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in useFBstore.products" 
        :key="item.id"
        >
          <td class="white-space: pre-wrap">{{ item.id}}</td>
          <td class="white-space: pre-wrap">{{ item.name }}</td>
          <td class="text-right white-space: pre-wrap">
            {{ item.description}}
          </td>
          <td class="text-right white-space: pre-wrap">
            {{ item.image }}
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="deletDate(item.id)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table> -->

    <ProductModal ref="productModal"
      :product="tempProduct"
      :isNew="isNew"
      @update-product="updateProduct">
    </ProductModal>
   </div>

  </template>
 
  <script setup>
  import {ref} from "vue"
  import ProductModal from '../components/Modal.vue'
  import {useFirebaseStore} from '../stores/useFirebaseStore'

  const useFBstore = useFirebaseStore()
  const productModal = ref(null)
  let isNew = ref(false)
  let tempProduct = ref({})

  function openModal(CE, item) {
  console.log("檢查傳入值isNew",CE)
    // console.log("檢查傳入值item",item)
  if (CE === true) {
    console.log("呼叫新增")
    this.tempProduct = {};
  } else {
    console.log("呼叫編輯")
    tempProduct.value = { ...item };
    console.log("顯示tempProduct:",tempProduct.value)
  }
  isNew.value = CE;
  productModal.value.showModal();
}

  function updateProduct(item) {
    console.log("觸發updataProduct")
    console.log("傳入資料：",item)
    console.log("isNew是什麼",isNew.value)
    if(isNew.value == true){
      console.log("觸發更新傳入的值：",item)
      tempProduct.value = item;
      console.log("設定temp為傳入的值",tempProduct)
      // 新增
      useFBstore.addData(item)
    }else{
      // 編輯
        console.log("更新模式")
      useFBstore.editData(item,item.id)
        // editProject(item)

    }
    productModal.value.hideModal();
    // this.getProducts();
        // });
    }
  
  function deletDate(id){
    useFBstore.deletData(id)
  }

  </script>
  