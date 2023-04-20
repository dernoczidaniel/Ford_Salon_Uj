<script >
//stores kell hozzá !!!!

import dataservice from '../services/dataservice.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const salons = ref([]);

        // const router = useRouter();
        dataservice.getSalons()
            .then((resp) => {
                salons.value = resp;
            })
            .catch((err) => {
                console.log(err);
            });
            return { salons };
    }
  }




</script>
<template>
       <div>
        <select>
          <option class="selected" v-for="salon in salons" :value="address">{{ salon.address }}
          </option>
        </select>
       </div>
</template>