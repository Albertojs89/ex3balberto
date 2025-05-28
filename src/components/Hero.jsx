

export default function Hero() {
  return (
    <section className="w-full text-center py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Information you need during <br /> on-call emergencies
        </h1>
        <p className="text-white/70 text-lg">
          Quickly link new on-call tickets to similar past incidents and their solutions. All
          directly in Slack the moment an incident happens.
        </p>
        <button className="text-black bg-white hover:bg-white/90 px-4 py-2 rounded">
            Get started →
          </button>
      </div>
    </section>
  );
}


