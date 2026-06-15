<script setup lang="ts">
import { computed, ref } from 'vue'
import FeatherBackground from './components/FeatherBackground.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CareerSection from './components/CareerSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import PrivateGate from './components/PrivateGate.vue'
import { isUnlocked, restoreFromSession } from './data/profile'

restoreFromSession()

const hash = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  hash.value = window.location.hash
})

// #/private: 未解錠ならパスワードゲートを表示。解錠済みなら通常表示(完全版データ)
const showGate = computed(() => hash.value.startsWith('#/private') && !isUnlocked.value)

function onUnlocked() {
  window.location.hash = ''
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="min-h-screen relative">
    <FeatherBackground />
    <div class="relative z-10">
      <PrivateGate v-if="showGate" @unlocked="onUnlocked" />
      <template v-else>
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <AchievementsSection />
          <ProjectsSection />
          <CareerSection />
          <ContactSection />
        </main>
        <FooterSection />
      </template>
    </div>
  </div>
</template>
