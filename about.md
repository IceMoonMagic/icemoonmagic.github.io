---
outline: false
sidebar: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: "https://avatars.githubusercontent.com/u/60945630",
    name: 'IceMoonMagic',
    links: [
      { icon: 'github', link: 'https://github.com/icemoonmagic' },
      { icon: 'discord',link: 'https://discord.com/users/612101930985979925'},
      { icon: 'itchdotio', link: 'https://icemoonmagic.itch.io' },
    //   { icon: 'x', link: 'https://twitter.com/icemoonmagic' },  // inactive
    //   { icon: 'reddit', link: 'https://reddit.com/u/icemoonmagic' },  // inactive
      { icon: 'twitch', link: 'https://twitch.tv/icemoonmagic'},
      { icon: 'gmail', link: 'mailto:icemoonmagic@gmail.com'}
    ],
  },
]
</script>

# About Me

Hi! I'm IceMoonMagic / RobotiCat, or those are my primary pseudonyms.
I've somewhat recently graduated university and enjoy sometimes working my personal projects.

I've been learning programming since mid high school
(so for about {{ (new Date()).getFullYear() - 2016 }} years),
and have messing with Linux on and off for just about as long.
Though, I have been primarily using Linux
for about {{ (new Date()).getFullYear() - 2021 }} years
(using Windows only when I _have_ to for compatibility reasons).

I'm primarly experienced with python but have occasionally used other languages,
such as TypeScript and recently GDScript.
I also have some experience self hosting some applications with the help of docker.

## Accounts

<VPTeamMembers :members align="center" />
