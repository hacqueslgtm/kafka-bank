<script setup lang="ts"></script>

<template>
  <div class="p-4">
    <h2 class="mb-6 text-2xl font-bold">{{ $t('首頁.現金') }}</h2>
    <h3 class="mb-6 text-xl font-bold">{{ $t('首頁.現金餘額') }}</h3>
    <h1 class="my-6 text-3xl font-bold">$1450</h1>
    <div class="my-2 my-4 grid grid-flow-col gap-4">
      <Button>{{ $t('首頁.查看帳號') }}</Button>
      <Button>{{ $t('首頁.提款') }}</Button>
    </div>
    <div>
      <!-- <BaseLink v-for="(item, index) in linkList" :key="index" :icon="item.icon" :title="item.title" :subtitle="item.subtitle" :path="item.path" /> -->
    </div>
  </div>
</template>

