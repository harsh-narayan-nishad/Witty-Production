import {
  Featured,
  EducationalFuture,
  EducationalFreedom,
  HeroSection,

  OffersSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <OffersSection />
      <EducationalFreedom />
      <EducationalFuture />

    </main>
  );
}
