<template>
  <dragglabe-componente
    class="list-group"
    :list="lists"
    group="people"
    itemKey="name"
    :component-data="{
      tag: 'div',
      type: 'transition-group',
    }"
    v-bind="dragOptions"
  >
    <template #item="{ element }">
      <div class="list-group-item">
        <span> {{ element.title }}</span>
        <button
          class="btnDelete"
          @click="eliminarItemBorad(boardId, element.id)"
        >
          <img src="../assets/x.png" alt="x" />
        </button>
      </div>
    </template>
  </dragglabe-componente>
</template>

<script setup>
import { computed } from "vue";
import { listBoard } from "../stores/listBoard";

const list = listBoard();

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
  };
});
defineProps({
  lists: Array,
  boardId: null,
});

function eliminarItemBorad(boardId, ItemId) {
  list.eliminarItemBorad(boardId, ItemId);
}
</script>

<style scoped>
.list-group {
  width: 100%;
  min-height: 200px;
  margin-bottom: 15px;
  background-color: #c6ebc5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.6s ease;
}
.list-group-item {
  display: flex;
  align-content: center;
  width: 100%;
  padding: 2px 0;
  border-top: 1px solid #a1c298;
  transition: all 0.6s ease;
}
.list-group-item span {
  flex-basis: 70%;
  font-size: 15px;
  width: 100%;
  max-width: 100%;
  padding: 5px 2px;
}
.list-group-item button {
  flex-basis: 30%;
}

html.light2 .list-group {
  background-color: #fcf8e8;
  transition: all 0.6s ease;
}
html.light2 .list-group-item {
  border-top: 1px solid #ecb390;
  transition: all 0.6s ease;
}

html.light3 .list-group {
  background-color: #ffe6e6;
  transition: all 0.6s ease;
}
html.light3 .list-group-item {
  border-top: 1px solid #f2d1d1;
  transition: all 0.6s ease;
}

html.dark .list-group {
  background-color: #395b64;
  transition: all 0.6s ease;
}
html.dark .list-group-item {
  border-top: 1px solid #2c3333;
  transition: all 0.6s ease;
}
html.dark2 .list-group {
  background-color: #d49b54;
  transition: all 0.6s ease;
}
html.dark2 .list-group-item {
  border-top: 1px solid #c74b50;
  transition: all 0.6s ease;
}
html.dark3 .list-group {
  background-color: #e9a6a6;
  transition: all 0.6s ease;
}
html.dark3 .list-group-item {
  border-top: 1px solid #3f3351;
  transition: all 0.6s ease;
}
</style>
