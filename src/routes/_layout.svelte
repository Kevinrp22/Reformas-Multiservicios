<script>
	import Navbar from "../components/Navbar/Navbar.svelte";
	import Sidebar from "../components/Navbar/Sidebar.svelte";
	import Footer from "../components/Footer.svelte";
	import TopHeader from "../components/Navbar/TopHeader.svelte";
	import ModalGaleria from "../components/Galeria/ModalGaleria.svelte";

	import globalStore from "../stores/globalStore";
</script>

<style>
	main {
		position: relative;
		max-width: 90em;
		background-color: white;
		padding: 0.5em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<TopHeader />
<Navbar />
{#if $globalStore.modal_galeria}
	<ModalGaleria />
{/if}
{#if $globalStore.sidebar}
	<Sidebar />
{/if}
<main>
	<slot />
</main>
<Footer />
