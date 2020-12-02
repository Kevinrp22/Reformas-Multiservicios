<style>
  .section_url {
    position: relative;
    background: url("/banner2-gray.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .section_url--h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 2.5rem;
    padding: 1.2rem 0;
    margin: 0;
  }
  .section_url--h2 {
    color: rgb(204, 204, 204);
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.3rem;
    margin: 0;
  }
</style>

<section class="section_url">
  <h1 class="section_url--h1 ">
    <slot name="titulo">Error</slot>
  </h1>
  <h2 class="section_url--h2">
    <slot name="subtitulo">Error</slot>
  </h2>
</section>
