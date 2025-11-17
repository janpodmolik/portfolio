<script lang="ts">
	import { ExternalLink, Globe } from 'lucide-svelte';
	import { t } from '$lib/i18n';
	import { siteConfig } from '$lib/config';
	
	interface Project {
		title: string;
		descriptionKey: 'notino' | 'sova' | 'zdravicko';
		tags: string[];
		appStore?: string;
		website?: string;
		gradient: string;
		icon: string;
	}
	
	const projects: Project[] = [
		{
			title: 'Zdravíčko',
			descriptionKey: 'zdravicko',
			tags: ['Astro', 'TypeScript', 'Tailwind'],
			website: 'https://zdravicko.cz',
			gradient: 'from-secondary/20 to-accent/20',
			icon: '🏥'
		},
		{
			title: 'Notino',
			descriptionKey: 'notino',
			tags: ['Swift', 'SwiftUI', 'iOS'],
			appStore: 'https://apps.apple.com/app/notino/id738131177',
			gradient: 'from-accent/20 to-secondary/20',
			icon: '💄'
		},
		{
			title: 'SOVA',
			descriptionKey: 'sova',
			tags: ['Swift', 'SwiftUI', 'iOS'],
			appStore: 'https://apps.apple.com/app/sova/id123456789',
			gradient: 'from-primary/20 to-primary-light/20',
			icon: '🦉'
		},
	];
</script>

<section id="projects" class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<!-- Section header -->
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">
					{$t.projects.title}
				</h2>
				<div class="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
				<p class="text-text-muted mt-6 text-lg">
					{$t.projects.subtitle}
				</p>
			</div>
			
			<!-- Projects grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each projects as project}
					<article 
						class="group bg-gradient-to-br {project.gradient} p-6 rounded-2xl border-2 border-primary-100 
						hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
					>
					<!-- Header -->
					<div class="flex justify-between items-start mb-4">
						<div class="flex items-center gap-3">
							<span class="text-3xl">{project.icon}</span>
							<h3 class="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
								{project.title}
							</h3>
						</div>
						<div class="flex gap-2">
							{#if project.appStore}
								<a 
									href={project.appStore}
									target="_blank"
									rel="noopener noreferrer"
									class="text-text-muted hover:text-primary transition-colors p-2 hover:bg-white rounded-lg"
									aria-label={$t.projects.viewApp}
									title={$t.projects.viewApp}
								>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
									</svg>
								</a>
							{/if}
							{#if project.website}
								<a 
									href={project.website}
									target="_blank"
									rel="noopener noreferrer"
									class="text-text-muted hover:text-primary transition-colors p-2 hover:bg-white rounded-lg"
									aria-label={$t.projects.viewWebsite}
									title={$t.projects.viewWebsite}
								>
									<Globe size={20} />
								</a>
							{/if}
						</div>
					</div>					<!-- Description -->
					<p class="text-text-secondary mb-6 leading-relaxed">
						{$t.projects.items[project.descriptionKey].description}
					</p>						<!-- Tags -->
						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="px-3 py-1 bg-white text-primary-dark text-sm rounded-lg border border-primary-100 font-medium">
									{tag}
								</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
			
			<!-- More projects CTA -->
			<div class="mt-16 text-center">
				<a 
					href={siteConfig.social.github}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-medium 
					hover:bg-primary-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
					{$t.projects.moreProjects}
				</a>
			</div>
		</div>
	</div>
</section>
