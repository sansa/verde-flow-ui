<script setup>
const {
    data: projectsData,
    execute: fetchProjects,
  } = await useApi(createUrl('/projects'))

  import ProjectCard from '@/views/projects/ProjectCard.vue';
</script>
<template>
  <h1>Projects</h1>
  <VRow>
    <VCol
      cols="12"
      md="6"
      lg="4"
      v-for="project in projectsData"
      :key="project.id"
    >
      <ProjectCard :project="project" />
    </VCol>
  </VRow>
</template>
