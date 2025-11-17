<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
	import { t } from '$lib/i18n';
	import { siteConfig } from '$lib/config';
</script>

<footer class="bg-primary-50 border-t border-primary-100 py-12">
	<div class="container mx-auto px-6">
		<div class="flex flex-col md:flex-row justify-between items-center gap-6">
			<div class="text-center md:text-left">
				<h3 class="text-xl font-bold text-primary mb-2">Jan Podmolík</h3>
				<p class="text-text-muted">{$t.footer.position}</p>
			</div>			<div class="flex gap-6">
				<a 
					href={siteConfig.social.github} 
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-secondary hover:text-primary transition-colors flex items-center gap-2"
				>
					<Github size={20} />
					<span class="text-sm">GitHub</span>
				</a>
				<a 
					href={siteConfig.social.linkedin} 
					target="_blank"
					rel="noopener noreferrer"
					class="text-text-secondary hover:text-primary transition-colors flex items-center gap-2"
				>
					<Linkedin size={20} />
					<span class="text-sm">LinkedIn</span>
				</a>
				<a 
					href={siteConfig.social.email}
					class="text-text-secondary hover:text-primary transition-colors flex items-center gap-2"
				>
					<Mail size={20} />
					<span class="text-sm">Email</span>
				</a>
			</div>
		</div>
		
		<div class="mt-8 pt-6 border-t border-primary-100 text-center text-sm text-text-muted">
			© {new Date().getFullYear()} Jan Podmolík. {$t.footer.rights}
		</div>
	</div>
</footer>
