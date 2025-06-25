<script setup>
import girlWithLaptop from '@images/pages/pose-fs-9.png';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const statusColor = {
  Active: 'success',
  Pending: 'warning',
  Error: 'error',
}[props.project.status] || 'secondary'
</script>

<template>
  <VCard>
    <VCardText>
      <!-- Project Image -->
      <div class="d-flex justify-center align-start pb-0 px-3 pt-3 mb-4 bg-light-primary rounded">
        <VImg
          :src="girlWithLaptop"
          width="145"
          height="140"
        />
      </div>

      <!-- Project Title and Status -->
      <div class="d-flex justify-space-between align-center mb-2">
        <h5 class="text-h5">
          {{ project.name }}
        </h5>
        <VChip
          :color="statusColor"
          size="small"
          label
          class="text-capitalize"
        >
          {{ project.status }}
        </VChip>
      </div>

      <!-- Description -->
      <p class="text-body-1 mb-3 project-description">
        {{ project.description }}
      </p>

      <!-- Project Metrics -->
      <div class="d-flex justify-space-between my-4 flex-wrap gap-4">
        <div class="d-flex gap-x-3 align-center">
          <VAvatar color="primary" variant="tonal" rounded>
            <VIcon icon="ri-git-branch-line" />
          </VAvatar>
          <div>
            <h6 class="text-h6">{{ project.branchCount }}</h6>
            <div class="text-body-2">Branches</div>
          </div>
        </div>

        <div class="d-flex gap-x-3 align-center">
          <VAvatar color="primary" variant="tonal" rounded>
            <VIcon icon="ri-stack-line" />
          </VAvatar>
          <div>
            <h6 class="text-h6">{{ project.totalApis }}</h6>
            <div class="text-body-2">API Routes</div>
          </div>
        </div>

        <div class="d-flex gap-x-3 align-center">
          <VAvatar color="primary" variant="tonal" rounded>
            <VIcon icon="ri-time-line" />
          </VAvatar>
          <div>
            <h6 class="text-h6">{{ project.lastMeasured }}</h6>
            <div class="text-body-2">Last Measured</div>
          </div>
        </div>
      </div>

      <VBtn block color="primary" :to="{ name: 'projects-id', params: { id: project.id }}" >
        View Project
      </VBtn>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
  .project-description {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

</style>
