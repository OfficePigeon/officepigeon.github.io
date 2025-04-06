<script setup>
import TwitchLogoIcon from "@/components/icons/TwitchLogoIcon.vue";
import YouTubeLogoIcon from "@/components/icons/YouTubeLogoIcon.vue";
import TwitterLogoIcon from "@/components/icons/TwitterLogoIcon.vue";
import BlueskyLogoIcon from "@/components/icons/BlueskyLogoIcon.vue";
import TumblrLogoIcon from "@/components/icons/TumblrLogoIcon.vue";
import KofiLogoIcon from "@/components/icons/KofiLogoIcon.vue";
import GitHubLogoIcon from "@/components/icons/GitHubLogoIcon.vue";
import EmailLogoIcon from "@/components/icons/EmailLogoIcon.vue";
</script>
<template>
	<a href="/twitch" title="Twitch"><TwitchLogoIcon class="social-icon hover-filtered" aria-label="Twitch logo"/></a>
	<a href="/youtube" title="YouTube"><YouTubeLogoIcon class="social-icon hover-filtered" aria-label="YouTube play button logo"/></a>
	<a href="/twitter" title="Twitter"><TwitterLogoIcon class="social-icon hover-filtered" aria-label="Twitter logo"/></a>
	<a href="/bluesky" title="Bluesky"><BlueskyLogoIcon class="social-icon hover-filtered" aria-label="Bluesky logo"/></a>
	<a href="/tumblr" title="Tumblr"><TumblrLogoIcon class="social-icon hover-filtered" aria-label="Tumblr t logo"/></a>
	<a href="/ko-fi" title="Ko-fi"><KofiLogoIcon class="social-icon hover-filtered" aria-label="Ko-fi logo"/></a>
	<a href="/github" title="GitHub"><GitHubLogoIcon class="social-icon filtered" aria-label="GitHub logo"/></a>
	<a href="mailto:girlboss@wich.fun" title="Email"><EmailLogoIcon class="social-icon hover-filtered" aria-label="Email icon"/></a>
	<p class="copyright">Copyright &copy{{ new Date().getFullYear().toString() }} dovewich</p>
</template>
<style scoped>
.social-icon {
	text-decoration:none;
	cursor:pointer;
	margin: 0 5px;
	height:24px;
	width:24px;
}
.social-icon, .social-icon img {
	height:36px;
	width:36px;
}
</style>