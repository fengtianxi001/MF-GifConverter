<template>
  <div class="layout-brand">
    <img class="layout-brand-logo" src="/images/favicon.png" alt="logo" />
    <div class="layout-brand-title">Gif-Converter</div>
  </div>
</template>
<style lang="scss" scoped>
.layout-brand {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 100%;
  .layout-brand-logo {
    width: 30px;
    height: 30px;
    margin-right: 4px;
  }
  .layout-brand-title {
    font-family: DincorosBlack;
    font-size: 24px;
    color: var(--color-neutral-8);
  }
}
</style>
