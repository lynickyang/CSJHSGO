<template>
  <div class="container-lg">

    <div class="text-end mt-5 mb-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        新增項目
      </button>
    </div>

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
        <tr class="table align-middle" v-for="(item,index) in useFBstore.products" :key="index+1">
          <th scope="row">{{index+1}}</th>
          <td>{{item.name}}</td>
          <td>{{item.description}}</td>
          <td>
            <button class="btn btn-outline-primary m-1" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger" @click="OpentDelModal(item.id)">刪除</button>

          </td>
        </tr>

      </tbody>
    </table>


    <ProductModal ref="productModal" :product="tempProduct" :isNew="isNew" @update-product="updateProduct">
    </ProductModal>

    <ItemModalDel ref="itemModalDel" @item-delete="DeleteItem" />
  </div>

</template>
 
  <script setup>
  import {ref} from "vue"
  import ProductModal from '../components/Modal.vue'
  import {useFirebaseStore} from '../stores/useFirebaseStore'
  import ItemModalDel from '../components/ItemModalDel.vue'

  const useFBstore = useFirebaseStore()
  const productModal = ref(null)
  const itemModalDel = ref(null)
  let isNew = ref(false)
  let tempProduct = ref({})
  let saveid = ''


  function openModal(CE, item) {
  // console.log("檢查傳入值isNew",CE)
    // console.log("檢查傳入值item",item)
  if (CE === true) {
    tempProduct.value = {};
    // console.log("呼叫新增",tempProduct.value)
  } else {
    // console.log("呼叫編輯")
    tempProduct.value = { ...item };
    // console.log("顯示tempProduct:",tempProduct.value)
  }
  isNew.value = CE;
  productModal.value.showModal();
}

  function updateProduct(item) {
    // console.log("觸發updataProduct")
    // console.log("傳入資料：",item)
    // console.log("isNew是什麼",isNew.value)
    if(isNew.value == true){
      // console.log("觸發更新傳入的值：",item)
      tempProduct.value = item;
      // console.log("設定temp為傳入的值",tempProduct.value)
      // 新增
      useFBstore.addData(tempProduct.value)
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
  
  function OpentDelModal(id){
    saveid=id;
    // console.log("id:",id)
    itemModalDel.value.showModal();
    // useFBstore.deletData(id)
  }

function DeleteItem(){
  // console.log("觸發成功")
  useFBstore.deletData(saveid)
}

  </script>
  