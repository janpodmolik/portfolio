<script lang="ts">
	import { ArrowDown } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section id="hero" class="py-24 relative">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto text-center">
			<!-- Animated gradient badge -->
			<div class="inline-block mb-8">
				<span class="px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 text-primary-dark text-sm font-medium border border-accent/30">
					{$t.hero.welcome}
				</span>
			</div>
			
			<!-- Main heading -->
			<h1 class="text-5xl md:text-7xl font-bold mb-6">
				<span class="text-primary">Jan</span>
				<span class="text-primary-light"> Podmolík</span>
			</h1>
			
			<!-- Subtitle -->
			<p class="text-2xl md:text-3xl text-text-secondary mb-8 font-medium">
				{$t.hero.position}
			</p>
			
			<!-- Description -->
			<p class="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
				{$t.hero.description}
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a 
					href="#projects" 
					class="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
				>
					{$t.hero.viewProjects}
				</a>
				<a 
					href="#about" 
					class="px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-primary-50 transition-all border-2 border-primary-100 hover:border-primary"
				>
					{$t.hero.moreAbout}
				</a>
			</div>
		</div>
	</div>
	
	<!-- Scroll indicator -->
	<a 
		href="#about"
		class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text-muted hover:text-primary transition-colors"
		aria-label="Scroll down"
	>
		<ArrowDown size={32} />
	</a>
</section>

<style>
	@keyframes bounce {
		0%, 100% {
			transform: translateY(0) translateX(-50%);
		}
		50% {
			transform: translateY(-10px) translateX(-50%);
		}
	}
	
	.animate-bounce {
		animation: bounce 2s infinite;
	}
</style>
