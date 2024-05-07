<script setup>
import Slide from "./Slideshow.vue";
import { useFirebaseStore } from "@/stores/useFirebaseStore";
const useFBstore = useFirebaseStore();
import { useStoreNotes } from "@/stores/storeNotes";
const useStore= useStoreNotes()

function setId(id){
  useStore.setdbId(id)
}
</script>

<!-- 在這裡加入資訊，帶入到元件裡面 -->
<template>
  <Slide />
  <div class="container-md mt-5 mb-5">
    <div class="row" pt-5>
      <div class="col-md-4" v-for="item in useFBstore.products" :key="item.id">
        <div class="card mb-4">
            <RouterLink
                class="overflow-hidden"
                :to="{ name: 'item', params: { id: item.id } }"
                >
                <img :src="item.image" class="card-img-top img-cover" />
            </RouterLink>
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-area " >{{ item.description }}</p>
          </div>
          <div class="card-footer">
            <button class="btn" @click="setId(item.id)">
              <RouterLink
                class="btn btn-primary"
                :to="{ name: 'item', params: { id: item.id } }"
              >
                進入留言
              </RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
