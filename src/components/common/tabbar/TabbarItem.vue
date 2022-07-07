<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="nameStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>
<script>
</script>
