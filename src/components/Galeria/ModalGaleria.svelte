<script>
  import globalStore from "../../stores/globalStore";
  import galeria, { iterarItem } from "../../stores/galeria";
  import { loop_guard } from "svelte/internal";

  export let setTitulo;
  export let setDescripcion;
  export let setPortada;
  export let setImagenes;
  export let setTags;

  let imgRender = setPortada;
  let imgSelected = false;
  function imgActive(img) {
    imgRender = img;
  }
  function init(el) {
    el.focus();
  }
</script>

<style>
  .btn-close {
    position: absolute;
    top: 5px;
    right: 5px;
    text-align: right;
    cursor: pointer;
    padding: 5px 13px;
    font-size: 1.7em;
    background: transparent;
    border: none;
    text-transform: lowercase;
    color: rgb(88, 88, 88);
    transition: var(--transition);
  }
  .btn-close:hover {
    color: var(--color-primario);
  }
  .bg-modal-galeria {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: rgba(61, 61, 61, 0.651);
    z-index: 10;
  }
  .modal-galeria {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    color: white;
    padding: 20px;
    background-color: #222;
    width: 100%;
    min-height: 90vh;
    max-height: 90vh;
  }
  .modal-galeria__thumbnail {
    padding: 10px;
    min-height: 300px;
  }
  .modal-galeria__thumbnail img {
    max-width: 350px;
  }
  .content__titulo {
    font-size: 1.2em;
    margin: 5px 0;
  }
  .content__descripcion {
    font-size: 0.8em;
    color: rgb(153, 153, 153);
    font-weight: 500;
  }
  .content__full-imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 10px;
    background-color: rgb(44, 44, 44);
    padding: 10px;
  }
  .content__full-imagenes img {
    cursor: pointer;
    min-height: 150px;
    object-fit: cover;
  }
  .content__full-imagenes img:focus {
    outline: 3px solid var(--color-primario);
  }
  .selected {
    border: 3px solid rgb(156, 156, 156);
  }
</style>

<div class="bg-modal-galeria k-flex">
  <div class="modal-galeria k-flex">
    <button
      class="btn-close nav-sidebar__link"
      on:click={() => {
        globalStore.toggleItem('modal_galeria', false);
      }}>
      <i class="far fa-times-circle" />
    </button>
    <div class="modal-galeria__thumbnail k-flex">
      <img src={imgRender} alt="" />
    </div>
    <div class="modal-galeria__content">
      <h1 class="content__titulo">{setTitulo}</h1>
      <p class="content__descripcion">{setDescripcion}</p>
      <div class="content__full-imagenes k-flex">
        <img on:click={imgActive(setPortada)}
        tabindex="0"
        class:selected={imgSelected} src={setPortada} alt="" />
        {#each setImagenes as full_imagenes}
          <img
            on:click={imgActive(full_imagenes)}
            tabindex="0"
            class:selected={imgSelected}
            src={full_imagenes}
            alt="" />
        {/each}
      </div>
    </div>
  </div>
</div>
