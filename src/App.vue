<template>
  <div>
    <UseDate />
  </div>
</template>

<script>
import UseDate from "./components/UseDate.vue";
export default {
  components: { UseDate },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container{
  background-color: burlywood;
  border:1px solid burlywood;
  border-radius: 20px;
}
</style>
