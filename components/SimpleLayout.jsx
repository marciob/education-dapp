import { Container } from './Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="px-10 flex items-center justify-center flex-col">
        <h1 className="items-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-center">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 text-center">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
