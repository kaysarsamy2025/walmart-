import FooterSection from '@/components/FooterSection';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24">
        <ServicesSection />
      </div>
      <FooterSection />
    </main>
  );
}
