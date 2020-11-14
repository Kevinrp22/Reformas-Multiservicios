<script>
  export let servicio;
  const { url, titulo, portada } = servicio;
</script>

<style>
  .categoria {
    position: relative;
    transition: all 0.6s ease;
  }

  .categoria img {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .categoria__background {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    font-weight: 700;
    background: rgba(65, 65, 65, 0.32);
    transition: var(--transition);
  }
  .categoria__background::before {
    content: "";
    border: 3px solid rgb(213 213 213);
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 16px;
    transition: var(--transition);
  }
  .categoria:hover {
    -webkit-transform: translateY(-0.5rem);
    transform: translateY(-0.5rem);
    box-shadow: rgb(24 24 24 / 63%);
  }
  .categoria:hover .categoria__titulo {
    color: rgb(213 213 213);
  }
  .categoria:hover .categoria__background {
    background: rgb(24 24 24 / 63%);
  }
  .categoria:hover .categoria__background::before {
    opacity: 1;
  }

  .categoria__titulo {
    font-size: 24px;
    width: 150px;
    text-align: center;
    border: 4px solid transparent;
    transition: var(--transition);
  }
</style>

<div class="categoria" data={titulo}>
  <img src={portada} alt="" class="categoria__imagen" />
  <a href={`/servicios/${url}`} class="categoria__background">
    <p class="categoria__titulo">{titulo}</p>
  </a>
</div>
