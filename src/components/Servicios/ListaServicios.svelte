<script>
  import ItemServicios from "./ItemServicios.svelte";

  export let servicios;
</script>

<style>
  .c-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  @media screen and (min-width: 500px) {
    .c-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 768px) {
    .c-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>

<div class="c-cards" id="c-cards">
  {#each servicios as servicio}
    <ItemServicios {servicio} />
  {/each}
</div>
