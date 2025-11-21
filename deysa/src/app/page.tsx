import {
  Hero,
  Authority,
  Services,
  Testimonials,
  TrustBlock,
  Faq,
  CTASection,
  ContactForm,
} from "@/components/home";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Authority />
      <Services />
      <Testimonials />
      <TrustBlock />
      <Faq />
      <CTASection />
      <ContactForm />
    </main>
  );
}
