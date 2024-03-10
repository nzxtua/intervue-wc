<script setup lang="ts">
import type { TUseCounter } from '@/composables'
import { Ti18n } from '@/i18n/i18nInit'
import { inject } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'

const { t } = inject<Ti18n>(I18nInjectionKey)!.global

const { count } = inject<TUseCounter>('counter')!
</script>

<template>
	<div class="card">
		<h3>{{ t('metricsDisplay.title') }}</h3>

		<h2>
			{{ t('metricsDisplay.count') }}:
			<strong id="counter-value">{{ count }}</strong>
		</h2>
	</div>
</template>

<style scoped>
@import url('@/tilewind.css');
</style>
