<script setup lang="ts">
import ControlButtons from './components/ControlButtons.ce.vue'
import ControlPane from './components/ControlPane.ce.vue'
import I18nHost from './components/I18nHost.ce.vue'
import LocalePicker from './components/LocalePicker.ce.vue'
import MetricsDisplay from './components/MetricsDisplay.ce.vue'
</script>

<template>
	<div class="flex justify-center">
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>

	<h1>{{ $t('hint') }}</h1>

	<h2>Vue Components:</h2>
	<I18nHost>
		<LocalePicker />
		<MetricsDisplay />
		<ControlButtons />
		<ControlPane />
	</I18nHost>

	<h2>Web Components:</h2>
	<i18n-host>
		<locale-picker></locale-picker>
		<metrics-display></metrics-display>
		<control-buttons></control-buttons>
		<control-pane></control-pane>
	</i18n-host>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
