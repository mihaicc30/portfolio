const Hero = () => {
  return (
    <section
      id='top'
      className='max-w-content mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32'>
      <p className='rise mono text-sm text-accent'>// mihai culea — software engineer</p>

      <h1
        className='rise font-display font-semibold text-[clamp(2.2rem,6vw,3.75rem)] leading-[1.1] mt-5 max-w-[18ch]'
        style={{ animationDelay: '0.08s' }}>
        Full-stack engineer. I ship products and keep them running.
      </h1>

      <p
        className='rise text-lg text-inksoft mt-6 max-w-[52ch] leading-relaxed'
        style={{ animationDelay: '0.16s' }}>
        Frontend, backend, and the infrastructure in between. A dozen shipped products in
        production, with a particular interest in point-of-sale systems and warehouse &amp;
        logistics platforms.
      </p>

      <div
        className='rise flex flex-wrap items-center gap-4 mt-9'
        style={{ animationDelay: '0.24s' }}>
        <a
          href='#work'
          className='px-5 py-3 bg-ink text-paper rounded-sm text-sm font-medium hover:bg-accent transition-colors'>
          View work
        </a>
        <a
          href='/assets/CV Mihai Culea.pdf'
          download
          className='px-5 py-3 border border-line rounded-sm text-sm font-medium hover:border-ink transition-colors'>
          Download CV
        </a>
        <a
          href='https://github.com/mihaicc30'
          target='_blank'
          rel='noreferrer'
          className='mono text-sm text-inksoft hover:text-ink transition-colors'>
          github.com/mihaicc30
        </a>
      </div>
    </section>
  )
}

export default Hero
