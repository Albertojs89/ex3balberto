export default function SetupSection() {
  return (
    <section className="w-full px-4 py-24 text-center">
      <div className="max-w-3xl mx-auto space-y-6 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Instant setup, no custom code
        </h2>
        <p className="text-white/70 text-base sm:text-lg">
          Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <img
          src="/heroimg.png"
          alt="Setup preview"
          className="w-full h-auto rounded"
        />
      </div>
    </section>
  );
}
