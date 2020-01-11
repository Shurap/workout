import React from 'react';
import withImage from '../../hocs/withImage/withImage';
import { connect } from 'react-redux';
import styles from './CurrentImage.module.scss';

const CurrentImage = (props) => {

  return (
    <div className={styles.currentImage}>
      {props.imageName}
      <img className={styles.image} src={props.imageShow[props.imageName]} alt="" />
    </div>
  )
}

const mapStateToProps = (state) => ({ imageName: state.currentImage.currentImage });

export default withImage(connect(mapStateToProps)(CurrentImage));