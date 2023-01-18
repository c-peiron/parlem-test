import { defineStore } from 'pinia'
import axios from "axios"
import type { Product } from '@/types/product';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [] as Product[],
  }),
  getters: {},
  actions: {
    async fetchProducts(_id: number) {
      try {
        const data = await axios.get('http://localhost:3001/api/user/'+_id+'/products/?api-key=foo')
          this.products = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    }
  }
})
