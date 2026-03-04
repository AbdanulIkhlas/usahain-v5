import { waitlistData } from "@/data/waitlist";
import { WaitlistForm } from "@/components/organisms/WaitlistForm";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      <Navbar />
      <main className="flex-1 w-full relative pt-32 pb-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none w-full h-full">
          {/* Subtle colored glow, positioned to the sides so it doesn't overlap text heavily */}
          <div className="absolute top-0 right-0 w-[50vw] max-w-[500px] aspect-square rounded-full bg-primary-500/15 blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[50vw] max-w-[500px] aspect-square rounded-full bg-secondary-500/15 blur-[120px] translate-y-1/2 -translate-x-1/2" />

          {/* Modern faint mesh/grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
          {/* Hero Section for Waitlist */}
          <section className="max-w-3xl text-center mb-12 sm:mb-16 w-full">
            <div className="inline-block px-5 py-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs mb-8 tracking-widest uppercase">
              Limited Early Access
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
              {waitlistData.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              {waitlistData.hero.subtext}
            </p>
          </section>

          {/* Form Section */}
          <section className="w-full sm:px-4">
            <WaitlistForm />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
