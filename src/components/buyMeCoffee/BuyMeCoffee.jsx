import React from 'react'
import styles from './buyMeCoffee.module.scss'
import cl from 'classnames'
import ScreenEgg from '../screenEgg/ScreenEgg'

const BuyMeCoffee = ({className}) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(styles.buyCoffee, className)}>
        <a href="www.codecrafters.online" target='_blank'
        className={styles.buyCoffeeButton}
        rel='noopener'>Buy me a coffee ...</a>
      </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee
