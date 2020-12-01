<script>
	import ListaServicios from "../components/Categorias/ListaCategorias.svelte";
	import ListaDestacada from "../components/Galeria/ListaDestacada.svelte";
	//TODO: Crear todos los servicios posibles, mirar de añadir count_visits
	//a las categorias y los servicios para mejorar el "destacado"
	//TODO: Mirar de añadir a las servicios, imagenes segun el tipo
	//*queremos que en el servicio seleccionado aparescan imagenes del tipo*
	
</script>

<style>
	/* 
  ====== 
  SECCION BIENVENIDA
  ======
  */
	.s-bienvenida {
		background: url("/banner1.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		min-height: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.s-bienvenida__titulo {
		font-size: 2.5rem;
	}
	/* 
  ====== 
  SECCION BUSQUEDA
  ======
  */
	.c-busqueda {
		position: relative;
	}

	.pantalla-busqueda {
		position: fixed !important;
		top: 0;
		left: 0;
		overflow-y: auto;
		overflow-x: hidden;
		min-width: 100vw;
		min-height: 100vh;
		background-color: rgba(255, 255, 255, 0.98);
		box-shadow: rgba(19, 19, 19, 0.15) 0px 0px 20px 0px;
		overflow-x: hidden;
		transform-origin: 100% 0px;
		transition-property: min-height, height, width, top, left, background-color,
			overflow;
		transition-duration: 0.5s;
		transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
		position: fixed;
		z-index: 1000;
	}

	#boton-cerrar {
		display: none;
		width: 15px;
		position: absolute;
		top: 20px;
		right: 45px;
		cursor: pointer;
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}

	#boton-cerrar:hover {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}

	#icon-busca {
		position: absolute;
		right: 30px;
		top: 43px;
	}
	#icon-busca .fas {
		color: #4d4d4d;
		font-size: 1.3rem;
	}

	.buscador {
		position: relative;
	}

	.busqueda {
		height: 85px;
	}

	.busqueda input {
		width: 100%;
		border: 1px solid #707070;
		padding: 20px;
		margin-top: 20px;
		font-size: 15px;
	}

	.busqueda input:focus {
		outline: none;
	}

	.busqueda input::placeholder {
		font-weight: 500;
	}

	.c-cards-busqueda {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
		grid-template-rows: repeat(auto-fit, minmax(150x, 200px));
		gap: 20px;
		justify-content: center;
		width: 100%;
		padding-top: 50px;
		height: -webkit-fill-available;
		flex-wrap: wrap;
		padding-bottom: 2rem;
	}
	/* 
  ====== 
  SECCION ESTRELLAS
  ======
  */
	.s-estrellas {
		display: flex;
		justify-content: center;
		background-color: #fbfbfb;
	}

	.c-estrellas {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem 30px;
		width: 800px;
	}

	.estrellas i {
		font-size: 25px;
		color: #ffd631;
		padding: 10px 5px;
	}
	/* 
  ====== 
  SECCION PORQUE ELEGIRNOS?
  ======
  */
	.c-pn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 50px;
	}

	.c-card-pn {
		display: grid;
		grid-template-columns: 1fr;
	}

	.card-pn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		color: rgb(85, 85, 85);
	}

	.card-pn__svg img {
		width: 50px;
	}

	.card-pn__titulo {
		color: rgb(54, 54, 54);
		font-size: 18px;
		text-transform: uppercase;
		padding: 5px 0px;
	}
</style>

<section class="s-bienvenida">
	<div class="k-grid">
		<h1 class="s-bienvenida__titulo">
			Especialista en construcciones
			<br />
			y reformas en Mallorca
		</h1>
		<p>
			Contrucciones y reformas en Mallorca al mejor precio.
			<br />
			Más de 20 años de experiencia en el sector
		</p>
		<button class="btn"> <a href="/servicios">Pedir Presupuesto</a> </button>
	</div>
</section>
<section class="c-busqueda" id="c-busqueda">
	<div class="responsive k-grid">
		<div class="busqueda" id="c-busqueda-ab">
			<div class="buscador">
				<span id="icon-busca"> <i class="fas fa-search" /> </span>
				<input
					id="busqueda"
					type="text"
					placeholder="¿Qué necesitas?"
					autocomplete="off" />
				<span id="boton-cerrar"> <img src="/cancelar.svg" alt="" /> </span>
			</div>

			<div class="c-cards-busqueda" id="salida-cards" />
		</div>
		<div class="k-flex">
			<ListaServicios />
		</div>
	</div>
</section>
<section class="s-estrellas k-margin">
	<div class="c-estrellas">
		<h1 class="titulo">Convertimos tus sueños en realidad</h1>
		<p>
			Desde pequeñas reformas hasta grandes proyectos. Nuestra prioridad es la
			<strong>satisfacción</strong>
			de los clientes por ello siempre intentamos cumplir en la entrega de la
			obra en el plazo indicado
		</p>
		<div class="estrellas">
			<i class="fas fa-star" />
			<i class="fas fa-star" />
			<i class="fas fa-star" />
			<i class="fas fa-star" />
			<i class="fas fa-star" />
		</div>
	</div>
</section>
<section class="k-grid tx-ct">
	<h1 class="titulo">Obras destacadas</h1>
	<ListaDestacada />
	<div class="k-flex">
		<a href="/galeria">
			<button class="btn">Ver nuestra galeria completa</button>
		</a>
	</div>
</section>
<section class="s-porque-elegirnos k-margin">
	<div class="c-pn k-grid k-margin">
		<h1 class="titulo k-padding">¿Porqué elegirnos?</h1>
		<div class="c-card-pn">
			<div class="card-pn">
				<div class="card-pn__svg">
					<img src="/porque-elegirnos/presupuesto.svg" alt="" />
				</div>
				<h2 class="card-pn__titulo">Presupuesto</h2>
				<p class="card-pn__texto">
					Presupuestos sin compromiso. Explícanos tu proyecto sin compromiso
					alguno.
				</p>
			</div>

			<div class="card-pn">
				<div class="card-pn__svg">
					<img src="/porque-elegirnos/calidad.svg" alt="" />
				</div>
				<h2 class="card-pn__titulo">Calidad</h2>
				<p class="card-pn__texto">
					Buscamos la máxima calidad en todos y cada uno de nuestros servicios.
				</p>
			</div>

			<div class="card-pn">
				<div class="card-pn__svg">
					<img src="/porque-elegirnos/precio-ajustado.svg" alt="" />
				</div>
				<h2 class="card-pn__titulo">Precios ajustados</h2>
				<p class="card-pn__texto">
					Ofrecemos los mejores precios ofreciendo la mejor calidad en nuestros
					trabajos.
				</p>
			</div>

			<div class="card-pn">
				<div class="card-pn__svg">
					<img src="/porque-elegirnos/experiencia.svg" alt="" />
				</div>
				<h2 class="card-pn__titulo">Experiencia</h2>
				<p class="card-pn__texto">
					Ponemos a disposición de nuestros clientes nuestros más de 20 años de
					experiencia
				</p>
			</div>

			<div class="card-pn">
				<div class="card-pn__svg">
					<img src="/porque-elegirnos/asesoramiento.svg" alt="" />
				</div>
				<h2 class="card-pn__titulo">Asesoramiento</h2>
				<p class="card-pn__texto">
					Ofrecemos un asesoramiento personalizado para ayudarle en sus reformas
					en Mallorca
				</p>
			</div>

			<div class="card-pn">
				<div class="card-pn__svg">
					<img src="/porque-elegirnos/satisfaccion.svg" alt="" />
				</div>
				<h2 class="card-pn__titulo">satisfacción</h2>
				<p class="card-pn__texto">
					Nuestro objetivo es conseguir la máxima satisfacción de nuestros
					clientes.
				</p>
			</div>
		</div>
	</div>
</section>
