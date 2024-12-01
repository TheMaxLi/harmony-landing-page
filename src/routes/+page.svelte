<script>
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import AiSection from '../components/AiSection.svelte';
	import CollaborateSection from '../components/CollaborateSection.svelte';
</script>

<div class="w-full px-[20px] lg:px-[70px]">
	<div class="flex flex-col items-center pt-[11px] md:pt-[47px] lg:pt-[119px]">
		<span
			class="font-grotesque w-[276px] text-center text-[40px] font-medium leading-normal text-black sm:w-full md:w-full md:text-[50px] lg:text-[84px]"
		>
			Stress Less, Care More.
		</span>
		<span
			class="text font-sf-pro h-full w-4/5 text-center text-xl font-light leading-tight text-black md:w-[454px] lg:w-[1060px] lg:text-[50px]"
		>
			Finally, a caregiving app that supports you as much as you support your loved ones.
		</span>
		<div class="mt-[63px] h-full w-auto">
			<DotLottieSvelte src="/animation/ai_chat_animation.lottie" loop autoplay />
		</div>
		<div class="relative h-full w-full">
			<img
				class="absolute -bottom-40 h-[730.66px] w-full md:h-[565.76px] lg:h-[1268.08px]"
				src="/whiteFade.png"
				alt="Fade for styling"
			/>
		</div>
	</div>
	<CollaborateSection />
	<AiSection />
</div>
