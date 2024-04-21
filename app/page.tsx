import { AboutUs, Hero, Services, Contact, Client, Product } from "@/sections";
export default async function Home() {
  return (
    <main className="overflow-hidden relative">
      <Hero />
      <Client />
      <Product />
      <Services />
      <AboutUs />
      <Contact />
    </main>
  );
}
