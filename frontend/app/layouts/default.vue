<template>
  <div class="min-h-screen bg-brand-black font-sans text-white selection:bg-blue-500 selection:text-white">
    <AppNavbar />
    <slot />
    <AppFooter />
    <WhatsAppFloatingButton />
  </div>
</template>
