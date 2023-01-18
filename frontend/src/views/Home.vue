<script lang="ts">
  import { computed, onBeforeMount } from 'vue';
  import { useUserStore } from '@/stores/user';
  import Customer from '@/components/Customer.vue';

  export default {
    components: {
      Customer
    },
    setup() {
      const store = useUserStore();
      const customers = computed(() => store.users);

      onBeforeMount(()=>{
        store.fetchUsers();
      });
      
      return {
        customers
      }
    },
  }
</script>

<template>
  <div class="home">
    <div class="max-w-5xl mx-auto p-6 flex justify-center space-between space-x-4">
      <Customer v-for="customer in customers" :key="customer._id" :customer="customer"/>
    </div>
  </div>
</template>

<style>

</style>
