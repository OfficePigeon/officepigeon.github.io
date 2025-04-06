import './assets/css/styles.css';

import { createApp } from 'vue'
import App from './App.vue';

import './assets/js/common.js';

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Commission from "@/views/Commission.vue";
import DiscordTimestamps from '@/views/DiscordTimestamps.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
	{ path: '/', component: Home },
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
	'/bluesky': 'https://bsky.app/profile/officepigeon.bsky.social',
	'/ko-fi': 'https://ko-fi.com/dovewich',
	'/tumblr': 'https://dovewich.tumblr.com/',
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
