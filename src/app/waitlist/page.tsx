import { waitlistData } from "@/data/waitlist";
import { WaitlistForm } from "@/components/organisms/WaitlistForm";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 w-full relative pt-32 pb-24 overflow-hidden">
        {/* Decorative Background Elements (Reduced opacity and size to prevent blending issues) */}
        <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-50 dark:bg-[#060B14] pointer-events-none">
          <div className="absolute top-0 right-0 w-[60vw] max-w-[600px] aspect-square rounded-full bg-primary-400/15 blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute top-[40%] left-0 w-[50vw] max-w-[500px] aspect-square rounded-full bg-secondary-400/15 blur-[100px] -translate-x-1/2" />

          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-30 dark:opacity-10 mix-blend-overlay" />
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
