import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { State, Item } from "@/store/store.interface.ts";
import AxiosService from "@/service/axios.service.ts";
import { AxiosResponse } from "axios";

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: []
  },
  mutations: {
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    removeItem(state, id: number) {
      console.log("removeItem", state.todoList);
      state.todoList.splice(id, 1);
    },
    changeStatus(
      state,
      { id, status }: { id: number; status: "active" | "clear" }
    ) {
      console.log("store", id, status);
      state.todoList[id].status = status;
    },
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList;
    }
  },
  actions: {
    //data 통신 CRUD
    async initData({ commit }) {
      // http통신
      const res: AxiosResponse<{
        todoList: Item[];
      }> = await AxiosService.instance.get("/data.json");

      commit("setTodoList", res.data.todoList);
    },
    async addData({ commit }, data: object) {
      const config: object = {
        "content-type": "json"
      };
      const res: AxiosResponse<{
        todoList: Item[];
      }> = await AxiosService.instance.post("/data.json", data, config);

      commit("addItem", data);
    }
  },
  getters: {
    allTodoList: state => state.todoList,
    activeTodoList: state =>
      state.todoList.filter((item: Item) => item.status === "active"),
    clearTodoList: state =>
      state.todoList.filter((item: Item) => item.status === "clear")
  }
};

export default new Vuex.Store(store);
