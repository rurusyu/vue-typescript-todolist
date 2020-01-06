<template>
  <div>
    <item
      v-for="item in renderList"
      :id="item.id"
      :title="item.title"
      :status="item.status"
      :key="item.id"
    ></item>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Item from "@/components/Item.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    Item
  },
  computed: {
    ...mapGetters(["allTodoList", "activeTodoList", "clearTodoList"])
  }
})
export default class ItemList extends Vue {
  renderList: any[] = [];

  async created() {
    //  this.initRenderList(this.$route.params.status);
    console.log("ddd11", this.$store.dispatch("initData"));
    this.$store.dispatch("initData");
  }

  initRenderList(status: "active" | "clear") {
    if (!status) {
      this.renderList = this.allTodoList;
    } else if (status === "active") {
      this.renderList = this.activeTodoList;
    } else if (status === "clear") {
      this.renderList = this.clearTodoList;
    }
  }

  @Watch("$route.params.status")
  routeUpdate(newValue: "active" | "clear") {
    this.initRenderList(newValue);
  }
  @Watch("$store.state.todoList", { deep: true })
  todoListUpdate() {
    console.log("ddd");
    this.initRenderList(this.$route.params.status);
  }
}
</script>
