<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
	let { children } = $props();
</script>

<div class="flex w-full flex-col items-center ">
	<Header />
	{@render children()}
</div>
<Nav />
