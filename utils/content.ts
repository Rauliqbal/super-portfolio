export const NAVLINKS= [
  {
    label : 'Service',
    url: '/'
  },
  {
    label : 'Works',
    url: '#work'
  },
  {
    label : 'About',
    url: '#about'
  },
  {
    label : 'Store',
    url: '#store'
  },
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
  badge: 'Available for freelance',
  headline: `Hey, I'm ${PROFILE.lastname}. I'm a ${PROFILE.role}`,
  subline : "I am a developer and designer who has a passion for building responsive, cool looking, and easy to visit website applications."
}

export const SERVICE = {
  label: 'service',
  headline: 'Custom design solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  services: [
    {
      name: "Web Development",
      icon: 'Scroll',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
    {
      name: "Mobile Development",
      icon: 'MobileProgramming',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: 'https://cdn.dribbble.com/userupload/36796487/file/original-436c64a72733941273f9fd1f4d994883.jpg?resize=752x&vertical=center'
    },
    {
      name: "UI/UX Designer",
      icon: 'PenTool2',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
    {
      name: "Graphic Design",
      icon: 'Designtools',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores!',
      thumbnails: ''
    },
  ]
}