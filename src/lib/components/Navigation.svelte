<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary-100">
	<div class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="text-2xl font-bold text-primary">
				JP
			</a>
			
			<div class="flex gap-6 items-center">
				<a href="#about" class="text-text-secondary hover:text-primary transition-colors">
					O mně
				</a>
				<a href="#skills" class="text-text-secondary hover:text-primary transition-colors">
					Skills
				</a>
				<a href="#projects" class="text-text-secondary hover:text-primary transition-colors">
					Projekty
				</a>
			</div>
			
			<div class="flex gap-4">
				<a 
					href="https://github.com/janpodmolik" 
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-secondary hover:text-primary transition-colors"
					aria-label="GitHub"
				>
					<Github size={20} />
				</a>
				<a 
					href="https://linkedin.com/in/janpodmolik" 
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-secondary hover:text-primary transition-colors"
					aria-label="LinkedIn"
				>
					<Linkedin size={20} />
				</a>
				<a 
					href="mailto:jan@podmolik.cz"
					class="text-text-secondary hover:text-primary transition-colors"
					aria-label="Email"
				>
					<Mail size={20} />
				</a>
			</div>
		</div>
	</div>
</nav>
