import { SiteHeader } from '@/components/site-header'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'

export default function Page() {
  return (
    <main className="relative min-h-svh">
      <SiteHeader />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
