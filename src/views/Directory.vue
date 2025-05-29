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
	<div class="sections">
		<div class="links">
			<h2> Links </h2>
			<RouterLink to="/twitch" title="Twitch"><TwitchLogoIcon class="link-icon" aria-label="Twitch logo"/> Twitch</RouterLink>
			<RouterLink to="/youtube" title="YouTube"><YouTubeLogoIcon class="link-icon" aria-label="YouTube play button logo"/> YouTube</RouterLink>
			<RouterLink to="/twitter" title="Twitter"><TwitterLogoIcon class="link-icon" aria-label="Twitter logo"/> Twitter</RouterLink>
			<RouterLink to="/bluesky" title="Bluesky"><BlueskyLogoIcon class="link-icon" aria-label="Bluesky logo"/> Bluesky</RouterLink>
			<RouterLink to="/tumblr" title="Tumblr"><TumblrLogoIcon class="link-icon" aria-label="Tumblr t logo"/> Tumblr</RouterLink>
			<RouterLink to="/vgen" title="VGen"><VGenLogoIcon class="link-icon" aria-label="VGen logo"/> VGen</RouterLink>
			<RouterLink to="/ko-fi" title="Ko-fi"><KofiLogoIcon class="link-icon" aria-label="Ko-fi logo"/> Ko-fi</RouterLink>
			<RouterLink to="/discord" title="Discord"><DiscordLogoIcon class="link-icon" aria-label="Discord logo"/> Discord</RouterLink>
			<RouterLink to="/github" title="GitHub"><GitHubLogoIcon class="link-icon" aria-label="GitHub logo"/> GitHub</RouterLink>
			<a href="mailto:girlboss@wich.fun" title="Email"><EmailLogoIcon class="link-icon filtered" aria-label="Email icon"/> Email</a>
		</div>
		<div class="links">
			<h2>On this Site</h2>
			<RouterLink to="/" title="Home"> Home </RouterLink>
			<RouterLink to="/commission" title="Commission"> Commissions </RouterLink>
			<h2>Utilities</h2>
			<RouterLink to="/discord-timestamps" title="Discord Timestamps"> Discord Timestamps </RouterLink>
		</div>
	</div>
</template>
<style scoped>
.sections {
	margin: auto;
	display: flex;
	width: max-content;
	flex-wrap: wrap;
}
.links {
	text-align: center;
	min-width: 300px;
	width: max-content;
	flex-direction: column;
}
.links a, .links h2 {
	margin: 6px;
	padding: 6px 18px 6px 6px;
}
.links h2 {
	height: 40px;
	line-height: 40px;
}
.links a {
	border: 2px solid;
	border-radius: 6px;
	border-color:var(--gray);
	background-color: var(--background-color-input);
	display: flex;
	text-decoration: none;
	cursor: pointer;
	height: 36px;
	line-height: 36px;
	font-size: 18px;
}
.links a svg {
	margin: 0 6px 0 0;
	width: 36px;
	height: 36px;
}
</style>