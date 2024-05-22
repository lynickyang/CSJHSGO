<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import {useFirebaseStore} from './stores/useFirebaseStore'
const useFBstore = useFirebaseStore()


// onMounted(()=>{
//   useFBstore.getProducts()
// })

</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

