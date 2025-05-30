<script setup>
import GitHubLogoIcon from "@/components/icons/GitHubLogoIcon.vue";
import { ref } from "vue";

const modalVisible = ref(false);
const modalTitle = ref('');
const modalUrl = ref('')
const modalBody = ref('');

const closeModal = () => {
	modalVisible.value = false;
}
const showModal = (title, url, body) => {
	modalVisible.value = true;
	modalTitle.value = title;
	modalUrl.value = url;
	modalBody.value = body;
}
const showFetchedModal = async (title, url, bodyLink) => {
	const response = await fetch(bodyLink);
	let body = await response.text();
	if (body.includes('//# sourceMappingURL')) {
		body = body.split('//# sourceMappingURL')[0];
	}
	showModal(title, url, body.trim());
}
defineProps()
</script>

<template>
	<div class="modal-position" style="width:100%; height:100%; position:fixed;">
		<div class="modal" v-show="modalVisible" style="margin:auto;">
			<h1 class="modal-title">{{modalTitle}}</h1>
			<div class="modal-close" @click="closeModal">X</div>
			<a :href="modalUrl" class="modal-link" v-if="modalUrl.length > 0">
				<GitHubLogoIcon class="modal-github filtered" v-if="modalUrl.startsWith('https://github.com/')"/>
				<b class="modal-url">🔗</b>
			</a>
			<div class="modal-body">{{modalBody}}</div>
		</div>
	</div>
</template>

<style scoped>
.modal {
	margin: 32px;
	padding: 16px;
	border: 8px solid;
	border-color: var(--gray);
	border-radius: 16px;

	background-color: var(--background-color);

	min-width: 300px;
	max-width: 600px;

	position: relative;
}
.modal-close {
	position: absolute;
	top: 6px;
	right: 6px;
	font-size: 24px;
	border: 2px solid;
	border-color: var(--gray);
	height: 24px;
	width: 24px;
	line-height: 24px;
	border-radius: 16px;
	text-align: center;
	background-color: var(--background-color-input);
	cursor: pointer;
}
.modal-title {
	text-align: center;
	width: 100%;
	margin: 0;
}
.modal-link {
	display: flex;
	width: max-content;
	margin: auto;
	text-decoration: none;
}
.modal-github {
	margin: 0 6px 0 0;
	width: 14px;
	height: 14px;
}
.modal-url {
	float: left;
	display: block;
	font-size: 12px;
	line-height: 14px;
}
.modal-body {
	width: 100%;
	max-height: 300px;
	overflow: auto;
	white-space: pre-line;
}
</style>