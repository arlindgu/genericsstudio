// src/lib/fonts.ts
import localFont from 'next/font/local'

export const generalSans = localFont({
  src: [
    {
      path: '../../public/fonts/general-sans/GeneralSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/general-sans/GeneralSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-general-sans',
  display: 'swap',
})