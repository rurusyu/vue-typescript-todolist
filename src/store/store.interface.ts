import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface Item {
    id: number;
    title: string;
    status: 'active' | 'clear';
}

export interface State {
    todoList: Item[];
}

