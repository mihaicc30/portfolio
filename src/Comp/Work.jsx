import projects from '../projects'
import techIcons from '../techIcons'

const Work = () => {
  return (
    <section
      id='work'
      className='max-w-content mx-auto px-6 py-24 border-t border-line'>
      <p className='mono text-sm text-accent'>// work</p>
      <h2 className='font-display font-semibold text-3xl mt-4'>Selected projects</h2>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {projects.map(project => (
          <article
            key={project.name}
            className='flex flex-col bg-surface border border-line rounded-sm overflow-hidden'>
            <img
              src={project.img}
              alt={`${project.name} screenshot`}
              loading='lazy'
              className='w-full h-40 object-cover object-top border-b border-line'
            />

            <div className='flex flex-col flex-1 p-5'>
              <h3 className='font-display font-semibold text-lg'>{project.name}</h3>
              <p className='text-sm text-inksoft mt-2 leading-relaxed'>{project.description}</p>

              <div className='flex flex-wrap gap-1.5 mt-4'>
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className='flex items-center gap-1.5 mono text-[11px] px-2 py-1 rounded-sm bg-accenttint text-accent'>
                    {techIcons[tech] && (
                      <img
                        src={techIcons[tech]}
                        alt=''
                        className='w-3.5 h-3.5 object-contain'
                      />
                    )}
                    {tech}
                  </span>
                ))}
              </div>

              {project.links?.length > 0 && (
                <ul className='mt-auto pt-5 space-y-2'>
                  {project.links.filter(l => l.url).map(({ label, url, description }) => (
                    <li key={url} className='text-xs'>
                      <a
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                        className='mono text-ink hover:text-accent transition-colors'>
                        {label} ↗
                      </a>
                      <a
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                        className='mono block text-[11px] text-inksoft break-all hover:text-accent transition-colors'>
                        {url.replace(/^https?:\/\//, '')}
                      </a>
                      {description && <p className='text-inksoft mt-0.5'>{description}</p>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
