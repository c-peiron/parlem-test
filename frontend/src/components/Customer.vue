<script lang="ts">
  import type { PropType } from 'vue'
  import type { Customer } from '@/types/customer';

  export default {
    props: {
      customer: Object as PropType<Customer>
    },
    setup() {
      return {

      }
    },
  }
</script>

<template>
  <router-link :to="{ name: 'customer', params: { customer: customer?.customerId }}">
    <div class="border border-solid border-red-300 p-3 rounded text-black">
      <p>{{ customer?.givenName }}</p>
      <p>{{ customer?.familyName1 }}</p>
      <p>{{ customer?.phone }}</p>
    </div>
  </router-link>
</template>

<style scoped>

</style>