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
  avatar: '/images/profile.jpg'
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

export const WORK = {
  label: 'work',
  headline: 'Custom design solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  works: [
    {
      name: "WeServe Hosting Provider",
      live_demo: 'https://azurakit.vercel.app/product/zzdtutRC_KJfbcWO1GA7vw==',
      description: 'This website is to improve your business as a software house and reach more customers.',
      thumbnails: 'https://azurakit.vercel.app/_next/image?url=https%3A%2F%2Fpublic-files.gumroad.com%2Fwd37reb16onszq4sno984oxgqw9v&w=828&q=75',
      type: 'landing page'
    },
    {
      name: "FurniLux",
      live_demo: 'https://azurakit.vercel.app/product/dtq8B4VppLl7vy3mznzIdA==',
      description: 'Make your home comfortable with best furniture.',
      thumbnails: 'https://azurakit.vercel.app/_next/image?url=https%3A%2F%2Fpublic-files.gumroad.com%2Fsz0z5ps0a66qxbumvbdvlwxesf6h&w=828&q=75',
      type: 'landing page'
    },
    {
      name: "Let's Food UI Kit",
      live_demo: 'https://azurakit.vercel.app/product/DEmTK1qQqBqRsBe2ynD9gg==',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum distinctio dolores.',
      thumbnails: 'https://azurakit.vercel.app/_next/image?url=https%3A%2F%2Fpublic-files.gumroad.com%2Fstcc37agb2vohgrpijaf9p4p5skj&w=828&q=75',
      type: 'Web Design'
    },
    {
      name: "Creative Agency",
      live_demo: 'https://azurakit.vercel.app/product/gsveMBZj4uAEFyKaJHlSgw==',
      description: 'This website is to improve your business as a software house and reach more customers.',
      thumbnails: 'https://azurakit.vercel.app/_next/image?url=https%3A%2F%2Fpublic-files.gumroad.com%2F26w851qbqig4m1ocg6ovxyzdulhk&w=828&q=75',
      type: 'Web Company'
    },
  ]
}

export const ABOUT = {
  label: 'Let me introduce my self',
  introduce: [
    `My name is ${PROFILE.fullname}, and I am a passionate ${PROFILE.role}. I specialize in creating seamless and visually appealing user interfaces, combining design and development to enhance user experiences.`,
    "I love turning ideas into interactive and functional web applications. Excited to collaborate and build amazing digital products together!"
  ]
}