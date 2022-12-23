<template>
  <!-- 展示外部图标 -->
  <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      :class="className">

  </div>

  <!-- 展示内部图标 -->
  <!-- todo ??? -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>

</template>

<script setup>
import {computed, defineProps} from 'vue'
import {isExternal} from "../../utils/validate.js";
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

// 判断当前图标是否为外部图标
const isExternal = computed(() => isExternal(props.icon))

// 外部图标样式
// todo ???
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

// 内部图标样式
const iconName = computed(() => `#icon-${props.icon}`)

</script>

<style scoped>

</style>