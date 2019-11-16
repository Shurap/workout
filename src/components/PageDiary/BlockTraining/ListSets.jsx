import React from 'react';
import styles from './ListSets.module.css';
import Set from './Set';
import { getSetsFromStore } from '../../../selectors';
import {connect} from 'react-redux';

const ListSets = (props) => {
  // console.log(props.currentListSets);
  return (
    <div className={styles.listSets}>
      <Set />
      <Set />
      <Set />
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentListSets: getSetsFromStore(state),
});

export default connect(mapStateToProps)(ListSets);