<template>
  <transition name="slide">
    <div class="home">
      <!-- <button @click="">+</button>
      <button @click="">-</button> -->
      <div>{{store.state.totle}}</div>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  </transition>
</template>

<script lang="ts">
import request from '../requests'
import {
  useStore
} from 'vuex'
import {
  defineComponent
} from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore()
    const add = () => {
      store.dispatch('aFunAdd', store.state.appStore.totle)
    }
    const del = () => {
      store.dispatch('aFunDel', store.state.appStore.totle)
    }
    return {
      add,
      del,
      store
    }
  },
  mounted () {
    request.get('/api/').then((res) => {
      console.log(res + '123')
    }).catch((err) => {
      console.log(err)
    })
  }
})
</script>
