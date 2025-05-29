import './assets/css/styles.css';

import { createApp } from 'vue'
import App from './App.vue';

import './assets/js/common.js';

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Commission from "@/views/Commission.vue";
import DiscordTimestamps from '@/views/DiscordTimestamps.vue';
import NotFound from '@/views/NotFound.vue';
import Directory from "@/views/Directory.vue";

const routes = [
	{ path: '/', component: Home },
	{ path: '/directory', component: Directory },
	{ path: '/commission', component: Commission },
	{ path: '/discord-timestamps', component: DiscordTimestamps },
	//404 Page
	{ path: '/:pathMatch(.*)*', component: NotFound }
];
const router = createRouter({
	history: createWebHistory(),
	routes
});
const redirects = {
	'/bluesky': 'https://bsky.app/profile/OfficePigeon.bsky.social',
	'/discord': 'https://discord.com/invite/jB9exg6anW',
	'/github': 'https://github.com/OfficePigeon',
	'/vgen': 'https://vgen.co/OfficePigeon',
	'/ko-fi': 'https://ko-fi.com/OfficePigeon',
	'/tumblr': 'https://OfficePigeon.tumblr.com/',
	'/twitch': 'https://twitch.tv/dovewich',
	'/x': 'https://x.com/OfficePigeon',
	'/twitter': 'https://twitter.com/OfficePigeon',
	'/youtube': 'https://youtube.com/@OfficePigeon',
}
router.beforeEach((to, from) => {
	const redirect = redirects[to.path];
	if (redirect) window.location.href = redirect;
})

createApp(App)
	.use(router)
	.mount('#app');
