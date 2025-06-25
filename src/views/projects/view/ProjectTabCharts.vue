<script setup>
import ApexChart from 'vue3-apexcharts'

/* Green Score Over Time */
const greenScoreOptions = {
  chart: { type: 'line', toolbar: { show: false } },
  stroke: { curve: 'smooth' },
  xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
  yaxis: { title: { text: 'Green Score (%)' }, min: 60, max: 100 },
  colors: ['#28C76F'],
}
const greenScoreSeries = [{ name: 'Green Score', data: [72, 81, 85, 78, 88] }]

/* Power Usage per Endpoint */
const powerUsageOptions = {
  chart: { type: 'bar', toolbar: { show: false } },
  xaxis: { categories: ['GET /users', 'POST /login', 'PUT /settings', 'DELETE /user'] },
  yaxis: { title: { text: 'Power (mW)' }, min: 0, max: 500 },
  colors: ['#00CFE8'],
}
const powerUsageSeries = [{ name: 'Power Usage', data: [290, 260, 310, 275] }]

/* CPU vs RAM Scatter */
const cpuRamOptions = {
  chart: { type: 'scatter', zoom: { enabled: false }, toolbar: { show: false } },
  xaxis: { title: { text: 'CPU (%)' }, min: 0, max: 40 },
  yaxis: { title: { text: 'RAM (MB)' }, min: 50, max: 200 },
  colors: ['#7367F0'],
}
const cpuRamSeries = [{
  name: 'Requests',
  data: [[12, 110], [18, 130], [9, 95], [22, 160], [15, 125]],
}]

/* Branch Comparison: Power, CPU, Resp Time */
const branchComparisonOptions = {
  chart: { type: 'bar', stacked: false, toolbar: { show: false } },
  xaxis: { categories: ['Power (mW)', 'CPU (%)', 'Resp Time (ms)'] },
  yaxis: { title: { text: 'Value' } },
  colors: ['#7367F0', '#28C76F'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '45%',
    },
  },
  legend: {
    position: 'top',
  },
}
const branchComparisonSeries = [
  {
    name: 'main',
    data: [275, 14.8, 155],
  },
  {
    name: 'dev',
    data: [310, 18.2, 173],
  },
]

/* Commit Comparison for GET /api/users */
const commitComparisonOptions = {
  chart: { type: 'line', toolbar: { show: false } },
  stroke: { curve: 'smooth' },
  xaxis: {
    categories: ['c1a9a3d', '7f3bd21', 'a7f1b44', 'e5c12da', 'f34c9a2'],
    title: { text: 'Commit' },
  },
  yaxis: {
    title: { text: 'Metric Value' },
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  colors: ['#28C76F', '#00CFE8', '#FF9F43'],
  legend: {
    position: 'top',
  },
}
const commitComparisonSeries = [
  {
    name: 'Power (mW)',
    data: [278, 292, 310, 288, 274],
  },
  {
    name: 'CPU (%)',
    data: [13.5, 15.2, 18.1, 16.3, 14.7],
  },
  {
    name: 'Response Time (ms)',
    data: [142, 158, 173, 160, 149],
  },
]

const commitComparisons = [
  {
    commit: 'c1a9a3d',
    message: 'Initial endpoint implementation',
    cpu: 13.5,
    ram: 112,
    power: 278,
    responseTime: 142,
  },
  {
    commit: '7f3bd21',
    message: 'Added logging',
    cpu: 15.2,
    ram: 120,
    power: 292,
    responseTime: 158,
  },
  {
    commit: 'a7f1b44',
    message: 'Validation middleware added',
    cpu: 18.1,
    ram: 135,
    power: 310,
    responseTime: 173,
  },
  {
    commit: 'e5c12da',
    message: 'Optimized DB query',
    cpu: 16.3,
    ram: 125,
    power: 288,
    responseTime: 160,
  },
  {
    commit: 'f34c9a2',
    message: 'Cache introduced',
    cpu: 14.7,
    ram: 118,
    power: 274,
    responseTime: 149,
  },
]

</script>

<template>
  <VRow class="match-height">
    <!-- Green Score -->
    <VCol cols="12" md="6">
      <VCard>
        <VCardText>
          <h6 class="text-h6 mb-2">Green Score Over Time</h6>
          <ApexChart
            type="line"
            height="300"
            :options="greenScoreOptions"
            :series="greenScoreSeries"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- Power Usage -->
    <VCol cols="12" md="6">
      <VCard>
        <VCardText>
          <h6 class="text-h6 mb-2">Power Usage per Endpoint</h6>
          <ApexChart
            type="bar"
            height="300"
            :options="powerUsageOptions"
            :series="powerUsageSeries"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- CPU vs RAM -->
    <VCol cols="12">
      <VCard>
        <VCardText>
          <h6 class="text-h6 mb-2">CPU vs RAM Usage per Request</h6>
          <ApexChart
            type="scatter"
            height="300"
            :options="cpuRamOptions"
            :series="cpuRamSeries"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- Commit Comparison for GET /api/users -->
<VCol cols="12">
  <VCard>
    <VCardText>
      <h6 class="text-h6 mb-2">Performance Across Commits: GET /api/users</h6>
      <ApexChart
        type="line"
        height="300"
        :options="commitComparisonOptions"
        :series="commitComparisonSeries"
      />
    </VCardText>
  </VCard>
</VCol>

<VCol cols="12">
  <VCard class="mt-6">
    <VCardText>
      <h6 class="text-h6 mb-4">Commit Performance Comparison — GET /api/users</h6>

      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th>Commit</th>
            <th>Message</th>
            <th>CPU (%)</th>
            <th>RAM (MB)</th>
            <th>Power (mW)</th>
            <th>Resp Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in commitComparisons" :key="item.commit">
            <td><code>{{ item.commit }}</code></td>
            <td>{{ item.message }}</td>
            <td>{{ item.cpu.toFixed(1) }}%</td>
            <td>{{ item.ram }} MB</td>
            <td>{{ item.power }} mW</td>
            <td>{{ item.responseTime }} ms</td>
          </tr>
        </tbody>
      </VTable>
    </VCardText>
  </VCard>
</VCol>


    <!-- 🔁 Branch Comparison -->
    <VCol cols="12">
      <VCard>
        <VCardText>
          <h6 class="text-h6 mb-2">Dev vs Main Branch Comparison</h6>
          <ApexChart
            type="bar"
            height="300"
            :options="branchComparisonOptions"
            :series="branchComparisonSeries"
          />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
