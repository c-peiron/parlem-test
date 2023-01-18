<script lang="ts">
  export default {
    setup() {}
  }

</script>

<template>
  <header class="flex justify-center border-b border-solid border-b-black p-3">
    <nav class="flex space-x-2">
      <router-link to="/">Home</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style>
  a.router-link-active
  {
    @apply border-b border-solid border-b-black;
  }
</style>
