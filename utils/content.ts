export const NAVLINKS= [
  {
    label : 'Home',
    url: '/'
  },
  {
    label : 'Service',
    url: '/'
  },
  {
    label : 'Store',
    url: '#store'
  },
  {
    label : 'Contact Me',
    url: '#contact-me'
  }
]

export const PROFILE = {
  firstname : 'Muhamad',
  lastname: 'Raul Iqbal',
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  },
  role : 'Front-End Developer & UI Designer',
  avatar: '/images/'
}

export const HERO = {
  badge: 'I am currently working as a front end developer',
  headline: "Crafting Crazy Experiences, One Pixel at a Time.",
  subline : "I am a developer and designer who has a passion for building responsive, cool looking, and easy to visit website applications."
}