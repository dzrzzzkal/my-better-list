<template>
  <div class="tabbar-line">
    <slot></slot>
  </div>
</template>
<style scoped>
.tabbar-line {
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
}
.tabbar-line::before {
  content: '';
  height: 1px;
  display: block;
  transform: scaleY(0.5);
  background: gray;
}
</style>
