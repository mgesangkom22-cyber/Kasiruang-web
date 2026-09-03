import React from 'react';
import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import OyenSection from '../components/OyenSection';
import SimplePlaceSection from '../components/SimplePlaceSection';
import NgopagSection from '../components/NgopagSection';
import LocationSection from '../components/LocationSection';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <MenuPreview />
      <OyenSection />
      <SimplePlaceSection />
      <NgopagSection />
      <LocationSection />
    </main>
  );
}
