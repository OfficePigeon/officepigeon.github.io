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
	<div id="site-footer">
		<div class="footerIcons">
			<RouterLink to="/twitch" title="Twitch" class="tooltip"><TwitchLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">Twitch</span></RouterLink>
			<RouterLink to="/youtube" title="YouTube" class="tooltip"><YouTubeLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">YouTube</span></RouterLink>
			<RouterLink to="/twitter" title="Twitter" class="tooltip"><TwitterLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">Twitter</span></RouterLink>
			<RouterLink to="/bluesky" title="Bluesky" class="tooltip"><BlueskyLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">Bluesky</span></RouterLink>
			<RouterLink to="/tumblr" title="Tumblr" class="tooltip"><TumblrLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">Tumblr</span></RouterLink>
			<RouterLink to="/vgen" title="VGen" class="tooltip"><VGenLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">VGen</span></RouterLink>
			<RouterLink to="/ko-fi" title="Ko-fi" class="tooltip"><KofiLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">Ko-fi</span></RouterLink>
			<RouterLink to="/discord" title="Discord" class="tooltip"><DiscordLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">Discord Server</span></RouterLink>
			<RouterLink to="/github" title="GitHub" class="tooltip"><GitHubLogoIcon class="social-icon filtered"/><span class="tooltipText">GitHub</span></RouterLink>
			<a href="mailto:girlboss@wich.fun" title="Email" class="tooltip"><EmailLogoIcon class="social-icon hover-filtered"/><span class="tooltipText">Email</span></a>
		</div>
		<p class="copyright">Copyright &copy{{ new Date().getFullYear().toString() }} dovewich</p>
	</div>
</template>
<style scoped>
.footerIcons {
	display: flex;
	margin: auto;
	flex-wrap: wrap;
	justify-content: center;
}
.tooltip .tooltipText {
	bottom: 48px;
}
.social-icon {
	text-decoration: none;
	cursor: pointer;
	margin: 0 5px;
	height: 36px;
	width: 36px;
}
</style>