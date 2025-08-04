import { useRef, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { GoDesktopDownload } from 'react-icons/go'
import Icon from '../Icon.jsx'
import Mle from './Mle'

// eslint-disable-next-line react/prop-types
const Landing = ({ fromDB }) => {
  const navigate = useNavigate()
  const ref = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [width, setWidth] = useState(400)

  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth > 400 ? 400 : window.innerWidth - 50
      setWidth(newWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <span className='absolute inset-0 animate-wave3 bg-gradient-to-b from-[--c2] to-[--darkthemecolor] '></span>
      <span className='absolute inset-[3rem_0_0_0] animate-wave1  bg-gradient-to-b from-[--c4] to-[--darkthemecolor] '></span>
      <span className='absolute inset-[6rem_0_0_0] animate-wave2  bg-gradient-to-b from-[--c3] to-[--darkthemecolor] '></span>
      <div
        ref={ref}
        className='mainContent max-w-[1200px] min-[1200px]:mx-auto'>
        <div className='flex justify-center min-h-[70svh] items-end relative'>
          <div className='absolute inset-0 flex justify-center'>
            <div className='relative w-[100%] h-[20%]'>
              <div
                className='absolute left-[40%] cloud h-[2svh] -top-[10%] opacity-[50%] blur-[10px]'
                style={{ animationDelay: '.6s' }}></div>
              <div
                className='absolute left-1/2 cloud h-[2svh] top-[10%] opacity-[50%] blur-[10px]'
                style={{ animationDelay: '.2s' }}></div>
              <div
                className='absolute left-[60%] cloud h-[2svh] top-[1%] opacity-[50%] blur-[10px]'
                style={{ animationDelay: '.3s' }}></div>
            </div>
          </div>
          <div className='absolute inset-0 flex justify-center '>
            <div className='relative w-[50%] h-[20%] '>
              <span
                className='starEl animate-spinStar w-[4px] h-[4px] absolute top-[6rem]  left-1/3 bg-[--c8] p-1 '
                style={{
                  animationDelay: '.2s',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}></span>
              <span
                className='starEl animate-spinStar w-[4px] h-[4px] absolute top-[60%]  left-[30%] bg-[--c8] p-1 '
                style={{
                  animationDelay: '.3s',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}></span>
              <span
                className='starEl animate-spinStar w-[4px] h-[4px] absolute -top-[8%] left-[85%] bg-[--c8] p-1 '
                style={{
                  animationDelay: '.28s',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}></span>
              <span
                className='starEl animate-spinStar w-[4px] h-[4px] absolute top-[16%] left-[85%] bg-[--c8] p-1 '
                style={{
                  animationDelay: '.2s',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}></span>
              <span
                className='starEl animate-spinStar w-[4px] h-[4px] absolute top-[9%] left-[80%] bg-[--c8] p-1 '
                style={{
                  animationDelay: '.1s',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}></span>
              <span
                className='starEl animate-spinStar w-[4px] h-[4px] absolute top-[10%] bg-[--c8] left-[75%] p-1 '
                style={{
                  animationDelay: '.1s',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}></span>
              <span
                className='starEl animate-spinStar w-[4px] h-[4px] absolute top-[20%]  left-[70%] bg-[--c8] p-1 '
                style={{
                  animationDelay: '.3s',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}></span>
            </div>
          </div>
          <div className='moonEl animate-moon flex h-12 w-12 bg-[--c7] absolute top-2 rounded-full '>
            <div className='relative flex w-[100%] h-[100%] '>
              <span className='h-[14px] w-[14px] rounded-full bg-[--c8] absolute bottom-0 right-2 animate-moon'></span>
              <span className='h-[14px] w-[14px] rounded-full bg-[--c8] absolute top-1/3 animate-moon'></span>
              <span className='h-[14px] w-[14px] rounded-full bg-[--c8] absolute top-1/4 right-2 animate-moon'></span>
            </div>
          </div>

          <span
            className='rocketEl rounded-full w-4 h-[10px] bg-[--c4] absolute top-[10px] right-[-20%] blur-[3px]  animate-comet'
            style={{
              clipPath:
                'polygon(45% 78%, 36% 80%, 28% 81%, 20% 78%, 14% 75%, 7% 69%, 1% 55%, 1% 48%, 1% 41%, 5% 29%, 13% 23%, 22% 20%, 30% 19%, 40% 19%, 93% 33%, 98% 43%, 100% 50%, 98% 56%, 93% 66%)',
            }}></span>
          <span
            className='rocketEl rounded-full w-4 h-[10px] bg-[--c5] absolute top-[10px] right-[-20%] blur-[6px]  animate-comet'
            style={{
              animationDelay: '.02s',
              clipPath:
                'polygon(45% 78%, 36% 80%, 28% 81%, 20% 78%, 14% 75%, 7% 69%, 1% 55%, 1% 48%, 1% 41%, 5% 29%, 13% 23%, 22% 20%, 30% 19%, 40% 19%, 93% 33%, 98% 43%, 100% 50%, 98% 56%, 93% 66%)',
            }}></span>
          <span
            className='rocketEl rounded-full w-4 h-[10px] bg-[--c5] absolute top-[10px] right-[-20%] blur-[12px] animate-comet '
            style={{
              animationDelay: '.04s',
              clipPath:
                'polygon(45% 78%, 36% 80%, 28% 81%, 20% 78%, 14% 75%, 7% 69%, 1% 55%, 1% 48%, 1% 41%, 5% 29%, 13% 23%, 22% 20%, 30% 19%, 40% 19%, 93% 33%, 98% 43%, 100% 50%, 98% 56%, 93% 66%)',
            }}></span>
          <span
            className='rocketEl rounded-full w-4 h-[10px] bg-[--c5] absolute top-[10px] right-[-20%] blur-[18px] animate-comet '
            style={{
              animationDelay: '.06s',
              clipPath:
                'polygon(45% 78%, 36% 80%, 28% 81%, 20% 78%, 14% 75%, 7% 69%, 1% 55%, 1% 48%, 1% 41%, 5% 29%, 13% 23%, 22% 20%, 30% 19%, 40% 19%, 93% 33%, 98% 43%, 100% 50%, 98% 56%, 93% 66%)',
            }}></span>

          <div className='flex flex-col mx-2 p-4 max-[900px]:max-w-[400px] max-[900px]:mx-auto z-50'>
            <p className='text-5xl max-[500px]:text-[12vw] font-bold tracking-widest animate-fadeUPX'>
              Hi! I&apos;m Mihai
            </p>
            <p
              className='animate-fadeUPX'
              style={{ animationDuration: `1s` }}>
              and a passionate Software Developer.
            </p>
            <div className='inline-flex gap-4 w-100 my-2'>
              <a
                rel='noreferrer'
                href='https://www.linkedin.com/in/mihai-culea-614747227/'
                target='_blank'>
                <Icon
                  img='./assets/Icons/LI.png'
                  delay='1.3'
                />
              </a>
              <a
                href='https://github.com/mihaicc30'
                target='_blank'
                rel='noreferrer'>
                <Icon
                  img='./assets/Icons/GH.png'
                  delay='1.6'
                />
              </a>
            </div>
            <a
              href='./assets/CV Mihai Culea.pdf'
              download
              className=' px-6 py-2 bg-[--accentcolor] rounded-xl my-2 flex justify-between  animate-fadeUPX'
              style={{ animationDuration: `1.9s` }}>
              <span>Download CV</span>
              <span>
                <GoDesktopDownload className='text-2xl' />
              </span>
            </a>
          </div>
        </div>

        <div className='flex gap-3 mx-[5vw] flex-wrap justify-center my-[25vh] font-[bold] items-baseline '>
          <span className='tracking-[10px] text-[--accentcolor] font-black text-xl my-auto ani-before ani-start'>
            Tech Stack
          </span>
          <span className='font-bol my-auto font-black text-3xl translate-y-[-4px] ani-before ani-start'>|</span>
          <Icon img='./assets/Icons/JS.png' />
          <Icon img='./assets/Icons/TS.png' />
          <Icon img='./assets/Icons/VUE.png' />
          <Icon img='./assets/Icons/RE.png' />
          <Icon img='./assets/Icons/RN.png' />
          <Icon img='./assets/Icons/NJS.png' />
          <Icon img='./assets/Icons/HTML.png' />
          <Icon img='./assets/Icons/CSS.png' />
          <Icon img='./assets/Icons/Bootstrap.png' />
          <Icon img='./assets/Icons/TW.png' />
          <Icon img='./assets/Icons/NODE.png' />
          <Icon img='./assets/Icons/API.png' />
          <Icon img='./assets/Icons/PYT.png' />
          <Icon img='./assets/Icons/ML.png' />
          <Icon img='./assets/Icons/PHP.png' />
          <Icon img='./assets/Icons/CI.png' />
          <Icon img='./assets/Icons/LARA.png' />
          <Icon img='./assets/Icons/MYSQL.png' />
          <Icon img='./assets/Icons/SEQ.png' />
          <Icon img='./assets/Icons/MONGO.png' />
          <Icon img='./assets/Icons/MG.png' />
          <Icon img='./assets/Icons/FB.png' />
          <Icon img='./assets/Icons/GH.png' />
          <Icon img='./assets/Icons/STRIPE.png' />
          <Icon img='./assets/Icons/Cordova.png' />
          <Icon img='./assets/Icons/WS.png' />
        </div>

        <div className='flex justify-center gap-[5vw] mx-[5vw] my-[25vh] max-[934px]:items-center max-[934px]:flex-col ani-before ani-start'>
          <div className='basis-[40%] mx-2 '>
            <iframe
              width={width}
              height='200'
              src='https://www.youtube.com/embed/LcIapRxXjw4?autoplay=1&mute=1&loop=1'
              title='Bredwardine Bridge -drone footage'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='rounded-xl '></iframe>
          </div>

          <div className='basis-[40%] mx-2'>
            <p className='text-[--accentcolor] font-black tracking-[6px]'>ABOUT ME</p>
            <p className='font-bold text-xl'>Outside of work and academics,</p>
            <p>
              An enthusiast of drone videography and bike riding, I have a self-taught skill set in video editing and
              post-production.
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-[5vw] mx-[5vw] mt-[25vh] ani-before ani-start'>
          <div className='basis-[40%] mx-2'>
            <p className='text-[--accentcolor] font-black tracking-[10px] text-center'>MILESTONES</p>
          </div>
        </div>

        <div className='flex justify-center gap-[5vw] mx-[5vw] mb-[25vh] max-[934px]:items-center max-[934px]:flex-col '>
          <Mle />
        </div>

        <div className='flex flex-col justify-center items-center gap-[5vw] mx-[5vw] mt-[25vh] ani-before ani-start'>
          <div className='basis-[40%] mx-2'>
            <p className='text-[--accentcolor] font-black tracking-[10px] text-center'>FEATURED PROJECTS</p>
          </div>
        </div>

        <div className='flex flex-wrap justify-center gap-2'>
          {/* eslint-disable-next-line react/prop-types */}
          {fromDB.map(
            (project, i) =>
              i < 3 && (
                <div
                  key={crypto.randomUUID()}
                  className='mx-2 w-[250px] relative my-2 ani-before ani-start'>
                  <div className='relative '>
                    <div className='absolute inset-0 bg-black opacity-25'></div>
                    <picture>
                      <img
                        src={project.img}
                        width='250'
                        height='250'
                        className='mx-auto block object-cover hover:opacity-50 rounded'
                      />
                    </picture>
                    <a
                      rel='noreferrer'
                      href={project.link}
                      target='_blank'
                      className='absolute inset-0 z-10 flex justify-center items-center opacity-0 hover:opacity-100 bg-[#dba511a3] transition duration-300 ease-out'>
                      <span className='font-bold text-3xl'>Open Project</span>
                    </a>
                  </div>
                  <p className='font-bold tracking-[4px] my-2'>{project.name}</p>
                  <div className='tags flex gap-2 flex-wrap my-2'>
                    {project.tags.map(tag => (
                      <span
                        key={crypto.randomUUID()}
                        className={`${tag.class} ${tag.el == 'VanillaJS' ? 'text-[20px]' : ''}`}>
                        {tag.el}
                      </span>
                    ))}
                  </div>
                  {project.dl && project.dl}
                </div>
              )
          )}
        </div>

        <div>
          <p className='text-end text-xl font-black tracking-[6px] ani-before ani-start'>
            <NavLink
              to='/projects'
              className='font-bold tracking-widest'
              onClick={e => {
                e.preventDefault()
                if (location.pathname == '/projects') return
                ref.current.classList.add('fade-out')
                setTimeout(() => {
                  navigate('/projects', { state: { scrollToTop: true } })
                }, 600)
              }}>
              Check all the projects ➡
            </NavLink>
          </p>
        </div>

        <p className='text-[--accentcolor] font-black tracking-[10px] text-center mt-[25vh] mb-5 ani-before ani-start'>
          CONTACT
        </p>
        <div
          className='flex justify-center gap-[5vw] mx-[5vw] mb-[25vh]  max-[600px]:flex-col cursor-pointer'
          onClick={e => {
            e.preventDefault()
            if (location.pathname == '/contact') return
            ref.current.classList.add('fade-out')
            setTimeout(() => {
              navigate('/contact')
            }, 600)
          }}>
          <div className='basis-[40%] mx-2 text-right'>
            <div
              to='/contact'
              className='font-bold tracking-widest'
              onClick={e => {
                e.preventDefault()
              }}>
              <p className='text-3xl font-black ani-before ani-start'>Want to say hi?</p>
              <p className='font-normal ani-before ani-start'>Drop me a message ➡</p>
            </div>
          </div>

          <div className='basis-[40%] mx-2'>
            <picture>
              <img
                src='../../assets/bike.JPG'
                className='rounded ani-before ani-start'
              />
            </picture>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-[5vw] mx-[5vw] my-[25vh]'>
          <p className='text-[--accentcolor] font-black tracking-[6px] ani-before ani-start'>PORTFOLIO</p>
          <p className='font-bold text-xl ani-before ani-start'>Mihai Culea</p>
          <div className='inline-flex gap-4 ani-before ani-start'>
            <a
              rel='noreferrer'
              href='https://www.linkedin.com/in/mihai-culea-614747227/'
              target='_blank'>
              <Icon
                img='./assets/Icons/LI.png'
                delay='1.3'
              />
            </a>
            <a
              rel='noreferrer'
              href='https://github.com/mihaicc30'
              target='_blank'>
              <Icon
                img='./assets/Icons/GH.png'
                delay='1.6'
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
