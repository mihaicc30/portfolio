import techIcons from '../techIcons'

const stack = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Vue',
  'Node.js',
  'Python',
  'PHP / Laravel',
  'MySQL',
  'MongoDB',
  'Firebase',
  'REST APIs',
  'WebSocket',
  'Stripe',
]

const About = () => {
  return (
    <section
      id='about'
      className='max-w-content mx-auto px-6 py-24 border-t border-line'>
      <p className='mono text-sm text-accent'>// about</p>

      <div className='grid md:grid-cols-2 gap-12 mt-6'>
        <div>
          <p className='text-lg leading-relaxed'>
            I&apos;m a software engineer who likes owning a problem from database schema to
            deployed UI. I started building and shipping apps in 2020, backed that up
            with a Computer Science degree, and by the time I graduated in 2023 I already had a
            portfolio of live products. I enjoy practicing and working toward
            production-level code, building things like point of sale systems, logistics tools,
            booking platforms, and a few side projects that outlived their &quot;side
            project&quot; label.
          </p>
          <p className='text-lg leading-relaxed mt-4 text-inksoft'>
            Outside of work I fly a drone, ride a bike, and try to keep a gym habit on weekdays.
          </p>
        </div>

        <div>
          <p className='mono text-xs text-inksoft uppercase tracking-wider'>Stack</p>
          <div className='flex flex-wrap gap-2 mt-4'>
            {stack.map(tech => (
              <span
                key={tech}
                className='flex items-center gap-2 mono text-xs px-3 py-1.5 rounded-sm bg-accenttint text-accent'>
                <img
                  src={techIcons[tech]}
                  alt=''
                  className='w-4 h-4 object-contain'
                />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
