export default function Features() {
  return (
    <section className="w-full py-20 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-16">
        Quick solutions, less stress
      </h2>

      <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-3">
        {/* Bloque 1 */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <img src="/icons/clock.png" alt="Fix emergencies fast" className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold">Fix emergencies fast</h3>
          <p className="text-white/70 text-sm">
            Save 20–30 minutes per on-call ticket – no more searching for relevant issues and runbooks
          </p>
        </div>

        {/* Bloque 2 */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <img src="/icons/icon2.png" alt="Universally compatible" className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold">Universally compatible</h3>
          <p className="text-white/70 text-sm">
            Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system
          </p>
        </div>

        {/* Bloque 3 */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <img src="/icons/icon3.png" alt="Secure for your org" className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold">Secure for your org</h3>
          <p className="text-white/70 text-sm">
            We keep your data safe by taking top security measures.
          </p>
        </div>
      </div>
    </section>
  );
}
