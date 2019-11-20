import React from 'react';
import styles from './ListSets.module.css';
import Set from './Set';
import { getSetsFromStore } from '../../../selectors';
import { connect } from 'react-redux';

const ListSets = (props) => {

  const arraySets = props.currentListSets.map((element, index) => {
    return (
      <Set
        key={element.id}
        count={element.count}
        wight={element.wight}
        number={index}
      />
    )
  });

  return (
    <div className={styles.listSets}>
      <div className={styles.wrapperText}>

      </div>
      <div className={styles.wrapperSets}>
        <div className={styles.scroll}>
          {arraySets}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  currentListSets: getSetsFromStore(state, ownProps.exercise, ownProps.date),
});

export default connect(mapStateToProps)(ListSets);