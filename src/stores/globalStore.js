import {
  writable
} from "svelte/store"
import servicios from "../localServicios"
const globalStore = writable({
  sidebar: false,
  modal_galeria: false,
  data_filter:"todas"
});

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (item, value) => {
    globalStore.update(storeValue => {
      return {
        ...storeValue,
        [item]: value
      }
    })
  }
}

export default store