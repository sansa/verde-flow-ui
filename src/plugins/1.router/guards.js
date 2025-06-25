import { canNavigate } from "@layouts/plugins/casl"
export const authGuard = router => {
  router.beforeEach(to => {
    if (to.meta.public)
      return

    const isLoggedIn = !!(useCookie('userData').value && useCookie('accessToken').value)

    if (to.meta.unauthenticatedOnly){
      if (isLoggedIn)
        return '/'
      else
        return undefined
    }

    if (!canNavigate(to)){
      return isLoggedIn
      ? {name: 'not-authorized'}
      : {
        name: 'login',
        query: {
          ...to.query,
          to: to.fullPath !== '/' ? to.fullPath : undefined
        }
      }
    }

    
  })

}
