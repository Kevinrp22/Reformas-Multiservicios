<script>
  import globalStore from "../../stores/globalStore";
</script>

<style>
  .logo img {
    display: block;
    width: 200px;
    min-width: 100px;
  }

  .barra {
    font-size: 25px;
    cursor: pointer;
  }

  @media (max-width: 370px) {
    .top-header__widgets__tlf a {
      font-size: 0.7rem;
    }
  }
</style>

<header>

  <nav class="navbar k-grid ">
    <div class="logo">
      <a href="/">
        <img src="/logo-web.png" alt="" />
      </a>
    </div>
    <div
      class="barra"
      on:click={() => {
        globalStore.toggleItem('sidebar', true);
      }}>
      <i class="fas fa-bars" />
    </div>

  </nav>
</header>
