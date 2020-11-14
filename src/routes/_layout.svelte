<script>
	import Navbar from "../components/Navbar/Navbar.svelte";
	import Footer from "../components/Footer.svelte";
	import TopHeader from "../components/Navbar/TopHeader.svelte";
	import Nav from "../components/Nav.svelte";
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
<main>
	<slot />
</main>
<Footer />
