import React, { useState } from 'react';
import styles from './Set.module.css'

const Set = () => {

  const [size, setSize] = useState(false);

  const onClick = () => {
    setSize(!size)
  }

  return (
    <div className={(size) ? styles.setBig : styles.setSmall} onClick={onClick}>
      Set
    </div>
  )

}

export default Set;