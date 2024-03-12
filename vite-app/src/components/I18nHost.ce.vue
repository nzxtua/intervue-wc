<script setup lang="ts">
import { useCounter, useLanguage } from '@/composables'
import { i18nInit } from '@/i18n/i18nInit'
import { provide, watchEffect } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'

const language = useLanguage()
const counter = useCounter()

const i18n = i18nInit()

provide(I18nInjectionKey, i18n)
provide('language', language)
provide('counter', counter)

watchEffect(() => {
	i18n.global.locale.value = language.locale.value
})
</script>

<template>
	<div class="wrapper">
		<slot />
	</div>
</template>

<style scoped>
@import url('@/tailwind.css');
</style>
