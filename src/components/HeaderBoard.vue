<template>
  <div class="headerBoard">
    <div class="contentBoardHeader">
      <Motion
        v-if="!editTitle"
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.6 }"
        class="titleBoard"
      >
        <h3 class="contenteTitle">{{ listHeader.name }}</h3>

        <button class="btnSumit btnsTitle" @click="editInput">
          <img src="../assets/editing.png" alt="" />
        </button>
      </Motion>
      <div v-else class="titleBoard">
        <input
          class="contenteTitle customInput"
          type="text"
          @keypress.enter="editBoardTitle(listHeader.id, inputEditTitle)"
          v-model="inputEditTitle"
        />
        <button
          class="btnSumit btnsTitle"
          @click="editBoardTitle(listHeader.id, inputEditTitle)"
        >
          <img src="../assets/add.png" alt="" />
        </button>
      </div>
    </div>
    <div>
      <div class="btnsBoards">
        <button class="btnMostrarAcciones" @click="showAddItem">
          <img src="../assets/add.png" alt="add" />
        </button>
        <button class="btnMostrarAcciones">
          <img
            src="../assets/delete.png"
            alt="delete"
            @click="list.eliminarBoard(listHeader.id)"
          />
        </button>
      </div>
    </div>
    <Transition name="addAnimation">
      <div v-if="visualizationAdditems" class="addFormItem">
        <form>
          <input class="customInput" type="text" v-model="textNewItem" />
          <button
            class="btnSumit"
            @click.prevent="addBoardItem(listHeader.id, textNewItem)"
          >
            <img src="../assets/mas.png" alt="add" />
          </button>
        </form>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { listBoard } from "../stores/listBoard";

import { Motion } from "motion/vue";

const list = listBoard();
const textNewItem = ref("");
const editTitle = ref("");
const visualizationAdditems = ref(false);
const inputEditTitle = ref("");

const props = defineProps({
  listHeader: Object,
});

function addBoardItem(id, text) {
  list.addBoardItem(id, text);
  textNewItem.value = "";
}

function showAddItem() {
  visualizationAdditems.value = !visualizationAdditems.value;
}
function editInput() {
  editTitle.value = !editTitle.value;
  inputEditTitle.value = props.listHeader.name;
  // animate(
  //   ".contentBoardHeader",
  //   {
  //     scale: [1.3, 1],
  //     opacity: [0, 1],
  //   },
  //   { duration: 1 }
  // );
}

function editBoardTitle(idBoard, titleNew) {
  list.editTitleBoard(idBoard, titleNew);
  editTitle.value = !editTitle.value;
  // animate(
  //   ".contentBoardHeader",
  //   {
  //     scale: [1.3, 1],
  //     opacity: [0, 1],
  //   },
  //   { duration: 1 }
  // );
}
</script>
<style>
.addAnimation-enter-active {
  transition: all 0.3s ease-out;
}

.addAnimation-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.addAnimation-enter-from,
.addAnimation-leave-to {
  transform: scale(20px);
  opacity: 0;
}
/* 
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
} */
</style>
