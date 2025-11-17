<script lang="ts">
	import { Github, Linkedin, Mail, Languages } from 'lucide-svelte';
	import { language } from '$lib/stores/language';
	import { t } from '$lib/i18n';
	import logo from '$lib/assets/jp-logo.png';
	
	function toggleLanguage() {
		language.update(lang => lang === 'cs' ? 'en' : 'cs');
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary-100">
	<div class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center">
				<img src={logo} alt="Jan Podmolík" class="h-12 w-auto object-contain" />
			</a>
			
			<div class="flex items-center gap-8">
				<div class="flex gap-6 items-center">
					<a href="#about" class="text-text-secondary hover:text-primary transition-colors">
						{$t.nav.about}
					</a>
					<a href="#projects" class="text-text-secondary hover:text-primary transition-colors">
						{$t.nav.projects}
					</a>
				</div>
				
				<div class="flex gap-4 items-center border-l border-primary-100 pl-6">
					<button
						onclick={toggleLanguage}
						class="text-text-secondary hover:text-primary transition-colors flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-primary-50"
						aria-label="Toggle language"
					>
						<Languages size={18} />
						<span class="text-sm font-medium uppercase">{$language}</span>
					</button>
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
	</div>
</nav>
