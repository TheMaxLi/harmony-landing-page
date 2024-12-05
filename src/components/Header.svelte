<script lang="ts">
	import HarmonyLogo from './icons/HarmonyLogo.svelte';
	import MenuIcon from './icons/MenuIcon.svelte';
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
				target="_blank"
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
				<MenuIcon />
			</div>
		</div>
	</div>
</div>
