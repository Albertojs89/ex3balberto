import Hero from "../components/Hero";
import Features from "../components/Features";
import Setup from "../components/Setup";
import Contact from "../components/Contact";





export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {/* seccion 1 */}
        <Hero />
        {/* seccion 2 */}
        <section className="w-full py-20 px-4 flex justify-center">
          <img
            src="/heroimg.png"
            alt="Dashboard preview"
            className="rounded"
            style={{ maxWidth: "1024px", height: "632.53px" }}
          />
        </section>

        {/* seccion 3 */}
        <Features />

        {/* seccion 4 */}
        
        <Setup />

        {/* seccion 5 */}
        <Contact />
        

    </main>
      
    </div>
  );
}
