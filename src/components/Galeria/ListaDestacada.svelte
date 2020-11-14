<script>
  import galeria, { obraDestacada } from "../../stores/galeria";
  import globalStore from "../../stores/globalStore";

  import ItemGaleria from "./ItemGaleria.svelte";
  import ModalGaleria from "./ModalGaleria.svelte";

  import { setContext } from "svelte";
  let setId;
  let setTitulo;
  let setDescripcion;
  let setPortada;
  let setImagenes;
  let setTags;

  function iterarItem(id) {
    let item = $galeria.find((item) => {
      return item.id === id;
    });
    setId = item.id;
    setTitulo = item.titulo;
    setDescripcion = item.descripcion;
    setPortada = item.portada;
    setImagenes = item.imagenes;
    setTags = item.tags;
  }
  setContext("iterarItem", iterarItem);
</script>

<style>
  .contenedor-galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
</style>

<div class="contenedor-galeria">
  {#each $obraDestacada as item_galeria (item_galeria.id)}
    <ItemGaleria {item_galeria} {iterarItem} />
  {/each}
  {#if $globalStore.modal_galeria}
    <ModalGaleria
      {setId}
      {setTitulo}
      {setDescripcion}
      {setPortada}
      {setImagenes}
      {setTags} />
  {/if}
</div>
