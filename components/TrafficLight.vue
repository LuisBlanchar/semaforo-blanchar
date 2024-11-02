<template>
    <div class="traffic-light">
      <div :class="['light', currentColor === 'red' ? 'red' : 'gray']"></div>
      <div :class="['light', currentColor === 'orange' ? 'orange' : 'gray']"></div>
      <div :class="['light', currentColor === 'green' ? 'green' : 'gray']"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentColor: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style src="/assets/semaforo.css">
  
  </style>
  