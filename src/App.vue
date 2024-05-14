<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import {useFirebaseStore} from './stores/useFirebaseStore'
const useFBstore = useFirebaseStore()
import { useStoreNotes } from './stores/storeNotes';
const storeNotes= useStoreNotes()

onMounted(()=>{
  useFBstore.getProducts()
})

</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

