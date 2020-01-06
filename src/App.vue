<template>
  <div id="app">
    <app-header></app-header>
    <item-input></item-input>
    <router-view/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import appHeader from '@/components/Header.vue';
import ItemInput from '@/components/Item-input.vue';
import Item from '@/components/Item.vue';

@Component({
  components: {
    appHeader,
    ItemInput,
    Item,
  },
})
export default class App extends Vue {
  public mounted() {
    console.log('length', this.$store.state.todoList.length);
  }
}
</script>
<style>
#app{
  padding : 100px;
}
</style>
