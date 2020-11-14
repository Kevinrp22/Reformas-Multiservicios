<style>
  .top-header {
    background-color: var(--color-primario);
    padding: 5px 0px;
  }

  .top-header__widgets__tlf a {
    display: flex;
    align-items: center;
    color: #cacaca;
    font-size: 15px;
    padding: 5px 10px;
    font-weight: 600;
    background-color: #5656562b;
    border-radius: 15px;
    transition: all 0.5s;
  }

  .top-header__widgets__tlf a:hover {
    background-color: rgb(60, 60, 60);
  }

  .top-header__rrss,
  .top-header__rrss a,
  .top-header__rrss--habitissimo {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: rgb(60, 60, 60) !important;
    transition: all 0.4s;
  }

  .top-header__rrss a:hover {
    color: whitesmoke !important;
  }

  .top-header__rrss--habitissimo:hover {
    background-color: whitesmoke;
  }

  .top-header__rrss--habitissimo {
    background-color: rgb(60, 60, 60);
    width: 100px;
    border-radius: 5px;
    padding: 5px;
    margin: 0px 5px;
  }

  .top-header__widgets {
    display: flex;
    align-items: center;
  }
</style>

<div class="top-header">
  <div class="k-grid k-flex">
    <div class="top-header__widgets">
      <span class="top-header__widgets__tlf">
        <a href="tel:611235757">
          <i class="fas fa-phone-square-alt" style=" margin: 0 10px; " />
          <span style=" padding-right: 5px; ">611 235 757</span>
        </a>
      </span>
    </div>
    <div class="top-header__rrss">
      <a
        href="https://www.facebook.com/ReformasMultiservici0s/"
        target="_blank">
        <i class="fab fa-facebook" />
      </a>
      <a
        href="https://empresas.habitissimo.es/pro/reformas-multiservicios-5ccff453af616#1"
        target="_blank">
        <img
          src="/habitissimo.png"
          alt=""
          class="top-header__rrss--habitissimo" />
      </a>
    </div>
  </div>

</div>
