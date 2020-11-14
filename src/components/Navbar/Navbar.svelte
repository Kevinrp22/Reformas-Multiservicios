<script>
  import NavbarDesktop from "./NavbarDesktop.svelte";
  import NavbarMobile from "./NavbarMobile.svelte";
  import globalStore from "../../stores/globalStore"
  let screenWidth;
  $:if (screenWidth > 700){
    globalStore.toggleItem("sidebar", false)
  }
</script>
<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 700}
  <NavbarDesktop />
{:else}
  <NavbarMobile />
{/if}