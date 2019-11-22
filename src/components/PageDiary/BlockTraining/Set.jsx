import React, { useState, useEffect } from 'react';
import styles from './Set.module.scss';
import arrow from '../../../images/arrow.png';
import forward from '../../../images/forward.png';
import ReactDOM from 'react-dom';

const Set = (props) => {

  const [size, setSize] = useState(false);
  const [weight, setWeight] = useState(props.weight);


  // useEffect(() => {
  //   console.log('in');
  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     console.log('out');
  //     document.removeEventListener('click', handleClickOutside)
  //   }
  // }, [])

  // const handleClickOutside = (event) => {
  //   const domNode = ReactDOM.findDOMNode(this);
  //   console.log(domNode)
  // }


  const onClick = () => {
    setSize(!size)
  }

  const onClickInput = (event) => {
    event.stopPropagation();
  }

  const onChangeWeight = (event) => {
    // event.stopPropagation();
    setWeight(event.target.value)
  }

  const onClickButtonLeftWeight = (event) => {
    event.stopPropagation();
    setWeight(+weight - 1);
  }

  const onClickButtonLeftForwardWeight = (event) => {
    event.stopPropagation();
    setWeight(+weight - 10);
  }

  const onClickButtonRightWeight = (event) => {
    event.stopPropagation();
    setWeight(+weight + 1);
  }

  const onClickButtonRightForwardWeight = (event) => {
    event.stopPropagation();
    setWeight(+weight + 10);
    // event.target.value = weight;
  }

  return (
    <div className={(size) ? styles.setBig : styles.setSmall} onClick={onClick}>
      <div className={styles.wrapperSet}>set {props.number + 1}</div>
      {
        (size) ?
          <div className={styles.wrapperEditButtons}>
            <img
              className={styles.buttonLeftForward}
              src={forward}
              onClick={onClickButtonLeftForwardWeight}
            />
            <img
              className={styles.buttonLeft}
              src={arrow}
              onClick={onClickButtonLeftWeight}
            />
            <input
              className={styles.edit}
              value={weight}
              // defaultValue={weight}
              onChange={onChangeWeight}
              onClick={onClickInput}
            />
            <img
              className={styles.buttonRight}
              src={arrow}
              onClick={onClickButtonRightWeight}
            />
            <img
              className={styles.buttonRightForward}
              src={forward}
              onClick={onClickButtonRightForwardWeight}
            />
          </div> :
          <div className={styles.wrapperWeight}>{weight}</div>
      }
      <div className={styles.wrapperCount}>{props.count}</div>
    </div>
  )

}

export default Set;