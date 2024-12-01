<script>
	import CalendarIcon from './icons/CalendarIcon.svelte';
	import JournalIcon from './icons/JournalIcon.svelte';
	import MedicationIcon from './icons/MedicationIcon.svelte';
	import Solution from './Solution.svelte';
</script>

<div class="w-full py-12">
	<div class="mx-auto">
		<div class="flex flex-col space-y-8">
			<!-- Heading Section -->
			<div class="w-full space-y-4">
				<h1
					class="font-grotesque text-center text-4xl font-medium leading-tight text-[#1e1e1e] md:text-left md:text-5xl lg:text-7xl"
				>
					Empowering Care Through Smart Solutions.
				</h1>
				<p
					class="font-sf-pro text-center text-xl font-light text-black/50 md:text-left md:text-2xl"
				>
					Discover the tools that make caregiving simpler, more organized, and stressed-free.
				</p>
			</div>
			<div class="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
				<!-- Stories Section -->
				<Solution
					icon={CalendarIcon}
					title="Shared Calendar"
					body="Bring your caregiving team together with a calendar that keeps everyone in sync."
					img="/calendarMockup.png"
					alt="Calendar Illustration"
				/>
				<Solution
					icon={MedicationIcon}
					title="Medication Management"
					body="Get timely reminders for medications and refills to ensure peace of mind."
					img="/medicationReminder.png"
					alt="Medication Notification Illustration"
				/>
				<Solution
					icon={JournalIcon}
					title="Journal Entries"
					body="Track progress and document important milestones as you navigate your caregiving journey"
					img="/sleepMockup.png"
					alt="Journal Entries Illustration"
				/>
			</div>
		</div>
	</div>
</div>
