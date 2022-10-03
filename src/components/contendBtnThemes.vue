<template>
  <Transition name="slide-fade">
    <div v-if="visualizationTemas" class="contenedorBtnTemas">
      <button class="btnTheme btnDark3" @click="cambioThema('dark3')"></button>
      <button class="btnTheme btnDark2" @click="cambioThema('dark2')"></button>
      <button class="btnTheme btnDark1" @click="cambioThema('dark')"></button>

      <button
        class="btnTheme btnLight3"
        @click="cambioThema('light3')"
      ></button>
      <button
        class="btnTheme btnLight2"
        @click="cambioThema('light2')"
      ></button>
      <button class="btnTheme btnLight1" @click="cambioThema('light')"></button>
    </div>
  </Transition>
</template>

<script setup>
import { useColorMode } from "@vueuse/core";

defineProps({
  visualizationTemas: Boolean,
});

const mode = useColorMode({
  modes: {
    light2: "light2",
    light3: "light3",
    dark2: "dark2",
    dark3: "dark3",
  },
});
function cambioThema(tema) {
  mode.value = tema;
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
