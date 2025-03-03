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
  badge: 'Hello Im Rauliqbal',
  headline: "Crafting Crazy Experiences, One Pixel at a Time.",
  subline : "I am a developer and designer who has a passion for building responsive, cool looking, and easy to visit website applications."
}

export const SERVICE = {
  label: 'service',
  headline: 'Custom design solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  services: [
    {
      name: "Web Development",
      icon: '',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
    {
      name: "UI/UX Designer",
      icon: '',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
  ]
}