<script>
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import AiSection from '../components/AiSection.svelte';
	import CollaborateSection from '../components/CollaborateSection.svelte';
	import StorySection from '../components/StorySection.svelte';
	import SolutionSection from '../components/SolutionSection.svelte';
	import TryOutSection from '../components/TryOutSection.svelte';
</script>

<div class="flex w-full max-w-[2000px] flex-col items-center">
	<div class="flex w-full max-w-[2000px] flex-col items-center px-[20px] lg:px-[70px]">
		<div
			class="flex h-[700px] flex-col items-center overflow-hidden pt-[11px] md:h-full md:pt-[47px] lg:h-[1700px] lg:pt-[119px]"
		>
			<span
				class="w-[276px] text-center font-grotesque text-[40px] font-medium leading-none text-black sm:w-full md:w-full md:text-5xl md:leading-normal lg:text-7xl"
			>
				Stress Less, Care More.
			</span>
			<span
				class="text h-full w-4/5 pt-[28px] text-center font-sf-pro text-xl font-light leading-tight text-black md:w-[454px] md:pt-[5px] lg:w-[1060px] lg:pt-[13px] lg:text-[50px]"
			>
				Finally, a caregiving app that supports you as much as you support your loved ones.
			</span>
			<div
				class="mt-[160px] h-full w-full scale-[4] transform overflow-hidden md:mt-[280px] md:scale-[2.5] lg:mt-[63px]"
			>
				<DotLottieSvelte src="/animation/ai_voice_animation.lottie" loop autoplay />
			</div>
			<div class="relative h-full w-full">
				<img
					class="absolute -bottom-[13rem] h-[730.66px] w-full md:-bottom-[4rem] md:h-[565.76px] lg:h-[1268.08px]"
					src="/whiteFade.png"
					alt="Fade for styling"
				/>
			</div>
		</div>
		<CollaborateSection />
		<AiSection />
		<StorySection />
		<SolutionSection />
	</div>
	<TryOutSection />
</div>
