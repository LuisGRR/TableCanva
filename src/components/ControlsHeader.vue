<template>
  <section class="controlsIzq">
    <AddBoardVue></AddBoardVue>
  </section>
  <section class="controlsDer">
    <div>
      <button class="btnMostrarAcciones" @click="abrirMenu">
        <img src="../assets/settings.png" alt="settings" />
      </button>
    </div>
    <contenButons :visualization-temas="visualizationTemas"> </contenButons>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AddBoardVue from "./AddBoard.vue";

import contenButons from "./contendBtnThemes.vue";

const visualizationTemas = ref(false);

function abrirMenu() {
  visualizationTemas.value = !visualizationTemas.value;
}
</script>
