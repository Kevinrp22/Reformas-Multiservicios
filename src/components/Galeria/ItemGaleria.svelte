<script>
  import globalStore from "../../stores/globalStore";
  import galeria from "../../stores/galeria";
  import { blur } from "svelte/transition";
  import ModalGaleria from "./ModalGaleria.svelte";

  export let item_galeria;

  function filterItemToModal(id) {
    return $galeria.find((item) => {
      return item.id === id;
    });
  }
  let isHover = false;
</script>

<style>
  .galeria__item {
    cursor: pointer;
    position: relative;
  }
  .galeria__item img {
    object-fit: cover;
    height: 200px;
  }
  .galeria__item__bg-hover {
    position: absolute;
    top: 0;
    width: 100%;
    height: 98%;
    background-color: rgba(48, 48, 48, 0.7);
    padding: 10 0px;
    box-sizing: border-box;
  }
  .galeria__item__bg-hover .bg-hover__titulo {
    text-transform: uppercase;
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    color: white;
    border-bottom: 1px solid gray;
    padding: 10px 0px;
    margin: 40px 25px 20px 20px;
  }
  .tags {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    width: 150px;
    top: 10px;
    left: 5px;
    z-index: 9;
  }
  .tag_item {
    text-transform: uppercase;
    font-size: 0.8em;
    background-color: rgb(230, 207, 0);
    color: black;
    margin: 1px;
    border-radius: 12px;
    padding: 3px 5px;
    transition: var(--transition);
    line-height: 1;
  }
  .tag_item:hover {
    background-color: rgb(255, 255, 255);
  }
</style>

<div
  class="galeria__item"
  on:mouseover={() => {
    isHover = true;
  }}
  on:mouseout={() => {
    isHover = false;
  }}
  on:click={() => {
    globalStore.toggleItem('modal_galeria', true);
    globalStore.toggleItem('item_modal', filterItemToModal(item_galeria.id));
  }}>
  <img src={item_galeria.portada} alt={item_galeria.titulo} />
  <div class="tags">
    {#each item_galeria.tags as tag}
      <span
        class="tag_item"
        on:click={() => {
          console.log('go to ' + tag.nombre);
        }}>
        {tag.nombre}
      </span>
    {/each}
  </div>

  {#if isHover}
    <div class="galeria__item__bg-hover" transition:blur={{ delay: 10 }}>
      <h1 class="bg-hover__titulo">{item_galeria.titulo}</h1>
    </div>
  {/if}
</div>

