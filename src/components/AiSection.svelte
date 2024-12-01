<script lang="ts">
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import ArrowRight from './icons/ArrowRight.svelte';
</script>

<div
	class="mt-[20px] flex h-[510px] w-full flex-col-reverse items-center justify-between rounded-xl bg-[#e4ddfa] md:h-[340.29px] md:flex-row lg:h-[622px]"
>
	<div
		class="flex h-full w-[264px] flex-col items-center justify-center gap-[6px] md:w-[270px] md:items-start md:gap-[9.5px] md:pl-[43px] lg:w-[676px] lg:gap-[24px] lg:pl-[109px]"
	>
		<span
			class="font-grotesque text-center text-[25.72px] font-medium leading-tight text-[#1e1e1e] md:text-start lg:text-[65px]"
		>
			<span
				class="font-grotesque text-[25.72px] font-medium leading-tight text-[#724bff] lg:text-[65px]"
			>
				Simplify
			</span>
			Your Day With Harmony AI.
		</span>
		<div
			class="font-sf-pro text-center text-sm font-light leading-tight text-black md:text-start md:text-xs md:leading-normal lg:text-[32px]"
		>
			Stay organized with AI-driven schedules and reminders, so you can focus on what matters most.
		</div>
		<div class="inline-flex h-[27px] items-center justify-center gap-[8.25px]">
			<div class="font-grotesque text-[18.86px] font-medium text-[#7859ea]">Explore Harmony AI</div>
			<ArrowRight
				className="w-[16px] h-[12px] md:w-[10.68px] md:h-[7.91px] lg:w-[27px] lg:h-[20px]"
			/>
		</div>
	</div>
	<div class="relative h-full max-h-[330px] w-auto md:max-h-full">
		<div class="h-full w-auto">
			<DotLottieSvelte src="/animation/ai_chat_animation.lottie" loop autoplay />
		</div>
	</div>
</div>
