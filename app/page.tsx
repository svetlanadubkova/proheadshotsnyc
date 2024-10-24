import { redirect } from 'next/navigation'

export const metadata = {
  title: 'headshots by lana dubkova',
  description: 'nyc headshots | brooklyn & manhattan',
}

export default function HomePage() {
  redirect('https://skovaphotos.com')
}