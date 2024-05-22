<script setup>
import { onMounted } from 'vue';
import HomeViewFrame from '../components/HomeViewFrame.vue'

import { useFirebaseStore } from '../stores/useFirebaseStore'
const useFBstore = useFirebaseStore()


onMounted(()=>{
  useFBstore.getProducts()
})

</script>

<template>
  <main>
    <HomeViewFrame />
  </main>

</template>
