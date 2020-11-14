<style>
  .formulario input,
  .formulario textarea,
  .formulario select {
    padding: 10px;
    width: 100%;
    margin: 5px 0px;
    border: 1px solid #cacaca;
  }

  .formulario textarea {
    resize: none;
  }

  .formulario {
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1b5;
    padding: 20px;
  }

  .info-personal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .bloque {
    margin: 0 5px;
  }
  .bloque-subtitle {
    font-size: 0.8rem;
    font-style: italic;
    color: #1b1b1b;
  }

  .preguntas {
    display: flex;
  }

  .left {
    border-right: 1px solid rgb(192, 192, 192);
    margin-right: 15px;
    padding-right: 15px;
  }
</style>

<form action="" class="formulario">
  <div class="preguntas">
    <div class="left">
      <div class="info-personal">
        <div class="bloque">
          <label for="">Nombre</label>
          <input type="text" placeholder="Tu nombre" required />
        </div>
        <div class="bloque">
          <label for="">Telefono</label>
          <input type="tel" placeholder="Teléfono" required />
        </div>
        <div class="bloque">
          <label for="">Email</label>
          <input type="email" placeholder="example@gmail.com" required />
        </div>
        <div class="bloque">
          <label for="">Código Postal</label>
          <input type="text" placeholder="" required />
        </div>
      </div>
      <div class="asunto">
        <div class="bloque">
          <label for="">Asunto</label>
          <input
            id="asunto"
            type="text"
            placeholder="Asunto"
            value=""
            required />
        </div>
      </div>
      <div class="faq">
        <div class="bloque">
          <label for="">Breve descripción del trabajo/reforma</label>
          <textarea type="text" placeholder="Escribe aquí" required />
        </div>
      </div>

    </div>
    <div class="right">
      <div class="bloque">
        <label for="">Preferencia horaria</label>
        <p class="bloque-subtitle">
          Elige el horario de trabajo que te convenga
        </p>
        <select name="" id="">
          <option value="">Elige una opción</option>
          <option value="">
            Prefiero que la reforma se lleve a cabo los fines de semana
          </option>
          <option value="">
            Prefiero que la reforma se lleve a cabo los dias laborables (L-V)
          </option>
          <option value="">Es indiferente</option>
        </select>
      </div>
      <div class="bloque">
        <label for="">Interés</label>
        <p class="bloque-subtitle">
          ¿Qué interés tiene en realizar el trabajo?
        </p>
        <select name="" id="">
          <option value="">Elige una opción</option>
          <option value="">Es problable que lo haga</option>
          <option value="">Solo tengo curiosidad</option>
          <option value="">Lo haré con total seguridad</option>
        </select>
      </div>
      <div class="bloque">
        <label for="">Zona de trabajo</label>
        <p class="bloque-subtitle">Lugar de trabajo/reforma</p>
        <select name="" id="">
          <option value="">Elige una opción</option>
          <option value="">A pie de calle</option>
          <option value="">Comunidad de propietarios</option>
          <option value="">Vivienda unifamiliar</option>
          <option value="">Solar</option>
          <option value="">Otro</option>
        </select>
      </div>
    </div>
  </div>

  <div class="enviar">
    <input type="submit" value="PEDIR PRESUPUESTO" class="btn" />
  </div>
</form>
