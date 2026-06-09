<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CareerSection from './components/CareerSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen">
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
  </div>
</template>
