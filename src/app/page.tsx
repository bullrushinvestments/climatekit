import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClimateKit',
  description: 'ClimateKit offers personalized climate change solutions for small businesses and e-commerce platforms through a subscription-based service that integrates sustainability practices into daily operations.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">ClimateKit</h1>
      <p className="mt-4 text-lg">ClimateKit offers personalized climate change solutions for small businesses and e-commerce platforms through a subscription-based service that integrates sustainability practices into daily operations.</p>
    </main>
  )
}
