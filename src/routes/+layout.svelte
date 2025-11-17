<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="author" content="Jan Podmolík" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jan Podmolík - Full-stack Developer" />
	<meta property="og:description" content="Portfolio Jana Podmolíka - full-stack developer specializující se na moderní webové technologie." />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Navigation />
	<main class="flex-grow pt-20">
		{@render children()}
	</main>
	<Footer />
</div>
