<script lang="ts">
  import { computed, onBeforeMount } from 'vue';
  import { useProductStore } from '@/stores/product';
  import { useUserStore } from '@/stores/user';
  import { useRoute } from 'vue-router';

  export default {
    components: {},
    setup() {
      const route = useRoute();
      const storeProducts = useProductStore();
      const storeUsers = useUserStore();
      const products = computed(() => storeProducts.products);
      const user = computed(() => storeUsers.user);

      onBeforeMount(()=>{
        storeUsers.fetchUser(route.params.customer);
        storeProducts.fetchProducts(route.params.customer);
      });
      
      return {
        user,
        products,
      }
    },
  }
</script>

<template>
  <div class="customer max-w-5xl mx-auto p-6 text-center">
    <h1 class="text-2xl font-bold">{{ user?.givenName+' '+user?.familyName1 }}</h1>
    <p>{{ user?.docType+': '+user?.docNum }}</p>
    <p>{{ user?.email }}</p>
    <p>{{ user?.phone }}</p>

    <h2 class="font-bold py-12">PRODUCTS</h2>
    <div class="flex items-center justify-center space-x-4">
      <div v-for="product in products" :key="product._id" class="border border-solid border-black rounded p-4">
        <p>{{ product.productName }}</p>
        <p>{{ product.productTypeName }}</p>
        <p>{{ product.soldAt }}</p>
        <p>{{ product.numeracioTerminal }}</p>
      </div>
    </div>
  </div>
</template>

<style>

</style>
