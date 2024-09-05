<script setup lang="ts">
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, DatasetComponent, TransformComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { ref, onMounted } from 'vue'

echarts.use([LineChart, GridComponent, DatasetComponent, TransformComponent, CanvasRenderer])

const chartDom = ref<HTMLElement>()
const useLineChart = (element: HTMLElement) => {
  console.log(element)
  const chart = echarts.init(element)
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ],
    color: ['#637587']
  }
  chart.setOption(option)
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        useLineChart(chartDom.value)
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 }
)

onMounted(() => {
  const element = document.querySelector('.spending-title')
  if (element) observer.observe(element)
})
</script>

<template>
  <div class="p-4">
    <h2 class="spending-title mb-8 text-2xl font-bold">{{ $t('首頁.消費趨勢') }}</h2>
    <h3 class="mb-2">{{ $t('首頁.花費') }}</h3>
    <h1 class="my-4 text-3xl font-bold">-$1257.32</h1>
    <p class="font-normal text-bank-gray-800">{{ $t('首頁.最近30天') }}<span class="m-2 text-bank-green-300">+30%</span></p>
    <div class="h-96 w-full">
      <div ref="chartDom" class="h-full w-full"></div>
    </div>
  </div>
</template>

