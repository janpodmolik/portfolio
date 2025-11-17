<script lang="ts">
	import { t } from '$lib/i18n';
	import { Mail, Clock, CheckCircle } from 'lucide-svelte';
	import profileImage from '$lib/assets/me-and-tox.png';
</script>

<section id="contact" class="py-24 bg-background">
	<div class="container mx-auto px-4 max-w-6xl">
		<div class="text-center mb-16">
			<h2 class="text-4xl font-bold text-primary mb-4">{$t.contact.title}</h2>
			<p class="text-xl text-gray-600">{$t.contact.subtitle}</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Image Section -->
			<div class="flex justify-center">
				<div class="relative">
					<div class="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-2xl blur-lg opacity-30"></div>
					<img 
						src={profileImage} 
						alt="Jan Podmolík" 
						class="relative rounded-2xl w-full max-w-md object-cover shadow-2xl border-4 border-white"
					/>
				</div>
			</div>

			<!-- Contact Info Section -->
			<div class="space-y-8">
				<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
					<p class="text-lg text-gray-700 leading-relaxed mb-6">
						{$t.contact.description}
					</p>

					<a 
						href="mailto:{$t.contact.email}" 
						class="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
					>
						<Mail class="w-5 h-5" />
						{$t.contact.emailLabel}
					</a>
				</div>

				<div class="grid gap-4">
					<div class="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
						<div class="mt-1">
							<CheckCircle class="w-6 h-6 text-accent" />
						</div>
						<div>
							<p class="font-medium text-primary text-lg">{$t.contact.availability}</p>
						</div>
					</div>

					<div class="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
						<div class="mt-1">
							<Clock class="w-6 h-6 text-secondary" />
						</div>
						<div>
							<p class="text-gray-700">{$t.contact.responseTime}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
