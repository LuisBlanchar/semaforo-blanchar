<template>
    <div>
        <h5>TITULO IMAGEN</h5>
        <img :src="img" >
    </div>
</template>
<script>
export default {
  props: {
    img: String,
  }
}
</script>