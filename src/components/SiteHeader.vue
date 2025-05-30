<script setup>
import { useTemplateRef } from "vue";
import SunIcon from "@/components/icons/SunIcon.vue";
import MoonIcon from "@/components/icons/MoonIcon.vue";
//Fancy Display
const storedThemeFancy = localStorage.getItem('theme-fancy') || "fancy";
if (storedThemeFancy) document.documentElement.setAttribute("data-theme-fancy", storedThemeFancy);
//Dark Mode
const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);
function ToggleFancy() {
	ToggleMode("data-theme-fancy", "theme-fancy", "fancy", "simple");
}
function ToggleDarkMode() {
	ToggleMode("data-theme", "theme", "light", "dark");
}
function ToggleMode(target, localTarget, on, off) {
	let targetTheme = on;
	if (document.documentElement.getAttribute(target) === on) targetTheme = off;
	document.documentElement.setAttribute(target, targetTheme)
	localStorage.setItem(localTarget, targetTheme);
}
const navigationDropdown = useTemplateRef('NavigationDropdown');
function ToggleNavDropdown() { ToggleHideShow(navigationDropdown.value); }
function HideNavDropdown() { ToggleHide(navigationDropdown.value); }
function ToggleHideShow(x) {
	if (x.className.indexOf(" navShow") === -1) ToggleShow(x);
	else ToggleHide(x);
}
function ToggleShow(x) { x.className += " navShow"; }
function ToggleHide(x) { x.className = x.className.replace(" navShow", ""); }
</script>
<template>
	<div class="navBar">
		<div class="navToggle navButton" @click="ToggleNavDropdown()" title="Toggle Navigation Menu">≡</div>
		<button id="darkModeToggle" class="navToggle navButton" type="button" @click="ToggleDarkMode()">
			<span class="display-light display-none"> <MoonIcon class="filtered" aria-label="Toggle Dark Mode" title="Toggle Dark Mode"/></span>
			<span class="display-dark display-none"> <SunIcon class="filtered" aria-label="Toggle Light Mode" title="Toggle Light Mode"/> </span>
		</button>
		<RouterLink to="/" @click="HideNavDropdown()" title="Home" class="navButton">Home</RouterLink>
		<RouterLink to="/commission" @click="HideNavDropdown()" title="Commissions" class="navButton">Commissions</RouterLink>
		<RouterLink to="/directory" @click="HideNavDropdown()" title="Directory" class="navButton">Site Directory</RouterLink>
	</div>
	<!-- Navbar Dropdown -->
	<div ref="NavigationDropdown" class="navDropdown">
		<RouterLink to="/commission" @click="HideNavDropdown()" title="Commissions" class="navButton">Commissions</RouterLink>
		<RouterLink to="/directory" @click="HideNavDropdown()" title="Directory" class="navButton">Site Directory</RouterLink>
		<div class="navSeparator">----------- Fun -----------</div>
		<RouterLink to="/discord-timestamps" @click="HideNavDropdown()" title="Discord Timestamps" class="navButton">Discord Timestamps</RouterLink>
	</div>
</template>
<style scoped>
.navShow { display:flex!important; }
.navBar, .navDropdown, .navButton, .navSeparator {
	display:block;
	font-size:18pt;
	text-decoration:none;
	border:none;
	white-space:normal;
	outline:0;
	background-color:var(--background-color-header);
}
.navBar {
	text-align:left;
	width:100%;
	overflow:hidden;
}
.navButton {
	cursor:pointer;
	padding:12px 24px;
	float:left;
	width:auto;
}
.navButton:hover {
	background-color:var(--gray);
}
.navSeparator {
	font-size:12pt;
	padding:6px 24px;
}
.navDropdown {
	display:none;
	flex-direction: column;
	width:max-content;
	float:right;
	padding-right:24px;
}
.navDropdown .navButton, .navDropdown .navSeparator {
	width:100%;
	text-align:center;
	float:right;
	padding-left:12px;
	padding-right:12px;
}
.navToggle {
	float:right!important;
}
</style>