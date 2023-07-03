<template>
  <navbar />
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar";
export default {
  components: {Navbar}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 15px;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>