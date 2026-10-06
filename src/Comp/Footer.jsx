const Footer = () => {
  return (
    <footer className='border-t border-line'>
      <div className='max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 mono text-xs text-inksoft'>
        <p>© {new Date().getFullYear()} Mihai Culea</p>
        <div className='flex gap-6'>
          <a
            href='https://github.com/mihaicc30'
            target='_blank'
            rel='noreferrer'
            className='hover:text-ink transition-colors'>
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/mihai-culea-614747227/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-ink transition-colors'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
