<script setup>
// import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
  import miscMaskDark from '@images/misc/misc-mask-dark.png'
import miscMaskLight from '@images/misc/misc-mask-light.png'
import tree1 from '@images/misc/tree1.png'
import tree3 from '@images/misc/tree3.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

  const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

  definePage({
    meta: {
      layout: 'blank',
      public: true,
    },
  })
  
  const refVForm = ref()

  const form = ref({
    email: '',
    password: '',
    remember: false,
  })

  const isPasswordVisible = ref(false)
  const route = useRoute()
  const router = useRouter()
  const ability = useAbility()

  const errors = ref({
    email: undefined,
    password: undefined,
  })

  const login = async () => {
    try {
      const res = await $api('/users/login', {
        method: 'POST',
        body: {
          email: form.value.email,
          password: form.value.password,
        },
        onResponseError({ response }) {
          console.log(response)
          const errorMessage = response._data?.message || 'Login failed. Please try again.'
          errors.value = {
            email: errorMessage,
            password: errorMessage,
          }
        },
      })

      const { tokens, user, abilityRules } = res

      useCookie('userAbilityRules').value = abilityRules
      ability.update(abilityRules)
      useCookie('userData').value = user
      useCookie('accessToken').value = tokens.accessToken
      useCookie('refreshToken').value = tokens.refreshToken
      await nextTick(() => {
        router.replace(route.query.to ? String(route.query.to) : '/')
      })
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = () => {
    refVForm.value?.validate().then(({ valid: isValid }) => {
      if (isValid)
        login()
    })
  }
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-sm-4 pa-md-7 pa-0"
      max-width="448"
    >
      <VCardText>
        <RouterLink to="/">
          <div class="d-flex align-center gap-x-3 justify-center mb-6">
            <VNodeRenderer :nodes="themeConfig.app.logo" />

            <h1 class="auth-title">
              {{ themeConfig.app.title }}
            </h1>
          </div>
        </RouterLink>
        <h4 class="text-h4 mb-1">
          Welcome to <span class="text-capitalize">{{ themeConfig.app.title }}!</span> 👋🏻
        </h4>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm ref="refVForm" @submit.prevent="onSubmit">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                label="Email"
                type="email"
                placeholder="johndoe@email.com"
                :error-messages="errors.email"
                :rules="[requiredValidator]"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                autocomplete="password"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                :error-messages="errors.password"
                :rules="[requiredValidator]"
              />

              <VDivider class="my-4" />

              
              <VBtn
                block
                type="submit"
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span> <RouterLink
                class="text-primary d-inline-block"
                :to="{ name: 'register' }"
              >
                Create an account
              </RouterLink>
            </VCol>

      
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <div class="d-flex gap-x-2 auth-footer-start-tree">
      <img
        class="d-none d-md-block"
        :src="tree3"
        :height="120"
        :width="67"
      >
      <img
        class="d-none d-md-block align-self-end"
        :src="tree3"
        :height="70"
        :width="40"
      >
    </div>

    <img
      :src="tree1"
      class="auth-footer-end-tree d-none d-md-block"
      :width="97"
      :height="210"
    >

    <!-- bg img -->
    <img
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
      height="172"
    >
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
