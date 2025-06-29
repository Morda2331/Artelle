import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 sm:p-20 gap-16">
      <main className="flex-1 flex flex-col items-center sm:items-start gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <ol className="list-decimal list-inside text-sm leading-6 text-center sm:text-left space-y-2 font-mono">
          <li>
            Начни с редактирования{' '}
            <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Сохрани — изменения моментально отобразятся в браузере.</li>
        </ol>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 sm:h-12 px-5 flex items-center justify-center gap-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logo"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 sm:h-12 px-5 flex items-center justify-center gap-2 rounded-full border border-gray-300 hover:bg-gray-100 transition font-medium"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-6 py-4 border-t border-gray-200">
        <LinkIcon href="https://nextjs.org/learn" src="/file.svg">
          Learn
        </LinkIcon>
        <LinkIcon href="https://vercel.com/templates" src="/window.svg">
          Examples
        </LinkIcon>
        <LinkIcon href="https://nextjs.org" src="/globe.svg">
          Go to nextjs.org →
        </LinkIcon>
      </footer>
    </div>
  )
}

/** Вспомогательный компонент для ссылок в footer */
function LinkIcon({
  href,
  src,
  children,
}: {
  href: string
  src: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline"
    >
      <Image aria-hidden src={src} alt="" width={16} height={16} />
      {children}
    </a>
  )
}
