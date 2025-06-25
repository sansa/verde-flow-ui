<script setup>
import ProjectOrderTable from './ProjectOrderTable.vue';
</script>

<template>
  <VRow class="match-height">
    <!-- Total Energy Used -->
    <VCol cols="12" md="6">
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="primary"
            icon="ri-battery-charge-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">Total Energy Used</h6>
          <div class="text-base">
            <p class="mb-0">
              <span class="text-primary font-weight-medium text-lg me-1">428.3 J</span>
              consumed across all API calls
            </p>
            <p class="mb-0 text-base">
              Based on latest measurements
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Green Score -->
    <VCol cols="12" md="6">
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="success"
            icon="ri-leaf-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">Green Score</h6>
          <div>
            <VChip
              color="success"
              size="small"
              class="mb-2"
            >
              82% Efficient
            </VChip>
            <p class="mb-0 text-base">
              Compared to historical average
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Measurement Frequency -->
    <VCol cols="12" md="6">
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="warning"
            icon="ri-loop-left-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">Measurement Frequency</h6>
          <div>
            <p class="mb-0">
              <span class="text-warning font-weight-medium text-lg me-1">Every 24 hours</span>
            </p>
            <p class="mb-0 text-base">
              Pi Agent auto-runs daily profiling
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Last Measured -->
    <VCol cols="12" md="6">
      <VCard>
        <VCardText class="d-flex gap-y-2 flex-column">
          <VAvatar
            variant="tonal"
            color="info"
            icon="ri-history-line"
            rounded
          />
          <h6 class="text-lg font-weight-medium">Last Measured</h6>
          <div>
            <p class="mb-0">
              <span class="text-info text-lg me-2">3 hours ago</span>
            </p>
            <p class="mb-0 text-base">
              Pi Agent: raspberrypi-01
            </p>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <!-- Recent API Requests Table -->
    <VCol cols="12">
      <ProjectOrderTable />
    </VCol>
  </VRow>
</template>
