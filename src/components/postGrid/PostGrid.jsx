import React from 'react'
import styles from './postGrid.module.scss'
import cl from 'classnames'

const PostGrid = ({className, children}) => {
  return (
    <div className={cl(className, styles.postGrid)}>
      {children}
    </div>
  )
}

export default PostGrid
