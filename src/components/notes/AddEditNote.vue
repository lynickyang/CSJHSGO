<template>
<div class="card mb-5">
  <label
        v-if="label"
        class="text-black"
      >
        {{ label }}
  </label>
  <div class="card-body text-bg-success">
    <textarea
      v-model="model"
      class="form-control "
      :placeholder="placeholder"
      ref="textareaRef"
      maxlength="100"
      style="height: 140px"
      v-autofocus>   
    </textarea>
    <div class="card-footer p-0 pt-3">
      <slot name="buttons" />
    </div>
  </div>
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