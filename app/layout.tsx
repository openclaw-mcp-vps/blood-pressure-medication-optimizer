import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BP Med Optimizer – Track Blood Pressure & Medication Effectiveness',
  description: 'Correlate your blood pressure readings with medication timing and dosages. Visualize trends and optimize your hypertension treatment.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2fdcdb5a-159e-4d71-ac2c-4f661d9d54fc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
