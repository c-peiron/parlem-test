import { defineStore } from 'pinia'
import axios from "axios"
import type { Customer } from '@/types/customer';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
    user: undefined as Customer | undefined,
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      try {
        const data = await axios.get('http://localhost:3001/api/customers/?api-key=foo')
          this.users = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
    async fetchUser(id: String) {
      try {
        const data = await axios.get('http://localhost:3001/api/customers/'+id+'/?api-key=foo')
          this.user = data.data[0]
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    }
  }
})
