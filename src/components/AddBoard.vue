<template>
  <div class="contendAddControls">
    <form>
      <input class="customInput" type="text" v-model="textNewBoard" />
      <button class="btnSumit" @click.prevent="addBoard(textNewBoard)">
        Add Board
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { listBoard } from "../stores/listBoard";
const list = listBoard();

const textNewBoard = ref("");
function addBoard(text) {
  list.addBoard(text);
  textNewBoard.value = "";
}
</script>
