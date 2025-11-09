import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import VideoSection from '@/components/VideoSection';
import FooterSection from '@/components/FooterSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <AboutSection />
      <VideoSection />
      <ProcessSection />
      <FooterSection />
    </div>
  );
} 