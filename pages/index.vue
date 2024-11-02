<template>
    <div class="container">
      <h1> color del semáforo:</h1>
    </div>
   <div>
    <select class="menu"v-model="selectedColor">
        <option value="red">Rojo</option>
        <option value
        ="orange">Naranja</option>
        <option value="green">Verde</option>
      </select>
   </div>
   <div class="semaforo">
  
  <!-- Aquí se pasa el color seleccionado al componente TrafficLight -->
  <TrafficLight :currentColor="selectedColor" />
</div>
  </template>
  
  <script>
  import TrafficLight from '~/components/TrafficLight.vue'
  
  export default {
    components: {
      TrafficLight
    },
    data() {
      return {
        selectedColor: 'gray' // Inicializamos en gris
      }
    }
  }
  </script>
  
  