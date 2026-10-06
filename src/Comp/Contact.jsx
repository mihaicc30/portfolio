import { useState } from 'react'
import { db } from '../App.jsx'
import { collection, addDoc } from 'firebase/firestore'

const emailRegex =
  /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Name is too short.'
    if (!form.email) next.email = 'Email is required.'
    else if (!emailRegex.test(form.email)) next.email = 'Email looks invalid.'
    if (form.message.trim().length < 3) next.message = 'Message is too short.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      await addDoc(collection(db, 'messages'), {
        name: form.name,
        email: form.email,
        message: form.message,
        date: new Date(),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <section
        id='contact'
        className='max-w-content mx-auto px-6 py-24 border-t border-line'>
        <p className='mono text-sm text-accent'>// contact</p>
        <p className='text-lg mt-6'>Message sent. I&apos;ll get back to you soon.</p>
      </section>
    )
  }

  return (
    <section
      id='contact'
      className='max-w-content mx-auto px-6 py-24 border-t border-line'>
      <p className='mono text-sm text-accent'>// contact</p>
      <h2 className='font-display font-semibold text-3xl mt-4'>Get in touch</h2>
      <p className='text-inksoft mt-3 max-w-[50ch]'>
        Have a project, a role, or a question? Send a message below, or connect on{' '}
        <a
          href='https://www.linkedin.com/in/mihai-culea-614747227/'
          target='_blank'
          rel='noreferrer'
          className='text-accent underline'>
          LinkedIn
        </a>
        .
      </p>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 max-w-[480px] mt-8'
        noValidate>
        <div>
          <label
            htmlFor='name'
            className='mono text-xs text-inksoft uppercase tracking-wider'>
            Name
          </label>
          <input
            id='name'
            type='text'
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className='w-full mt-1.5 px-3 py-2.5 bg-surface border border-line rounded-sm focus:border-accent outline-none'
          />
          {errors.name && <p className='text-sm text-accent mt-1'>{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor='email'
            className='mono text-xs text-inksoft uppercase tracking-wider'>
            Email
          </label>
          <input
            id='email'
            type='email'
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className='w-full mt-1.5 px-3 py-2.5 bg-surface border border-line rounded-sm focus:border-accent outline-none'
          />
          {errors.email && <p className='text-sm text-accent mt-1'>{errors.email}</p>}
        </div>

        <div>
          <label
            htmlFor='message'
            className='mono text-xs text-inksoft uppercase tracking-wider'>
            Message
          </label>
          <textarea
            id='message'
            rows={5}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            className='w-full mt-1.5 px-3 py-2.5 bg-surface border border-line rounded-sm focus:border-accent outline-none resize-none'
          />
          {errors.message && <p className='text-sm text-accent mt-1'>{errors.message}</p>}
        </div>

        <button
          type='submit'
          disabled={status === 'sending'}
          className='self-start px-5 py-3 bg-ink text-paper rounded-sm text-sm font-medium hover:bg-accent transition-colors disabled:opacity-50'>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'error' && (
          <p className='text-sm text-accent'>Something went wrong. Try emailing me directly.</p>
        )}
      </form>
    </section>
  )
}

export default Contact
