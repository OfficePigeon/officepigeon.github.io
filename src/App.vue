<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
</script>

<template>
	<header><site-header/></header>
  <main><RouterView/></main>
	<footer><site-footer/></footer>
</template>
