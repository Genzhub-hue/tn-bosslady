
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-8">TN – Natasha Yasmin</h1>

        <p className="text-center text-xl text-pink-600 font-semibold mb-12">
          Boss Lady | Business Mogul | Marketing Model
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/IMG-20250119-WA0013.jpg" 
              alt="Natasha Yasmin - TN" 
              className="w-64 h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <section className="md:w-2/3 space-y-6 text-lg leading-relaxed">
            <p>
              Natasha Yasmin, professionally known as <strong>TN</strong>, is the embodiment of modern
              excellence — a dynamic boss lady, thriving business personality, and an influential
              marketing model. With a unique blend of elegance, ambition, and strategic brilliance,
              TN has carved her own lane in both the business and fashion spheres.
            </p>

            <p>
              As a <strong>businesswoman</strong>, TN has built a reputation for visionary leadership and
              fearless execution. Her ventures reflect her bold mindset — driven by innovation,
              excellence, and an unshakable belief in creating impact. She’s not just building brands;
              she’s building legacies. With a keen eye for opportunity and a sharp business instinct,
              TN continues to grow her empire while inspiring young women across the globe to step
              into their power.
            </p>

            <p>
              In the <strong>modeling world</strong>, TN is a force. Her presence is magnetic, her style is
              iconic, and her work in <strong>marketing modeling</strong> positions her at the intersection
              of influence and aesthetic. She brings brands to life with authenticity, grace, and a
              deep understanding of audience connection. From luxury fashion shoots to digital brand
              campaigns, TN’s modeling journey is a testament to her versatility and charisma.
            </p>

            <p>
              But it’s her role as a <strong>boss lady</strong> that truly defines her — a leader who rises
              with elegance, empowers others, and owns her journey unapologetically. Whether in the
              boardroom, behind the camera, or leading creative campaigns, TN continues to break
              barriers, lead with purpose, and inspire a new generation of go-getters.
            </p>

            <p>
              With every step, Natasha Yasmin proves that being powerful, stylish, and successful
              isn't a contradiction — it’s a lifestyle.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
