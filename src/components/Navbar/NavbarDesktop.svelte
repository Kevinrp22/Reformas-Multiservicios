<script>
</script>

<style>

  .logo img {
    display: block;
    width: 200px;
    min-width: 100px;
  }

  .c-menu {
    display: flex;
    justify-content: flex-end;
  }

  .menu {
    display: flex;
  }

  .menu li {
    padding: 0 20px;
  }

  .menu a {
    color: var(--color-texto);
    font-weight: 400;
    text-transform: uppercase;
    transition: all 0.4s ease;
  }

  .menu a:hover {
    color: var(--color-primario);
  }

  #menu-desplegable {
    display: none;
    background-color: rgba(255, 255, 255, 0.98);
    width: 100%;
    /*   transform: translate(0px, -270px);   */
  }

  #menu-desplegable li a {
    display: block;
    padding: 10px 0px;
    text-transform: uppercase;
    border-bottom: 1px solid #cccccc;
    -webkit-transition: all 0.2s ease;
  }

  #menu-desplegable li a:hover {
    color: var(--color-primario);
    -webkit-transition: all 0.2s ease;
  }

  #barra {
    display: none;
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
    <div class="menu">
      <a href="/">Inicio</a>
      <a href="/servicios">servicios</a>
      <a href="/galeria">Galeria</a>
      <a href="/about">Quienes somos</a>
      <a href="/contacto">Contacto</a>
    </div>
  </nav>

</header>
