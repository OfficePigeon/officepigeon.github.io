<script setup>
import TwitchLogoIcon from "@/components/icons/TwitchLogoIcon.vue";
import YouTubeLogoIcon from "@/components/icons/YouTubeLogoIcon.vue";
import TwitterLogoIcon from "@/components/icons/TwitterLogoIcon.vue";
import BlueskyLogoIcon from "@/components/icons/BlueskyLogoIcon.vue";
import EmailLogoIcon from "@/components/icons/EmailLogoIcon.vue";
import KofiLogoIcon from "@/components/icons/KofiLogoIcon.vue";
import GitHubLogoIcon from "@/components/icons/GitHubLogoIcon.vue";
import TumblrLogoIcon from "@/components/icons/TumblrLogoIcon.vue";
import DiscordLogoIcon from "@/components/icons/DiscordLogoIcon.vue";
import VGenLogoIcon from "@/components/icons/VGenLogoIcon.vue";
</script>

<template>
	<h1>Directory</h1>
	<div class="bubbleSections">
		<div class="bubbleLinks">
			<h2 class="bubbleHeader">Links</h2>
			<RouterLink class="bubbleLink" to="/twitch" title="Twitch"><TwitchLogoIcon class="bubbleLinkIcon"/> Twitch</RouterLink>
			<RouterLink class="bubbleLink" to="/youtube" title="YouTube"><YouTubeLogoIcon class="bubbleLinkIcon"/> YouTube</RouterLink>
			<RouterLink class="bubbleLink" to="/twitter" title="Twitter"><TwitterLogoIcon class="bubbleLinkIcon"/> Twitter</RouterLink>
			<RouterLink class="bubbleLink" to="/bluesky" title="Bluesky"><BlueskyLogoIcon class="bubbleLinkIcon"/> Bluesky</RouterLink>
			<RouterLink class="bubbleLink" to="/tumblr" title="Tumblr"><TumblrLogoIcon class="bubbleLinkIcon"/> Tumblr</RouterLink>
			<RouterLink class="bubbleLink" to="/vgen" title="VGen"><VGenLogoIcon class="bubbleLinkIcon"/> VGen</RouterLink>
			<RouterLink class="bubbleLink" to="/ko-fi" title="Ko-fi"><KofiLogoIcon class="bubbleLinkIcon"/> Ko-fi</RouterLink>
			<RouterLink class="bubbleLink" to="/discord" title="Discord"><DiscordLogoIcon class="bubbleLinkIcon"/> Discord</RouterLink>
			<RouterLink class="bubbleLink" to="/github" title="GitHub"><GitHubLogoIcon class="bubbleLinkIcon"/> GitHub</RouterLink>
			<a class="bubbleLink" href="mailto:girlboss@wich.fun" title="Email"><EmailLogoIcon class="bubbleLinkIcon filtered"/> Email</a>
		</div>
		<div class="bubbleLinks">
			<h2 class="bubbleHeader">On this Site</h2>
			<RouterLink class="bubbleLink" to="/" title="Home"><span class="centered">Home</span></RouterLink>
			<RouterLink class="bubbleLink" to="/commission" title="Commission"><span class="centered">Commissions</span></RouterLink>
			<h2 class="bubbleHeader">Utilities</h2>
			<RouterLink class="bubbleLink" to="/discord-timestamps" title="Discord Timestamps"><span class="centered">Discord Timestamps</span></RouterLink>
			<h2 class="bubbleHeader">Legal</h2>
			<RouterLink class="bubbleLink" to="/attributions" title="Discord Timestamps"><span class="centered">Software & Attributions</span></RouterLink>
		</div>
	</div>
</template>
<style scoped>
.centered {
	width: 100%;
	text-align: center;
}
</style>