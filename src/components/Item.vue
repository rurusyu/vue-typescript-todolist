<template>
   <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" 
               @change="changeStatus"
               :checked="status === 'clear'"
               aria-label="...">
      </span>
      <input type="text" class="form-control" aria-label="..." :value="title">
       <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="removeItem">X</button>
      </span>
    </div>
</template>

<script lang="ts">

import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class Item extends Vue{
    @Prop() readonly id!: string;
    @Prop() readonly title!: string;
    @Prop() readonly status!: 'active' | 'clear';

    changeStatus($event: Event){
        const checked: boolean = $event.target.checked;
        console.log('changeStatus',checked);
        if(checked){
            this.$store.commit('changeStatus', {id: this.id, status: 'clear'})
        }else {
            this.$store.commit('changeStatus', {id: this.id, status: 'active'})
        }
    }
    removeItem(){
        console.log('remove', this.id)
        this.$store.commit('removeItem',this.id);
    }

   
}
</script>

<style>

</style>