<script>
	import Card from '../base/card.svelte';
	import Section from '../layout/section.svelte';
	import ProjectsGrid from '$lib/components/layout/projects-grid.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import OneByOneGrid from '$lib/components/layout/1x1-grid.svelte';
	import ExternalLinkIcon from '$lib/svg/external-link.svelte';
	import Github from '$lib/svg/socials/github.svelte';
	import Blobs from '../layout/blobs.svelte';
	import Image from '../base/image.svelte';
	import Tag from '../base/tag.svelte';
		
</script>


<section id="projects">
	<Section
		align="top"
		title="Projects"
		description="A project should be dynamic, creative and open source. That is why ZeroBytes."
	>
		<OneByOneGrid>
			<ProjectsGrid>
				<Card>
					<div slot="image">
						<Image path="projects" filename="denmune" alt="DenMune Clustering Algorithm" />
					</div>
					<div slot="content">
						<div class="title">
							DenMune Clustering Algorithm
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/egy1st/denmune-clustering-algorithm"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
							</div>
						</div>
						<div class="text">
							DenMune a clustering algorithm that can find clusters of arbitrary size, shapes and densities in 2-D.

							<a
								class="project-post-button button secondary-light transparent"
								href="/denmune-clustering-algorithm"
							>
								Read project post
							</a>
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Pattern Recognition</Tag>
							<Tag>Clustering</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="number2words" alt="Number 2 Words" />
					</div>
					<div slot="content">
						<div class="title">
							Number 2 Words
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/egy1st/Number2Words"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="/number2words"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Number2Words is an API that allows you to Convert any digits number to the equivalent words.
							for example (8543.21 in digits) will be (eight thousand, five hundred and forty-three $ and twenty-one ¢ in words).

							<a
								class="project-post-button button secondary-light transparent"
								href="/number2words"
							>
								Read project post
							</a>
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>PHP</Tag>
							<Tag>API</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="gestek" alt="Gestek" />
					</div>
					<div slot="content">
						<div class="title">
							Gestek
							<div class="links">
								<a
									class="text-secondary"
									href="https://gestek.com.br/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A web app for managing Beauty Clinics, supporting the entire day-to-day operation,
							with built-in CRM, ERP and beauty-clinic specific features. I worked on this project
							as the lead front-end developer for over a year.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Angular</Tag>
							<Tag>PWA</Tag>
						</div>
					</div>
				</Card>
			</ProjectsGrid>

			<ThreeByThreeGrid>
				<Card>
					<div slot="image">
						<Image path="projects" filename="moneta" alt="Moneta" />
					</div>
					<div slot="content">
						<div class="title">
							Moneta
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/matfantinel/moneta"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://appcenter.elementary.io/com.github.matfantinel.moneta/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A desktop applet that displays currency rates and updates during the day. Built for
							elementary OS.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vala</Tag>
							<Tag>GTK</Tag>
							<Tag>Desktop</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="reminduck" alt="Reminduck" />
					</div>
					<div slot="content">
						<div class="title">
							Reminduck
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/matfantinel/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://appcenter.elementary.io/com.github.matfantinel.reminduck/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A simple reminder app for elementary OS, and my first experience writing native
							desktop apps.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vala</Tag>
							<Tag>GTK</Tag>
							<Tag>Desktop</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>
			</ThreeByThreeGrid>
		</OneByOneGrid>
	</Section>
	<Blobs maxTop={5} minLeft={50} />
</section>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			a {
				width: 30px;
				height: 30px;
				padding: 3px;

				&:hover {
					color: var(--primary-color);
					fill: var(--primary-color);
				}
			}
		}
	}

	.project-post-button {
		width: fit-content;
		margin: 10px auto 0;
		font-weight: 500;
	}
</style>
