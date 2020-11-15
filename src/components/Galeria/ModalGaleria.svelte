<script>
  import globalStore from "../../stores/globalStore";
  import galeria, { iterarItem } from "../../stores/galeria";
  //TODO: Con la galeria intentar mostrar mas imagenes sobre el tema,
  //en teoria por el "tag".
  import { onMount } from "svelte";
  let itemModal = $globalStore.item_modal;
  let imgRender = itemModal.portada;
  function imgActive(img) {
    imgRender = img;
  }
  $: console.log(itemModal);
</script>

<style>
  .btn-close {
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
    padding: 16px;
    background-color: #68686826;
    border: none;
    transition: var(--transition);
  }
  .btn-close:hover{
    background-color: #2b2b2b70;
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
    display: flex;
    flex-direction: column;
    color: #333333;
    background-color: #f4f4f4;
    width: 100%;
    min-height: 95vh;
    max-height: 95vh;
  }
  .modal-galeria__portada {
    display: flex;
    flex-grow: 1;
    flex-basis: 50%;
    width: 100%;
    height: 1px;
    box-sizing: border-box;
    padding: 10px;
  }
  .modal-galeria__portada img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
  }
  .modal-galeria__content {
    background-color: white;
    border-top: 1px solid #e6e6e6;
    padding: 15px;
  }
  .modal-galeria__content__titulo {
    font-size: 1.2em;
    margin: 5px 0;
  }
  .modal-galeria__content__descripcion {
    font-size: 0.8em;
    color: rgb(153, 153, 153);
    font-weight: 500;
  }
  .modal-galeria__content__imagenes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 10px;
  }
  .modal-galeria__content__imagenes img {
    cursor: pointer;
    height: 110px;
    object-fit: cover;
  }

  .selected {
    outline: 3px solid var(--color-primario);
  }
</style>

<div class="bg-modal-galeria k-flex">
  <div class="modal-galeria k-flex">
    <button
      class="btn-close"
      on:click={() => {
        globalStore.toggleItem('modal_galeria', false);
      }}>
      <img src="close.svg" alt="" />
    </button>
    <div class="modal-galeria__portada"><img src={imgRender} alt="" /></div>
    <div class="modal-galeria__content">
      <h1 class="modal-galeria__content__titulo">{itemModal.titulo}</h1>
      <p class="modal-galeria__content__descripcion">{itemModal.descripcion}</p>
      <div class="modal-galeria__content__imagenes">
        <img
          on:click={() => {
            imgActive(itemModal.portada);
          }}
          tabindex="0"
          class:selected={itemModal.portada === imgRender ? true : false}
          src={itemModal.portada}
          alt="" />
        {#each itemModal.imagenes as imagenes}
          <img
            on:click={() => {
              imgActive(imagenes);
            }}
            tabindex="0"
            class:selected={imagenes === imgRender ? true : false}
            src={imagenes}
            alt="" />
        {/each}
      </div>
    </div>
  </div>
</div>
