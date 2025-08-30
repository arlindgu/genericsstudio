// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Alle Dateien definieren wo Tailwind-Klassen verwendet werden
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Erweiterte Purge-Konfiguration
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./lib/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      // Klassen die nicht gepurged werden sollen
      safelist: [
        "bg-red-500",
        "text-green-600",
        /^hover:/, // Alle hover: Klassen
        /^focus:/, // Alle focus: Klassen
        /^active:/, // Alle active: Klassen
      ],
      // Dynamische Klassen
      defaultExtractor: (content) => {
        // Extrahiert alle möglichen CSS-Klassen
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches =
          content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
    },
  },

  // Experimentelle Features
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
