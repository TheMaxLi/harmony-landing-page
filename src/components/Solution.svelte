<script lang="ts">
	export let icon: ConstructorOfATypedSvelteComponent;
	export let title: string;
	export let body: string;
	export let img: string;
	export let alt: string;
</script>

<div
	class="mx-auto flex w-full flex-col items-center justify-between space-y-6 rounded-xl bg-[#f0eefd] px-5 pt-5 md:px-8 md:pt-8"
>
	<div class="w-full space-y-4 text-left">
		<div class="w-full">
			<!-- Optional icon placeholder - remove if not needed -->
			<div class=" mb-2 h-[25px] w-6 md:mx-0">
				<svelte:component this={icon} />
			</div>

			<h2 class="font-grotesque mb-2 text-2xl font-medium text-[#1e1e1e]">{title}</h2>

			<p class="font-sf-pro text-base text-[#1e1e1e]/75">
				{body}
			</p>
		</div>
	</div>

	<div class="w-full max-w-sm">
		<img src={img} {alt} class="h-auto w-full rounded-lg object-contain" />
	</div>
</div>
