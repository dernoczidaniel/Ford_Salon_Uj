import { defineStore } from "pinia";

export const useAutoSend = defineStore({
  id: 'useAutoSend',
  state: ()=>({ 
      kivAuto: []

   }),
  getters:{
      getAuto(state){
          
          return state.kivalasztottAuto;
      },
  },
  actions:{
      autoKivalasztas(kivalasztottAuto){
          this.kivAuto = kivalasztottAuto
      }
  }
});