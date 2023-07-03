<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar_btns">
      <MyButton @click="$router.push('/posts')">Посты</MyButton>
      <MyButton @click="$router.push('/about')">О сайте</MyButton>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar_btns {
  margin-left: auto;
  display: flex;
  gap: 15px;
}
</style>