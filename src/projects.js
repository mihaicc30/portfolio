const projects = [
  {
    name: 'Point of Sale App v2',
    description:
      'Second-generation POS rebuilt on Vue and Node, with real-time order sync over WebSocket and a MySQL backend.',
    img: '/assets/ProjectSS/EposV2.JPG',
    stack: ['Vue', 'JavaScript', 'Tailwind', 'Node.js', 'MySQL', 'WebSocket'],
    links: [
      { label: 'Office', url: 'https://demo.fimiar.co.uk/office' },
      { label: 'Till App', url: 'https://demo.fimiar.co.uk/app' },
      { label: 'Mobile Till App', url: 'https://demo.fimiar.co.uk/mini' },
      { label: 'Video Demo', url: 'https://youtu.be/hbuLIfZNyEI' },
    ],
  },
  {
    name: 'Point of Sale Bookings App',
    description:
      'Table and event booking system that pairs with the EPOS point-of-sale, managing reservations, availability and customer details.',
    img: '/assets/ProjectSS/EposBookings.png',
    links: [
      { label: 'Customer Portal', url: 'https://qr.fimiar.co.uk/' },
      {
        label: 'Bookings Management',
        url: 'https://qr.fimiar.co.uk/management/blackthorn-hospitality-group/the-tipsy-badger-1',
      },
      { label: 'Video Demo', url: 'https://youtu.be/lYlcMLOGhjU' },
    ],
    stack: ['Vue', 'JavaScript', 'Tailwind', 'CodeIgniter', 'PHP', 'MySQL', 'REST APIs', 'Stripe'],
  },
  {
    name: 'CCW Logistics',
    description:
      'Job and payment tracking platform for a logistics business, built on React and Node with Firebase and Stripe billing.',
    img: '/assets/ProjectSS/CCWLogistics.JPG',
    stack: ['React', 'Node.js', 'Firebase', 'Stripe'],
    links: [
      { label: 'Customer Portal', url: 'https://ccwlogistics.web.app/' },
      { label: 'Video Demo', url: 'https://youtu.be/lVTfocXfCAk' },
    ],
  },
]

export default projects
