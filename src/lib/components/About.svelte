<script lang="ts">
	import { Code2, Sparkles, Rocket } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<section id="about" class="py-24 bg-white">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<!-- Section header -->
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-primary mb-4">
					{$t.about.title}
				</h2>
				<div class="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
			</div>
			
			<!-- Content -->
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<!-- Card 1 -->
				<div class="bg-background p-8 rounded-2xl border-2 border-primary-100 hover:border-accent transition-all hover:shadow-lg">
					<div class="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-4">
						<Code2 class="text-white" size={24} />
					</div>
					<h3 class="text-xl font-bold text-primary mb-3">{$t.about.cleanCode.title}</h3>
					<p class="text-text-muted leading-relaxed">
						{$t.about.cleanCode.description}
					</p>
				</div>
				
				<!-- Card 2 -->
				<div class="bg-background p-8 rounded-2xl border-2 border-primary-100 hover:border-secondary transition-all hover:shadow-lg">
					<div class="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-xl flex items-center justify-center mb-4">
						<Sparkles class="text-primary" size={24} />
					</div>
					<h3 class="text-xl font-bold text-primary mb-3">{$t.about.modernDesign.title}</h3>
					<p class="text-text-muted leading-relaxed">
						{$t.about.modernDesign.description}
					</p>
				</div>
				
				<!-- Card 3 -->
				<div class="bg-background p-8 rounded-2xl border-2 border-primary-100 hover:border-primary transition-all hover:shadow-lg">
					<div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4">
						<Rocket class="text-white" size={24} />
					</div>
					<h3 class="text-xl font-bold text-primary mb-3">{$t.about.fastDevelopment.title}</h3>
					<p class="text-text-muted leading-relaxed">
						{$t.about.fastDevelopment.description}
					</p>
				</div>
			</div>
			
			<!-- Bio -->
			<div class="bg-gradient-to-br from-primary-50 to-background p-8 md:p-12 rounded-2xl border border-primary-100">
				<p class="text-lg text-text-secondary leading-relaxed mb-6">
					{$t.about.bio1}
				</p>
				<p class="text-lg text-text-secondary leading-relaxed">
					{$t.about.bio2}
				</p>
			</div>
		</div>
	</div>
</section>
