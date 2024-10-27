import React from 'react'

const Icon = ({ img, delay }) => {
  let thedelay = delay ? delay : 0
  const getTitle = () => {
    if (img.includes('Icons/ML.png')) {
      return 'Machine Learning'
    } else if (img.includes('TS')) {
      return 'TypeScript'
    } else if (img.includes('NJS')) {
      return 'NextJS'
    } else if (img.includes('PYT')) {
      return 'Python'
    } else if (img.includes('LARA')) {
      return 'Laravel'
    } else if (img.includes('Android')) {
      return 'Android'
    } else if (img.includes('API')) {
      return 'API'
    } else if (img.includes('Bootstrap')) {
      return 'Bootstrap'
    } else if (img.includes('Cordova')) {
      return 'Cordova'
    } else if (img.includes('CSS')) {
      return 'CSS'
    } else if (img.includes('FB')) {
      return 'Firebase'
    } else if (img.includes('GH')) {
      return 'GitHub'
    } else if (img.includes('HTML')) {
      return 'HTML'
    } else if (img.includes('JS')) {
      return 'Javascript'
    } else if (img.includes('LI')) {
      return 'LinkedIn'
    } else if (img.includes('MG')) {
      return 'Mongoose'
    } else if (img.includes('MONGO')) {
      return 'MongoDB'
    } else if (img.includes('MYSQL')) {
      return 'MySQL'
    } else if (img.includes('NODE')) {
      return 'NodeJS'
    } else if (img.includes('RE')) {
      return 'ReactJS'
    } else if (img.includes('SEQ')) {
      return 'Sequelize'
    } else if (img.includes('STRIPE')) {
      return 'Stripe Payments'
    } else if (img.includes('TW')) {
      return 'TailwindCSS'
    } else if (img.includes('PYGAME')) {
      return 'PYGAME'
    } else {
      return ''
    }
  }

  return (
    <img
      src={img}
      className='h-[50px] w-[50px] hover:cursor-pointer rounded ani-before ani-start'
      title={getTitle()}
    />
  )
}

export default Icon
