<script setup>
import { useTemplateRef, onUpdated, onMounted } from "vue";
import CopyIcon from "@/components/icons/CopyIcon.vue";
const dateInput = useTemplateRef('TimestampDate');
const timeInput = useTemplateRef('TimestampTime');
const typeInput = useTemplateRef('TimestampType');
const timestampOutput = useTemplateRef('TimestampOutput');
const timestampPreview = useTemplateRef('TimestampPreview');
function UpdateDateTime() {
	const selectedDate = new Date(dateInput.value.valueAsNumber + timeInput.value.valueAsNumber + new Date(dateInput.value.valueAsNumber + timeInput.value.valueAsNumber).getTimezoneOffset() * 60000);
	const ts = selectedDate.getTime().toString();
	timestampOutput.value.value = `<t:${ts.substring(0, ts.length - 3)}:${typeInput.value.value}>`;
	timestampOutput.value.size = timestampOutput.value.value.length;
	const formats = {
		't': { timeStyle: 'short' },
		'T': { timeStyle: 'medium' },
		'd': { dateStyle: 'short' },
		'D': { dateStyle: 'long' },
		'f': { dateStyle: 'long', timeStyle: 'short' },
		'F': { dateStyle: 'full', timeStyle: 'short' },
		'R': { style: 'long', numeric: 'auto' },
	};
	if (typeInput.value.value === 'R') {
		let format;
		const difference = -((new Date().getTime() - selectedDate.getTime()) / 1000) | 0;
		const absDiff = Math.abs(difference);
		if (absDiff > 25920000) format = { duration: Math.round(difference / 31536000), unit: 'years' };
		else if (absDiff > 2160000) format = { duration: Math.round(difference / 2592000), unit: 'months' };
		else if (absDiff > 75600) format = { duration: Math.round(difference / 86400), unit: 'days' };
		else if (absDiff > 2640) format = { duration: Math.round(difference / 3600), unit: 'hours' };
		else if (absDiff > 30) format = { duration: Math.round(difference / 60), unit: 'minutes' };
		else format = { duration: difference, unit: 'seconds' };
		timestampPreview.value.textContent = new Intl.RelativeTimeFormat(navigator.language || 'en', formats[typeInput.value.value] || {}).format(format.duration, format.unit);
	}
	else timestampPreview.value.textContent = new Intl.DateTimeFormat(navigator.language || 'en', formats[typeInput.value.value] || {}).format(selectedDate);
}
function ResetDateTime() {
	const now = new Date();
	dateInput.value.value = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
	timeInput.value.value = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
	UpdateDateTime();
}
function CopyToClipboard() {
	UpdateDateTime();
	navigator.clipboard.writeText(timestampOutput.value.value);
}
onMounted(ResetDateTime)
onUpdated(ResetDateTime)
</script>
<template>
	<div style="text-align:center" v-on:load="onMounted">
		<h1>Discord Timestamps</h1>
		<p style="font-size:8pt">(for when you don't want to search for "discord timestamps")</p>
		<div>
			<label for="TimestampDate"> Date </label>
			<input type="date" ref="TimestampDate" @change="UpdateDateTime()"/>
			<label for="TimestampTime"> Time </label>
			<input type="time" ref="TimestampTime" @change="UpdateDateTime()"/>
		</div>
		<div>
			<label for="TimestampType"> Format </label>
			<select ref="TimestampType" @change="UpdateDateTime()">
				<option value="t">Time</option>
				<option value="T">Time with Seconds</option>
				<option value="d">Short Date</option>
				<option value="D">Long Date</option>
				<option value="f" selected>Date and Time</option>
				<option value="F">Long Date and Time</option>
				<option value="R">Relative</option>
			</select> <button title="Reset Timestamp" @click="ResetDateTime()">Reset</button>
		</div>
		<div>
			<label for="TimestampOutput"> Output </label>
			<input type="text" value="" ref="TimestampOutput" disabled size="16"/> <button title="Copy to Clipboard" @click="CopyToClipboard()">
				<CopyIcon class="filtered" style="height:12px;width:12px"/>
			</button>
		</div>
		<div>
			<span ref="TimestampPreview"></span>
		</div>
	</div>
</template>