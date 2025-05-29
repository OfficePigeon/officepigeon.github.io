<script setup>
import BlueskyLogoIcon from "@/components/icons/BlueskyLogoIcon.vue";
import DiscordLogoIcon from "@/components/icons/DiscordLogoIcon.vue";
import EmailLogoIcon from "@/components/icons/EmailLogoIcon.vue";
import GitHubLogoIcon from "@/components/icons/GitHubLogoIcon.vue";
import KofiLogoIcon from "@/components/icons/KofiLogoIcon.vue";
import TumblrLogoIcon from "@/components/icons/TumblrLogoIcon.vue";
import TwitchLogoIcon from "@/components/icons/TwitchLogoIcon.vue";
import TwitterLogoIcon from "@/components/icons/TwitterLogoIcon.vue";
import YouTubeLogoIcon from "@/components/icons/YouTubeLogoIcon.vue";
import VGenLogoIcon from "@/components/icons/VGenLogoIcon.vue";
</script>
<template>
	<RouterLink to="/twitch" title="Twitch"><TwitchLogoIcon class="social-icon hover-filtered" aria-label="Twitch logo"/></RouterLink>
	<RouterLink to="/youtube" title="YouTube"><YouTubeLogoIcon class="social-icon hover-filtered" aria-label="YouTube play button logo"/></RouterLink>
	<RouterLink to="/twitter" title="Twitter"><TwitterLogoIcon class="social-icon hover-filtered" aria-label="Twitter logo"/></RouterLink>
	<RouterLink to="/bluesky" title="Bluesky"><BlueskyLogoIcon class="social-icon hover-filtered" aria-label="Bluesky logo"/></RouterLink>
	<RouterLink to="/tumblr" title="Tumblr"><TumblrLogoIcon class="social-icon hover-filtered" aria-label="Tumblr t logo"/></RouterLink>
	<RouterLink to="/vgen" title="VGen"><VGenLogoIcon class="social-icon hover-filtered" aria-label="VGen logo"/></RouterLink>
	<RouterLink to="/ko-fi" title="Ko-fi"><KofiLogoIcon class="social-icon hover-filtered" aria-label="Ko-fi logo"/></RouterLink>
	<RouterLink to="/discord" title="Discord"><DiscordLogoIcon class="social-icon hover-filtered" aria-label="Discord logo"/></RouterLink>
	<RouterLink to="/github" title="GitHub"><GitHubLogoIcon class="social-icon filtered" aria-label="GitHub logo"/></RouterLink>
	<a href="mailto:girlboss@wich.fun" title="Email"><EmailLogoIcon class="social-icon hover-filtered" aria-label="Email icon"/></a>
	<p class="copyright">Copyright &copy{{ new Date().getFullYear().toString() }} dovewich</p>
</template>
<style scoped>
.social-icon {
	text-decoration: none;
	cursor: pointer;
	margin: 0 5px;
	height: 36px;
	width: 36px;
}
</style>