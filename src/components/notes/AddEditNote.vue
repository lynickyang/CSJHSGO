<template>
<div class="mb-3">
  <form class="">
    <textarea
      v-model="model"
      class="form-control "
      :placeholder="placeholder"
      ref="textareaRef"
      maxlength="100"
      style="height: 140px"
      v-autofocus>   
    </textarea>
    <div class="p-0 pt-2">
      <slot name="buttons" />
    </div>
  </form>
</div>
 
  </template>
  
  <script setup>
  
  /*
    imports
  */
  
    import { ref } from 'vue'
    import { vAutofocus } from '@/directives/vAutofocus'
  
  /*
    props
  */
  
    const props = defineProps({
      bgColor: {
        type: String,
        default: 'success'
      },
      placeholder: {
        type: String,
        default: ''
      },
      label: {
        type: String
      }
    })
  
  const model =defineModel()
  
  /*
    focus textarea
  */
  
    const textareaRef = ref(null)
  
    const focusTextarea = () => {
      textareaRef.value.focus()
    }
  
    defineExpose({
      focusTextarea
    })
  
  </script>