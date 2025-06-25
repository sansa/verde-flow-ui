<script setup>

const props = defineProps({
  projectData: {
    type: null,
    required: true,
  },
})

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

const projectData = {
  id: props.projectData.id,
  fullName: props.projectData.name,
  company: '',
  role: '',
  username: props.projectData.name,
  country: props.projectData.defaultBranch,
  contact: props.projectData.baseUrl,
  email: props.projectData.defaultBranch,
  currentPlan: '',
  status: props.projectData.status,
  avatar: '',
  taskDone: null,
  projectDone: null,
  taxId: 'Tax-8894',
  language: 'English',
}
</script>

<template>
  <VRow>
    <!-- SECTION Project Details -->
    <VCol cols="12">
      <VCard v-if="props.projectData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            :color="!props.projectData.name ? 'primary' : undefined"
            :variant="!props.projectData.avatar ? 'tonal' : undefined"
          >
            <VImg
              v-if="props.projectData.avatar"
              :src="props.projectData.avatar"
            />
            <span
              v-else
              class="text-5xl font-weight-medium"
            >
              N/A
            </span>
          </VAvatar>

          <!-- 👉 Project fullName -->
          <h6 class="text-h5 mt-4">
            {{ props.projectData.name }}
          </h6>
          <p class="text-body-1 mb-0">
            Project ID #{{ props.projectData.id }}
          </p>

          <div class="d-flex justify-space-evenly gap-x-12 mt-6">
            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-4"
              >
                <VIcon icon="ri-git-branch-line" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <h5 class="text-h5">
                  {{ props.projectData._count.branches }}
                </h5>
                <span class="text-body-1">Branches</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <VAvatar
                variant="tonal"
                color="primary"
                rounded
                class="me-4"
              >
                <VIcon icon="ri-stack-line" />
              </VAvatar>
              <div class="d-flex flex-column align-start">
                <h5 class="text-h5">
                  <!-- {{ props.projectData._count.apiRequests }} -->
                    4
                </h5>
                <span class="text-body-1">API Routes</span>
              </div>
            </div>
          </div>
        </VCardText>

        <!-- 👉 Project Details -->
        <VCardText>
          <h5 class="text-h5">
            Details
          </h5>
          <VDivider class="my-4" />

          <VList class="card-list mt-2">
            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-2">Git Repo:</span>
                <span class="text-body-1">
                  {{ props.projectData.gitUrl }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-2">Default Branch:</span>
                <span class="text-body-1">
                  {{ props.projectData.defaultBranch }}
                </span>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-2">Status:</span>
                <VChip
                  :color="props.projectData.status.toLowerCase() === 'active' ? 'success' : 'error'"
                  size="small"
                  class="mb-2"
                >
                {{ props.projectData.status }}
                </VChip>
              </VListItemTitle>
            </VListItem>

            <VListItem>
              <VListItemTitle>
                <span class="font-weight-medium me-2">Base Url:</span>
                <span class="text-body-1">
                  {{ props.projectData.baseUrl }}
                </span>
              </VListItemTitle>
            </VListItem>
          </VList>

          <div class="mt-6 text-center">
            <VBtn
              block
              @click="isUserInfoEditDialogVisible = !isUserInfoEditDialogVisible"
            >
              Edit Details
            </VBtn>
          </div>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- !SECTION -->
  </VRow>
  <UserInfoEditDialog
    v-model:is-dialog-visible="isUserInfoEditDialogVisible"
    :user-data="projectData"
  />
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.5rem;
}
</style>
