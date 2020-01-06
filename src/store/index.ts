import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {State, Item} from '@/store/store.interface.ts';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      // {id:0, title: 'test', status:'active'},
      // {id:1, title: 'test1', status:'active'},
      // {id:2, title: 'test2', status:'clear'},
    ],
  },
  mutations: {
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    removeItem(state, id: number) {
      console.log('removeItem', state.todoList)
      state.todoList.splice(id, 1);
    },
    changeStatus(state, {id, status}: {id: number, status: 'active' | 'clear'}) {
      console.log('store', id, status);
      state.todoList[id].status = status;
    },
  },
  actions: {
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => state.todoList.filter((item: Item) => item.status === 'active'),
    clearTodoList: (state) => state.todoList.filter((item: Item) => item.status === 'clear'),
  },
}

export default new Vuex.Store(store);
