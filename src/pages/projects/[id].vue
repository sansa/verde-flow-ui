<script setup>
import ProjectBioPanel from '@/views/projects/view/ProjectBioPanel.vue'
import ProjectTabAddressAndBilling from '@/views/projects/view/ProjectTabAddressAndBilling.vue'
import ProjectTabCharts from '@/views/projects/view/ProjectTabCharts.vue'
import ProjectTabNotification from '@/views/projects/view/ProjectTabNotification.vue'
import ProjectTabOverview from '@/views/projects/view/ProjectTabOverview.vue'
import ProjectTabSecurity from '@/views/projects/view/ProjectTabSecurity.vue'

const route = useRoute('projects-id')
const projectData = ref()
const userTab = ref(null)

const tabs = [
  {
    icon: 'ri-group-line',
    title: 'Overview',
  },
  {
    icon: 'ri-git-branch-line',
    title: 'Branches',
  },
  {
    icon: 'ri-stack-line',
    title: 'API Requests',
  },
  {
    icon: 'ri-speed-line',
    title: 'Measurements',
  },
  {
    icon: 'ri-bar-chart-2-line',
    title: 'Visualizations',
  },
]

const { data } = await useApi(`/projects/${ route.params.id }`)
if (data.value)
  projectData.value = data.value
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6">
      <div>
        <h4 class="text-h4">
          Project: {{ projectData.name }}
        </h4>
        <p class="text-body-1 mb-0">
          Project ID #{{ projectData.id }}
        </p>
      </div>
      <VBtn
        variant="outlined"
        color="error"
      >
        Delete Project
      </VBtn>
    </div>
    <!-- 👉 Project Profile  -->
    <VRow v-if="projectData">
      <VCol
        v-if="projectData"
        cols="12"
        md="5"
        lg="4"
      >
        <ProjectBioPanel :project-data="projectData" />
      </VCol>
      <VCol
        cols="12"
        md="7"
        lg="8"
      >
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-6 6 disable-tab-transition"
        >
          <VTab
            v-for="tab in tabs"
            :key="tab.icon"
          >
            <VIcon
              start
              :icon="tab.icon"
            />
            <span>{{ tab.title }}</span>
          </VTab>
        </VTabs>
        <VWindow
          v-model="userTab"
          class="mb-6 disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <ProjectTabOverview />
          </VWindowItem>
          <VWindowItem>
            <ProjectTabSecurity />
          </VWindowItem>
          <VWindowItem>
            <ProjectTabAddressAndBilling />
          </VWindowItem>
          <VWindowItem>
            <ProjectTabNotification />
          </VWindowItem>
          <VWindowItem>
            <ProjectTabCharts />
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
  </div>
</template>
