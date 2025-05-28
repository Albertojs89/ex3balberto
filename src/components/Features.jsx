export default function Features() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-20">
        Quick solutions, less stress
      </h2>

      <div className="max-w-6xl mx-auto grid gap-16 sm:grid-cols-3">
        {/* Bloque 1 */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-md">
              <img src="/icons/clock.png" alt="Fix emergencies fast" className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-base font-semibold">Fix emergencies fast</h3>
          <p className="text-white/70 text-sm px-2">
            Save 20–30 minutes per on-call ticket – no more searching for relevant issues and runbooks
          </p>
        </div>

        {/* Bloque 2 */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-md">
              <img src="/icons/icon2.png" alt="Universally compatible" className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-base font-semibold">Universally compatible</h3>
          <p className="text-white/70 text-sm px-2">
            Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system
          </p>
        </div>

        {/* Bloque 3 */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-md">
              <img src="/icons/icon3.png" alt="Secure for your org" className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-base font-semibold">Secure for your org</h3>
          <p className="text-white/70 text-sm px-2">
            We keep your data safe by taking top security measures.
          </p>
        </div>
      </div>
    </section>
  );
}
