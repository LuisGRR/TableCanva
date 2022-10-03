import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const lists = [
  {
    id: crypto.randomUUID(),
    name: "board-1",
    items: [{ id: crypto.randomUUID(), title: "New item" }],
  },
  {
    id: crypto.randomUUID(),
    name: "board-2",
    items: [{ id: crypto.randomUUID(), title: "New item" }],
  },
];

export const listBoard = defineStore("listBoard", {
  state: () => ({
    lists: useStorage("listDraggs", lists),
  }),
  getters: {
    getAlll() {
      return this.lists;
    },
    getIdBoard() {
      return this.lists.map(function (dato) {
        return dato.id;
      });
    },
  },
  actions: {
    addBoard(name) {
      if (name.length != 0 && /(^$)|[a-zA-Z]/.test(name)) {
        const newBoard = {
          id: crypto.randomUUID(),
          name: name,
          items: [],
        };
        this.lists.push(newBoard);
      }
    },
    eliminarBoard(boardID) {
      this.lists = this.lists.filter((bord) => bord.id !== boardID);
    },
    addBoardItem(boardItem, text) {
      if (text.length != 0 && /(^$)|[a-zA-Z]/.test(text)) {
        const board = this.lists.find((board) => board.id === boardItem);
        board.items.push({ id: crypto.randomUUID(), title: text });
      }
    },
    eliminarItemBorad(boardItem, itemBoard) {
      const board = this.lists.find((board) => board.id === boardItem);
      const item = board.items.find((item) => item.id === itemBoard);
      board.items = board.items.filter((i) => i.id !== item.id);
    },
    editTitleBoard(boardID, textNew) {
      if (textNew.length != 0 && /(^$)|[a-zA-Z]/.test(textNew)) {
        this.lists.map(function (dato) {
          if (dato.id == boardID) {
            dato.name = textNew;
          }
        });
      }
    },
  },
});
