<svelte:head>
   <title>Fairuz Sakhiy - Portfolio</title>
   <meta name="description" content="Fairuz's Portfolio built on SvelteKit" />
</svelte:head>


<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
