import { useState } from 'react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#work', label: 'work' },
  { href: '#contact', label: 'contact' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur'>
      <div className='max-w-content mx-auto flex items-center justify-between px-6 py-4'>
        <a
          href='#top'
          className='mono text-sm text-inksoft'>
          mihai@dev<span className='text-accent'>:~$</span>
        </a>

        <nav className='hidden sm:flex items-center gap-8 mono text-sm'>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className='text-inksoft hover:text-ink transition-colors'>
              ~/{link.label}
            </a>
          ))}
        </nav>

        <button
          className='sm:hidden mono text-sm text-inksoft'
          aria-expanded={open}
          aria-label='Toggle menu'
          onClick={() => setOpen(o => !o)}>
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {open && (
        <nav className='sm:hidden flex flex-col gap-1 px-6 pb-4 mono text-sm'>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className='py-2 text-inksoft hover:text-ink transition-colors'
              onClick={() => setOpen(false)}>
              ~/{link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
