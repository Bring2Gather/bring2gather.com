import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <main className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/Logo.svg"
            alt="Bring2Gather Logo"
            width={200}
            height={200}
            className="h-[200px] w-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-medium">
          Łączymy ludzi, tworzymy przyszłość
        </h2>

        {/* Under construction message */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
            Strona w budowie
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Pracujemy nad czymś niesamowitym! Wkrótce uruchomimy platformę,
            która zmieni sposób, w jaki ludzie się spotykają i tworzą wspólne
            wydarzenia.
          </p>
        </div>

        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          Wkrótce dostępne
        </div>

        {/* Progress indicator */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
            <span>Postęp prac</span>
            <span>25%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-1/4 animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-slate-500 dark:text-slate-400 text-sm">
        © 2025 Bring2Gather. Wszystkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
