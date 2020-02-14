import React from 'react';
import withImage from '../../../hocs/withImage/withImage';
import { connect } from 'react-redux';
import styles from './ImageExercise.module.css';

const ImageExercise = (props) => {

  return (
    <div className={styles.imageExercise}>
      <img className={styles.image} src={props.imageShow[props.imageName]} alt="" />
    </div>
  )
}

const mapStateToProps = (state) => ({ imageName: state.windowNewExercise.groupImage });

export default withImage(connect(mapStateToProps)(ImageExercise));
