<script setup>
const searchQuery = ref('')

const itemsPerPage = ref(5)
const page = ref(1)

const headers = [
  { title: 'Endpoint', key: 'endpoint' },
  { title: 'CPU (%)', key: 'cpu' },
  { title: 'RAM (MB)', key: 'ram' },
  { title: 'Power (mW)', key: 'power' },
  { title: 'Resp Time (ms)', key: 'responseTime' },
  { title: 'Date', key: 'date' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// Static sample measurement data
const requests = [
  {
    id: 1,
    endpoint: 'GET /api/users',
    cpu: 13.2,
    ram: 128,
    power: 290,
    responseTime: 154,
    date: '2025-06-08T14:32:00Z',
  },
  {
    id: 2,
    endpoint: 'POST /api/login',
    cpu: 9.4,
    ram: 110,
    power: 270,
    responseTime: 121,
    date: '2025-06-08T14:35:00Z',
  },
  {
    id: 3,
    endpoint: 'GET /api/projects/:id',
    cpu: 18.7,
    ram: 160,
    power: 315,
    responseTime: 189,
    date: '2025-06-08T14:40:00Z',
  },
  {
    id: 4,
    endpoint: 'PUT /api/settings',
    cpu: 14.9,
    ram: 145,
    power: 305,
    responseTime: 173,
    date: '2025-06-08T14:45:00Z',
  },
]
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex align-center justify-sm-space-between justify-start flex-wrap gap-4">
        <div class="text-h5">Recent API Measurements</div>
        <VTextField
          v-model="searchQuery"
          placeholder="Search Endpoint"
          density="compact"
          style="max-inline-size: 250px; min-inline-size: 200px;"
        />
      </div>
    </VCardText>

    <VDataTable
      :headers="headers"
      :items="requests"
      item-value="id"
      class="text-no-wrap rounded-0"
      :items-per-page="itemsPerPage"
      :page="page"
    >
      <!-- Endpoint -->
      <template #item.endpoint="{ item }">
        <code>{{ item.endpoint }}</code>
      </template>

      <!-- CPU -->
      <template #item.cpu="{ item }">
        {{ item.cpu.toFixed(1) }}%
      </template>

      <!-- RAM -->
      <template #item.ram="{ item }">
        {{ item.ram }} MB
      </template>

      <!-- Power -->
      <template #item.power="{ item }">
        {{ item.power }} mW
      </template>

      <!-- Response Time -->
      <template #item.responseTime="{ item }">
        {{ item.responseTime }} ms
      </template>

      <!-- Date -->
      <template #item.date="{ item }">
        {{ new Date(item.date).toLocaleString() }}
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <VBtn
          icon
          variant="text"
          size="small"
          @click="() => alert(`View ${item.endpoint}`)"
        >
          <VIcon icon="ri-eye-line" />
        </VBtn>
      </template>
    </VDataTable>
  </VCard>
</template>
