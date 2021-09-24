<template>

  // Customize Gradient
  <circle-progress
  :show-percent="true"
  :viewport="true"
  :percent="percent"
      :is-gradient="true"
      :gradient="{
        angle: 90,
        startColor: '#00adb5',
        stopColor: '#6b03fc',
        
    }"
    show-percent:true
  />

</template>


<script>

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  components: {CircleProgress}
}

</script>

<style>
* {
    background-color: aliceblue;
}
</style>
