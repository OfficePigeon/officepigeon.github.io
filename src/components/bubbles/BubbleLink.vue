<script setup>
import LicenseIcon from "@/components/icons/LicenseIcon.vue";

defineProps([
	'title', 'titleTooltip',
	'subtitle', 'linkText',
	'linkUrl', 'earlySubtitle',
	'earlyLinkText', 'earlyLinkUrl',
	'licenseText', 'licenseUrl',
	'modified',
	'thumbnail', 'thumbnailAlt'
])
</script>
<template>
	<div class="bubbleLink" style="cursor:default">
		<img v-if="thumbnail" class="bubbleLinkIcon" :src="thumbnail" :alt="thumbnailAlt">
		<div class="bubbleCredit">
			<div class="bubbleCreditTitle tooltip">
				{{title}} <sup v-if="modified">*</sup>
				<span v-if="titleTooltip && titleTooltip.length > 0" class="tooltipText">{{titleTooltip}}</span>
			</div>
			<div class="bubbleCreditSubtitle">
				{{earlySubtitle}}
				<a v-if="earlyLinkText && earlyLinkText.length > 0" class="bubbleCreditLink" :href="earlyLinkUrl">{{earlyLinkText}}</a>
			</div>
			<div class="bubbleCreditSubtitle">
				{{subtitle}}
				<a v-if="linkText && linkText.length > 0" class="bubbleCreditLink" :href="linkUrl">{{linkText}}</a>
				<a class="tooltip bubbleCreditLicenseOuter" v-if="licenseText && licenseText.length > 0" :href="licenseUrl">
					<LicenseIcon class="bubbleCreditLicenseInner filtered"/>
					<span class="tooltipText">{{licenseText}}</span>
				</a>
			</div>
		</div>
	</div>
</template>