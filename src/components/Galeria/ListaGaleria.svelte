<script>
  import galeria from "../../stores/galeria";
  import globalStore from "../../stores/globalStore";

  import ItemGaleria from "./ItemGaleria.svelte";
  import ModalGaleria from "./ModalGaleria.svelte";
  import { setContext } from "svelte";

  import { fade , fly} from "svelte/transition";
  

  let setId;
  let setTitulo;
  let setDescripcion;
  let setPortada;
  let setImagenes;
  let setTags;
  let imagenes = [];
  let fruits = ["apple", "banana", "grapes", "mango", "orange"];
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
  $: {
    imagenes = $galeria.filter((item, index) => {
      index = 0;
      index = index++;
      console.log(index);

      if ($globalStore.data_filter === "todas") {
        return item;
      } else {
        let newfilter = item.tags.some(
          (value) => value.toLowerCase() === $globalStore.data_filter)
        return newfilter
         //El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
      }
    });
    imagenes= imagenes
  }
</script>

<style>
  .contenedor-galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
</style>

<div class="contenedor-galeria k-grid">
  {#each imagenes as item_galeria (item_galeria.id) }
    <div in:fade="{{y: -200,duration: 100,delay:100 }}" 
    out:fade="{{ y: 200, duration: 100,delay:100 }}">
      <ItemGaleria {item_galeria} {iterarItem} />
    </div>
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
