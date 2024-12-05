<script>
	import NavHarmonyLogo from './icons/NavHarmonyLogo.svelte';
</script>

<div
	class="flex h-[480px] w-full items-center justify-between border-2 border-[#f2f2f2] bg-[#fcfcfc] px-4 py-12 md:px-8 lg:px-16"
>
	<div class="mx-auto w-full max-w-7xl">
		<div
			class="flex w-full flex-col items-start justify-between space-y-8 lg:flex-row lg:space-y-0"
		>
			<!-- Logo Section -->
			<div class="flex w-full flex-col items-start space-y-6 md:w-auto">
				<div class="flex items-center justify-center gap-4">
					<NavHarmonyLogo
						className="lg:w-[101px] lg:h-[76px] md:w-[68.63px] md:h-[51.01px] w-[43.11px] h-[32.04px]"
					/>
					<div class="font-sf-pro text-4xl font-medium text-[#1e1e1e] md:text-5xl lg:text-7xl">
						Harmony
					</div>
				</div>
				<div class="hidden items-center space-x-4 lg:flex">
					<img src="/googleplay.png" alt="get it on google play store" />
					<img src="/appstore.png" alt="Download on the apple app store" />
				</div>
			</div>

			<!-- Footer Links Section -->
			<div
				class="flex w-full flex-row justify-between space-x-8 lg:w-auto lg:justify-normal lg:space-x-[160px]"
			>
				<!-- Find Us At Column -->
				<div class="flex flex-col space-y-4">
					<div class="font-sf-pro text-2xl font-medium text-[#1e1e1e] md:text-3xl">Find us at</div>
					<div class="flex flex-col space-y-2">
						<a
							target="_blank"
							href="https://harmony-blog-next.vercel.app/"
							class="font-sf-pro text-base font-medium text-[#1e1e1e] hover:text-gray-600 md:text-xl"
							>Blog</a
						>
						<a
							target="_blank"
							href="https://www.instagram.com/the.harmony.app/"
							class="font-sf-pro text-base font-medium text-[#1e1e1e] hover:text-gray-600 md:text-xl"
							>Instagram</a
						>
					</div>
				</div>

				<!-- About Harmony Column -->
				<div class="flex flex-col space-y-4">
					<div class="font-sf-pro text-2xl font-medium text-[#1e1e1e] md:text-3xl">
						About Harmony
					</div>
					<div class="flex flex-col space-y-2">
						<a
							target="_blank"
							href="https://harmony-blog-next.vercel.app/about"
							class="font-sf-pro text-base font-medium text-[#1e1e1e] hover:text-gray-600 md:text-xl"
							>About</a
						>
						<a
							target="_blank"
							href="https://harmony-blog-next.vercel.app/team"
							class="font-sf-pro text-base font-medium text-[#1e1e1e] hover:text-gray-600 md:text-xl"
							>Contact Us</a
						>
						<!-- <a
							href="#"
							class="font-sf-pro text-base font-medium text-[#1e1e1e] hover:text-gray-600 md:text-xl"
							>Harmony AI</a
						> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
