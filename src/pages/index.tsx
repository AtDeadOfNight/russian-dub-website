import { Hero } from '@/widgets/hero'
import { About } from '@/widgets/about'
import { Process } from '@/widgets/process'
import { Price } from '@/widgets/price'
import { Team } from '@/widgets/team'
import { Footer } from '@/widgets/footer'

export function App() {
  return (
    <main className='flex flex-col w-full'>
      <Hero />
      <About />
      <Process />
      <Price />
      <Team />
      <Footer />
    </main>
  )
}
