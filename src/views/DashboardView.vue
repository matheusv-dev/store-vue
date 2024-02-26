<template>
  <div class="flex flex-col gap-5 py-3 max-w-screen-x">
    <div class="flex gap-3 items-center">
      <v-icon name="ri-folder-chart-fill" scale="2" />
      <h1 class="text-2xl">Dashboard</h1>
    </div>
    <div class="flex">
      <div class="aspect-video w-full">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
      </div>
    </div>
  </div>
</template>
<script>
import { DashboardService } from '../service/DashboardService';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

</script>
