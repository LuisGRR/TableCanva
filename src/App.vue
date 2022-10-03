<script setup>
import ControlsHeader from "./components/ControlsHeader.vue";

import HeaderBoard from "./components/HeaderBoard.vue";
import BoardsCustomVue from "./components/BoardsCustom.vue";

import { listBoard } from "./stores/listBoard";

import { Motion, Presence } from "motion/vue";

const list = listBoard();
</script>

<template>
  <header>
    <div class="contetHeader">
      <h1>Table canva</h1>
    </div>
  </header>
  <main class="content">
    <div class="contents heightSettings">
      <ControlsHeader></ControlsHeader>
    </div>

    <div class="contents heightBoard scroll-board">
      <div v-for="boards in list.getAlll" :key="boards.id">
        <Presence>
          <Motion
            :key="boards.id"
            :initial="{ opacity: 0, x: 50 }"
            :animate="{
              opacity: 1,
              x: 0,
              transition: { delay: 0.1 },
            }"
            :exit="{ opacity: 0, x: -50 }"
            class="board"
          >
            <HeaderBoard :list-header="boards"></HeaderBoard>
            <BoardsCustomVue
              :list="boards.items"
              :board-id="boards.id"
            ></BoardsCustomVue>
          </Motion>
        </Presence>
      </div>
    </div>
  </main>
  <footer class="footer">
    <p>
      Creada por
      <a href="https://luisgrr.github.io/webpagelgrr/" target="_blank">
        Luis Gerardo Rivera Rivera</a
      >
    </p>
  </footer>
</template>
