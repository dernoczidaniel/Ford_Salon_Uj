<template>
    <div>
      <input type="text" v-model="searchTerm">
      <ul>
        <li v-for="item in filteredList" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
        list: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
          { id: 3, name: 'Orange' },
          { id: 4, name: 'Grape' },
          { id: 5, name: 'Pineapple' }
        ]
      }
    },
    computed: {
      filteredList() {
        return this.list.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
    }
  }
  </script>