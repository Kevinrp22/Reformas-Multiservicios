<script>
  import galeria, { obraDestacada } from "../../stores/galeria";
  import globalStore from "../../stores/globalStore";

  import ItemGaleria from "./ItemGaleria.svelte";
  import ModalGaleria from "./ModalGaleria.svelte";

  import { setContext } from "svelte";
  
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
    <ItemGaleria {item_galeria}  />
  {/each}
</div>
