<template>
  <div class="form-group">
    <input type="text" 
           class="form-control" 
           v-model="message"
           @keyup.enter="addItem"
           placeholder="할일을 입력해주세요.">
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';
import {mapGetters} from 'vuex';

@Component({
    computed: {
        ...mapGetters([
            'allTodoList',
        ])
    }
})
export default class ItemInput extends Vue {
    message: any = '';
    addItem(){
        console.log(this.$store.state.todoList.length)
        this.$store.commit('addItem', {id: this.allTodoList.length, title: this.message, status: 'active'});
        this.message='';
    }
}
</script>

<style>

</style>