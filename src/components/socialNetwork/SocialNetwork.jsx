import React from 'react'
import styles from './socialNetwork.module.scss'
import cl from 'classnames'
import { FaTelegramPlane, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ScreenEgg from '../screenEgg/ScreenEgg'

const socialNetworks = [
  {
    id: 1,
    href: 'https://t.me/',
    icon: <FaTelegramPlane />,
  },
  {
    id: 2,
    href: 'https://github.com/',
    icon: <FaGithub />,
  }, 
  {
    id: 3,
    href: 'https://www.linkedin.com/',
    icon: <FaLinkedinIn />,
  },
  {
    id: 4,
    href: 'https://twitter.com/',
    icon: <FaTwitter />,
  }
]

const SocialNetwork = ({className}) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetworks) => (
          <li 
          key={socialNetworks.id}
          className={styles.listItem}
          >
            <a 
            href={socialNetworks.href} 
            target='_blank'
            className={styles.listLink}
            rel='noreferrer'
            >
              {socialNetworks.icon } 
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetwork
