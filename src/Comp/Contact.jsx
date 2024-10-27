import React, { useRef, useEffect, useState } from 'react'
import { db } from '../App.jsx'
import '../index.css'
import { collection, addDoc } from 'firebase/firestore'

const Contact = () => {
  const [err, setErr] = useState({
    name: '',
    email: '',
    message: '',
  })

  const sendEmail = (name, email, message) => {
    addDoc(collection(db, 'messages'), {
      uid: crypto.randomUUID(),
      name,
      email,
      message,
      date: new Date(),
    })
  }

  const validate = async (n, e, m) => {
    setErr({
      name: '',
      email: '',
      message: '',
    })
    console.log(n, e, m)
    let isValid = true

    if (n.length < 3) {
      setErr(prevErrors => ({
        ...prevErrors,
        name: 'Name too short.',
      }))
      isValid = false
    }

    let emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!e) {
      setErr(prevErrors => ({
        ...prevErrors,
        email: 'Email required.',
      }))
      isValid = false
    } else if (!emailRegex.test(e)) {
      setErr(prevErrors => ({
        ...prevErrors,
        email: 'Email invalid.',
      }))
      isValid = false
    }

    if (m.length < 1) {
      setErr(prevErrors => ({
        ...prevErrors,
        message: 'Message required.',
      }))
      isValid = false
    } else if (m.length < 3) {
      setErr(prevErrors => ({
        ...prevErrors,
        message: 'Message too short.',
      }))
      isValid = false
    }

    return isValid
  }

  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)

  const refName = useRef(null)
  const refEmail = useRef(null)
  const refMessage = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [err])

  const handleSubmit = async e => {
    e.preventDefault()
    const validateForm = await validate(refName.current.value, refEmail.current.value, refMessage.current.value)
    if (!validateForm) return
    ref3.current.classList.add('animate-fadeOUT')
    ref3.current.classList.remove('animate-fadeIN')

    ref2.current.classList.remove('animate-fadeOUT')
    ref2.current.classList.add('animate-fadeIN')
    ref.current.style.width = '100%'
    // 2.3s
    ref.current.addEventListener(
      'transitionend',
      () => {
        sendEmail(refName.current.value, refEmail.current.value, refMessage.current.value)
        ref2.current.classList.remove('animate-fadeIN')
        ref2.current.classList.add('animate-fadeOUT')

        ref4.current.classList.remove('animate-fadeOUT')
        ref4.current.classList.add('animate-fadeIN')
        ref5.current.classList.add('animate-fadeIN')
      },
      { once: true }
    )
  }

  const handleFormReset = () => {
    setErr({
      name: '',
      email: '',
      message: '',
    })
    refName.current.value = ''
    refEmail.current.value = ''
    refMessage.current.value = ''
    ref.current.style.width = '0%'
    ref4.current.classList.add('animate-fadeOUT')
    ref4.current.classList.remove('animate-fadeIN')
    setTimeout(() => {
      ref3.current.classList.remove('animate-fadeOUT')
      ref3.current.classList.add('animate-fadeIN')
    }, 500)
  }

  return (
    <div className='mainContent relative'>
      <div className='absolute left-1/2 top-1/4 -translate-x-2/4'>
        <div
          ref={ref2}
          className='w-[300px] bg-white h-[10px] rounded-xl animate-fadeOUT'>
          <div
            ref={ref}
            className='w-[0px] bg-[--accentcolor] h-[10px] rounded-xl transition-all ease-[cubic-bezier(0.33, 0.9, 0.52, 0.01)] duration-[3000ms] '></div>
        </div>

        <div
          ref={ref4}
          className='w-[300px] text-center h-[10px] rounded-xl animate-fadeOUT'>
          <p className='font-bold text-3xl'>Message Sent!</p>
          <p>Thank you very much your message has been successfully sent and will be dealt with asap!</p>

          <button
            ref={ref5}
            onClick={handleFormReset}
            className='mt-10'
            style={{ animationDuration: `2s` }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 64 64'
              height='50'>
              <title>Reload</title>
              <path
                d='M56.79 16.09A26.89 26.89 0 0 0 9 25.46l-3.23-6.19a2 2 0 1 0-3.54 1.87l6.22 11.79v.06a2 2 0 0 0 .25.34l.05.06a2 2 0 0 0 .37.29l.11.06a2 2 0 0 0 .34.14h.13a2 2 0 0 0 .47.06 2 2 0 0 0 .41 0h.12a2 2 0 0 0 .31-.12h.06l11.79-6.22a2 2 0 1 0-1.78-3.6l-8.6 4.54a22.89 22.89 0 1 1 9.08 21.9 2 2 0 1 0-2.37 3.22 26.89 26.89 0 0 0 37.6-37.57Z'
                data-name='Layer 14'
                style={{
                  fill: '#f0bf0e',
                }}
              />
            </svg>
          </button>
        </div>
      </div>

      <p className='text-[--accentcolor] font-black tracking-[10px] text-center mt-[25vh] mb-5'>CONTACT</p>

      <form
        onSubmit={handleSubmit}
        ref={ref3}
        className='flex flex-col justify-center gap-2 max-w-[500px] p-5 mx-auto'>
        {/* animate-fadeOUT */}
        <div className='styled-input'>
          <input
            ref={refName}
            required
            type='text'
            id='name'
            name='name'
          />
          <label>Name*</label>
        </div>
        {err.name && <span className='animate-fadeUP1 text-[--accentcolor]'>{err.name}</span>}
        <div className='styled-input'>
          <input
            ref={refEmail}
            required
            type='text'
            id='email'
            name='email'
          />
          <label>Email*</label>
        </div>
        {err.email && <span className='animate-fadeUP1 text-[--accentcolor]'>{err.email}</span>}
        <div className='styled-input h-[200px!important]'>
          <textarea
            ref={refMessage}
            required
            type='text'
            id='message'
            name='message'
            cols='22'
            className='h-[200px]'></textarea>
          <label>Message*</label>
        </div>
        {err.message && <span className='animate-fadeUP1 text-[--accentcolor]'>{err.message}</span>}

        <div className='styled-input w-100'>
          <button
            type='submit'
            className='bg-[--lightthemecolor] text-black'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
