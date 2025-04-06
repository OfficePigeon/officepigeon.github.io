<script setup>
import TwitchLogoIcon from "@/components/icons/TwitchLogoIcon.vue";
import YouTubeLogoIcon from "@/components/icons/YouTubeLogoIcon.vue";
import TwitterLogoIcon from "@/components/icons/TwitterLogoIcon.vue";
import BlueskyLogoIcon from "@/components/icons/BlueskyLogoIcon.vue";
import TumblrLogoIcon from "@/components/icons/TumblrLogoIcon.vue";
import KofiLogoIcon from "@/components/icons/KofiLogoIcon.vue";
import EmailLogoIcon from "@/components/icons/EmailLogoIcon.vue";
</script>
<template>
	<TwitchLogoIcon class="social-icon hover-filtered" href="/twitch" aria-label="Twitch logo" title="Twitch"/>
	<YouTubeLogoIcon class="social-icon hover-filtered" href="/youtube" aria-label="YouTube play button logo" title="YouTube"/>
	<TwitterLogoIcon class="social-icon hover-filtered" href="/twitter" aria-label="Twitter logo" title="Twitter"/>
	<BlueskyLogoIcon class="social-icon hover-filtered" href="/bluesky" aria-label="Bluesky logo" title="Bluesky"/>
	<TumblrLogoIcon class="social-icon hover-filtered" href="/tumblr" aria-label="Tumblr t logo" title="Tumblr"/>
	<KofiLogoIcon class="social-icon hover-filtered" href="/ko-fi" aria-label="Ko-fi logo" title="Ko-fi"/>
	<EmailLogoIcon class="social-icon hover-filtered" href="mailto:girlboss@wich.fun" aria-label="Email icon" title="Email"/>
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