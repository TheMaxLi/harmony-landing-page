<script lang="ts">
	import HarmonyLogo from './icons/HarmonyLogo.svelte';
	import { Hamburger } from 'svelte-hamburgers';

	let open: boolean = false;
</script>

<div
	class="inline-flex h-[110px] w-full items-center justify-between border-b-2 border-[#f2f2f2] bg-[#fcfcfc] px-[21px] lg:px-[70px]"
>
	<div class="relative flex items-center">
		<HarmonyLogo />
		<div class="top-0 hidden font-grotesque text-[39.22px] font-medium text-[#1e1e1e] md:block">
			Harmony
		</div>
	</div>

	<div class="flex h-[60px] items-center justify-between">
		<div class="flex items-center justify-start gap-[60px]">
			<a
				target="_blank"
				href="https://harmony-blog-next.vercel.app/about"
				class="hidden font-grotesque text-3xl font-medium text-[#1e1e1e] hover:text-gray-600 lg:block"
			>
				About
			</a>
			<a
				target="_blank"
				href="https://harmony-blog-next.vercel.app/"
				class="hidden font-grotesque text-3xl font-medium text-[#1e1e1e] hover:text-gray-600 lg:block"
			>
				Blog
			</a>
			<a
				class="text-center font-sf-pro text-2xl text-white"
				href="https://harmony-blog-next.vercel.app/"
			>
				<button
					class="hidden items-center justify-center rounded-[999px] bg-[#7859ea] px-6 py-3 hover:bg-[#8668f4] md:flex"
				>
					Download Now
				</button>
			</a>
			<div class="items-center justify-center md:hidden">
				<Hamburger bind:open />
			</div>
		</div>
	</div>
</div>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" on:click={() => (open = false)}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="absolute right-0 top-0 h-full w-[280px] bg-white shadow-lg"
			on:click|stopPropagation
		>
			<div class="h-[90%] p-6">
				<div class="mb-8 flex justify-end">
					<Hamburger bind:open />
				</div>
				<nav class="flex h-full flex-col justify-between">
					<div class="flex flex-col space-y-4">
						<a
							href="https://harmony-blog-next.vercel.app/about"
							target="_blank"
							class="font-grotesque text-2xl font-medium text-[#1e1e1e] hover:text-[#7859ea]"
						>
							About
						</a>
						<a
							href="https://harmony-blog-next.vercel.app/"
							target="_blank"
							class="font-grotesque text-2xl font-medium text-[#1e1e1e] hover:text-[#7859ea]"
						>
							Blog
						</a>
					</div>
					<a href="https://harmony-blog-next.vercel.app/" class="font-sf-pro text-2xl">
						<button
							class="w-full rounded-[999px] bg-[#7859ea] px-6 py-3 text-white hover:bg-[#8668f4]"
						>
							Download Now
						</button>
					</a>
				</nav>
			</div>
		</div>
	</div>
{/if}
