<script lang="ts">
	interface Skill {
		name: string;
		category: 'frontend' | 'backend' | 'tools';
		color: string;
	}
	
	const skills: Skill[] = [
		// Frontend
		{ name: 'TypeScript', category: 'frontend', color: 'bg-primary' },
		{ name: 'Svelte', category: 'frontend', color: 'bg-accent' },
		{ name: 'React', category: 'frontend', color: 'bg-primary-light' },
		{ name: 'Tailwind CSS', category: 'frontend', color: 'bg-secondary' },
		{ name: 'HTML/CSS', category: 'frontend', color: 'bg-primary-dark' },
		
		// Backend
		{ name: 'Node.js', category: 'backend', color: 'bg-primary' },
		{ name: 'Express', category: 'backend', color: 'bg-accent-dark' },
		{ name: 'PostgreSQL', category: 'backend', color: 'bg-primary-light' },
		{ name: 'MongoDB', category: 'backend', color: 'bg-secondary-dark' },
		{ name: 'REST API', category: 'backend', color: 'bg-primary-dark' },
		
		// Tools
		{ name: 'Git', category: 'tools', color: 'bg-primary' },
		{ name: 'Docker', category: 'tools', color: 'bg-accent' },
		{ name: 'VS Code', category: 'tools', color: 'bg-secondary' },
		{ name: 'Vite', category: 'tools', color: 'bg-primary-light' },
		{ name: 'GitHub Actions', category: 'tools', color: 'bg-primary-dark' },
	];
	
	const categories = {
		frontend: { title: 'Frontend', emoji: '🎨' },
		backend: { title: 'Backend', emoji: '⚙️' },
		tools: { title: 'Tools & DevOps', emoji: '🛠️' }
	};
</script>

<section id="skills" class="py-24 bg-gradient-to-b from-white to-background">
	<div class="container mx-auto px-6">
		<div class="max-w-5xl mx-auto">
			<!-- Section header -->
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">
					Technologie & Skills
				</h2>
				<div class="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
				<p class="text-text-muted mt-6 text-lg">
					Technologie, se kterými pravidelně pracuji
				</p>
			</div>
			
			<!-- Skills grid -->
			<div class="space-y-12">
				{#each Object.entries(categories) as [key, { title, emoji }]}
					<div>
						<h3 class="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
							<span class="text-3xl">{emoji}</span>
							{title}
						</h3>
						
						<div class="flex flex-wrap gap-3">
							{#each skills.filter(s => s.category === key) as skill}
								<span 
									class="px-5 py-3 bg-white text-primary-dark rounded-xl font-medium 
									border-2 border-primary-100 hover:border-accent hover:scale-105 
									transition-all shadow-sm hover:shadow-md cursor-default"
								>
									{skill.name}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Additional info -->
			<div class="mt-16 p-8 bg-white rounded-2xl border-2 border-primary-100 text-center">
				<p class="text-text-secondary text-lg">
					✨ Neustále se učím nové věci a rozšiřuji svůj tech stack
				</p>
			</div>
		</div>
	</div>
</section>
