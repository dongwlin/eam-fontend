<script setup lang="ts">
import { NLayout, NLayoutContent } from 'naive-ui'
import Menu from './menu/index.vue'
import Header from './header/index.vue'

</script>

<template>
  <n-layout has-sider>
    <Menu />
    <n-layout>
      <Header />
      <n-layout-content bordered content-class="p-6">
        <slot></slot>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>