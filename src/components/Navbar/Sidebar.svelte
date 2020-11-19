<script>
  import { onMount } from "svelte";

  import globalStore from "../../stores/globalStore";
  import { fly, fade } from "svelte/transition";

  onMount(() => {
    let links = document.querySelectorAll(".sidebar a");
    links.forEach((link) =>
      link.addEventListener("click", () => {
        globalStore.toggleItem("sidebar", false);
      })
    );
  });
</script>

<style>
  .fondo-sidebar {
    background-color: rgba(61, 61, 61, 0.651);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
  }
  .sidebar {
    box-sizing: border-box;
    background: #262626;
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 350px;
    height: 100%;
    z-index: 20;
  }
  .nav-sidebar {
    display: flex;
    flex-direction: column;
  }
  .nav-sidebar__link {
    color: rgb(160, 160, 160);
    text-transform: uppercase;
    padding: 15px;
    border-top: 1px solid #424242;
    transition: var(--transition);
    font-weight: 500;
  }
  .nav-sidebar__link:hover {
    color: var(--color-primario);
  }
  .btn-close {
    text-align: left;
    cursor: pointer;
    padding: 5px 13px;
    font-size: 1.7em;
    background: transparent;
    border: none;
    text-transform: lowercase;
  }
  .logo-sidebar {
    cursor: pointer;
    text-align: center;
    padding: 10px 0;
  }
  .logo-sidebar__img {
    width: 200px;
  }
</style>

<div class="fondo-sidebar">
  <div class="sidebar" transition:fly={{ x: 350, delay: 10 }}>
    <div class="nav-sidebar">
      <button
        class="btn-close nav-sidebar__link"
        on:click={() => {
          globalStore.toggleItem('sidebar', false);
        }}>
        <i class="far fa-times-circle" />
      </button>
      <a href="/" class="nav-sidebar__link">Inicio</a>
      <a href="/servicios" class="nav-sidebar__link">servicios</a>
      <a href="/galeria" class="nav-sidebar__link">Galeria</a>
      <a href="/about" class="nav-sidebar__link">Quienes somos</a>
      <a href="/contacto" class="nav-sidebar__link">Contacto</a>
    </div>
    <div class="logo-sidebar">
      <a href="/">
        <img src="/logo-web.png" class="logo-sidebar__img" alt="" />
      </a>
    </div>
  </div>
</div>
