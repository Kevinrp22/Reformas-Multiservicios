<script>
</script>

<style>
  a {
    color: rgb(146, 146, 146);
    transition: var(--transition);
  }
  a:hover {
    color: var(--color-primario);
    margin-left:3px;
    text-decoration: underline;
  }
  footer {
    font-size: 15px;
  }

  .footer-1 {
    background-color: #2d2d2d;
    color: rgb(146, 146, 146);
  }

  .footer-1__container {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
  }

  .footer-1__container__colums i {
    margin-right: 10px;
    color: var(--color-primario);
  }

  .footer-1__container__colums-titulo {
    color: rgb(221, 221, 221);
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;
    padding: 10px 0;
  }

  .footer-1__container__colums__img {
    width: 300px;
    padding: 15px 0;
    opacity: 0.6;
  }

  .footer-1__container__colums-servicios {
    padding-left: 10px;
  }

  .footer-1__container__colums-servicios li {
    list-style: square;
  }


  .__colums__form {
    width: 400px;
  }

  .__colums__form input,
  textarea {
    background-color: #f3f3f3;
    color: #2a2f35;
    width: 100%;
    padding: 12px 10px;
    font-size: 15px;
    margin: 3px 0;
    transition: var(--transition);
  }

  .__colums__form input:focus,
  textarea:focus {
    outline: none;
  }

  .__colums__form textarea {
    resize: none;
    height: 150px;
  }

  .btn-submit-footer {
    background-color: var(--color-primario) !important;
    font-size: 16px !important;
    color: #2d2d2d !important;
    cursor: pointer;
    outline: 2px solid transparent;
  }

  .btn-submit-footer:hover {
    outline: 2px solid var(--color-primario);
    background-color: #2d2d2d !important;
    color: var(--color-primario) !important;
  }

  .footer-2 {
    background-color: #383838;
    color: #8e8e8e;
    font-size: 13px;
  }

  .enlaces-interes ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px 0px;
  }

  .enlaces-interes ul li {
    margin: 1px 15px;
    list-style: circle !important;
  }

  .enlaces-interes ul li a {
    display: block;
    width: 165px;
    transition: all 0.3s ease;
  }

  .enlaces-interes ul li a:hover {
    text-decoration: underline;
    color: var(--color-primario);
  }

  .footer-3 {
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    text-align: center;
    padding: 20px;
  }
</style>

<footer>
  <div class="footer-1">
    <div class="k-grid">
      <ul class="footer-1__container k-padding">
        <li class="footer-1__container__colums">
          <h2 class="footer-1__container__colums-titulo">Quienes Somos</h2>
          <p class="footer-1__container__colums-descripcion">
            Somos una empresa especiliazada en reformas de todo tipo en
            Mallorca. Desde pequeñas reformas hasta grandes proyectos, con más
            de 20 años de experiencia en el sector. Nuestra prioridad es la
            satisfacción del cliente
          </p>
          <a href="/">
            <img
              class="footer-1__container__colums__img"
              src="/logo-web.png"
              alt="" />
          </a>
        </li>
        <li class="footer-1__container__colums">
          <h2 class="footer-1__container__colums-titulo">
            Servicios Principales
          </h2>
          <ul class="footer-1__container__colums-servicios">
            <li>
              <a href="/servicios/Reforma-de-baño">Reformas de baño</a>
            </li>
            <li>
              <a href="/servicios/Reforma-integral">
                Reformas integrales
              </a>
            </li>
            <li>
              <a href="/servicios/Reforma-de-cocina">
                Reformas de cocina
              </a>
            </li>
            <li>
              <a href="/servicios/Pintura">Pintura de Vivienda</a>
            </li>
            <li>
              <a href="/servicios/Tejados">Tejados y cubiertas</a>
            </li>
            <li>
              <a href="/servicios/Impermeabilizacion">
                Impermeabilización de terrazas
              </a>
            </li>
          </ul>
        </li>
        <li class="footer-1__container__colums">
          <h2 class="footer-1__container__colums-titulo">Info. de contacto</h2>
          <p>
            <i class="fas fa-map-marker-alt" />
            Jaume Ferran, 55, 07004 Palma de Mallorca
          </p>
          <p>
            <a href="mailto:reformasmultiserviciospg@gmail.com">
              <i class="far fa-envelope" />
              reformasmultiserviciospg@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:611235757">
              <i class="fas fa-phone-square-alt" />
              +34 611 235 757
            </a>
          </p>
        </li>
        <li class="footer-1__container__colums">
          <h2 class="footer-1__container__colums-titulo">
            ¿Tienes alguna consulta o duda?
          </h2>
          <form action="" class="__colums__form">
            <input type="name" placeholder="Tu nombre" required />
            <input type="tel" placeholder="Teléfono (Opcional)" />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Asunto" required />
            <textarea type="text" placeholder="Mensaje / Consulta" required />
            <input
              type="submit"
              value="ENVIAR FORMULARIO"
              class="btn-submit-footer" />
          </form>
        </li>
      </ul>
    </div>
  </div>

  <div class="footer-2">
    <div class="enlaces-interes k-grid">
      <ul>
        <li>
          <a href="#">Reforma integral en Mallorca</a>
        </li>
        <li>
          <a href="#">Reformar cocina en Mallorca</a>
        </li>
        <li>
          <a href="#">Reformar baño en Mallorca</a>
        </li>
        <li>
          <a href="#">Reformar de piso</a>
        </li>
        <li>
          <a href="#">Reformar de casa</a>
        </li>
        <li>
          <a href="#">Reforma Integral en Mallorca</a>
        </li>
        <li>
          <a href="#">Reforma Integral en Mallorca</a>
        </li>
        <li>
          <a href="#">Reforma Integral en Mallorca</a>
        </li>
        <li>
          <a href="#">Reforma Integral en Mallorca</a>
        </li>
        <li>
          <a href="#">Reforma Integral en Mallorca</a>
        </li>
      </ul>
    </div>

  </div>
  <div class="footer-3">
    <div class="k">
      <p>
        Designed by:
        <strong>
          <a
            href="https://kevinpuchaicela.herokuapp.com/"
            target="_blank"
            style="color: #447F91;;">
            Kevin Puchaicela
          </a>
        </strong>
      </p>
    </div>
  </div>

</footer>
