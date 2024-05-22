<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import {useFirebaseStore} from './stores/useFirebaseStore'
const useFBstore = useFirebaseStore()



</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

