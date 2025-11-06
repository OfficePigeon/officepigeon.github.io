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
import Attributions from "@/views/Attributions.vue";
import Portfolio from "@/views/Portfolio.vue";
import Mods from "@/views/Mods.vue";

const routes = [
	{ path: '/', component: Home, meta: { title: 'Home - wich.fun' }  },
	{ path: '/attributions', component: Attributions, meta: { title: 'Attributions - wich.fun' } },
	{ path: '/commission', component: Commission, meta: { title: 'Comissions - wich.fun' } },
	{ path: '/mods', component: Mods, meta: { title: 'Mods - wich.fun' } },
	{ path: '/portfolio/aidan-buffum', component: Portfolio, meta: { title: 'Portfolio - Aidan Buffum' } },
	{ path: '/directory', component: Directory, meta: { title: 'Directory - wich.fun' } },
	{ path: '/discord-timestamps', component: DiscordTimestamps, meta: { title: 'Discord Timestamps - wich.fun' } },
	//404 Page
	{ path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Not Found - wich.fun' } }
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
	//Apply titles in the router's meta object
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
	if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
})

createApp(App)
	.use(router)
	.mount('#app');
