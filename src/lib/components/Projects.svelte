<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
	
	interface Project {
		title: string;
		description: string;
		tags: string[];
		github?: string;
		demo?: string;
		gradient: string;
	}
	
	const projects: Project[] = [
		{
			title: 'Portfolio Website',
			description: 'Moderní osobní portfolio vytvořené v SvelteKit s Tailwind CSS. Využívá statický export a animace pro plynulý uživatelský zážitek.',
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
			github: 'https://github.com/janpodmolik/portfolio',
			demo: 'https://janpodmolik.github.io',
			gradient: 'from-accent/20 to-secondary/20'
		},
		{
			title: 'E-commerce Dashboard',
			description: 'Admin dashboard pro správu e-shopu s real-time statistikami, správou produktů a objednávek.',
			tags: ['React', 'Node.js', 'PostgreSQL'],
			github: 'https://github.com/janpodmolik',
			gradient: 'from-primary/20 to-primary-light/20'
		},
		{
			title: 'Task Manager API',
			description: 'RESTful API pro správu úkolů s autentizací, real-time notifikacemi a export do různých formátů.',
			tags: ['Express', 'MongoDB', 'JWT'],
			github: 'https://github.com/janpodmolik',
			gradient: 'from-secondary/20 to-accent/20'
		},
	];
</script>

<section id="projects" class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-6xl mx-auto">
			<!-- Section header -->
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">
					Projekty
				</h2>
				<div class="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
				<p class="text-text-muted mt-6 text-lg">
					Výběr projektů, na kterých jsem pracoval
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
							<h3 class="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
								{project.title}
							</h3>
							<div class="flex gap-2">
								{#if project.github}
									<a 
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										class="text-text-muted hover:text-primary transition-colors p-2 hover:bg-white rounded-lg"
										aria-label="GitHub repository"
									>
										<Github size={20} />
									</a>
								{/if}
								{#if project.demo}
									<a 
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										class="text-text-muted hover:text-primary transition-colors p-2 hover:bg-white rounded-lg"
										aria-label="Live demo"
									>
										<ExternalLink size={20} />
									</a>
								{/if}
							</div>
						</div>
						
						<!-- Description -->
						<p class="text-text-secondary mb-6 leading-relaxed">
							{project.description}
						</p>
						
						<!-- Tags -->
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
					href="https://github.com/janpodmolik"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-medium 
					hover:bg-primary-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
				>
					<Github size={20} />
					Více projektů na GitHubu
				</a>
			</div>
		</div>
	</div>
</section>
