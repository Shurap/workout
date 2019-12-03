import React from 'react';
import withImage from '../../../hocs/withImage/withImage';

// import imgNone from '../../../images/muscleman.jpg'
// import imgAbd from '../../../images/abd.png';
// import imgBiceps from '../../../images/biceps.png';
// import imgCalves from '../../../images/calves.png';
// import imgChest from '../../../images/chest.png';
// import imgGlutes from '../../../images/glutes.png';
// import imgHamstrings from '../../../images/hamstrings.png';
// import imgLats from '../../../images/lats.png';
// import imgLowerBack from '../../../images/lowerback.png';
// import imgMiddleBack from '../../../images/middleback.png';
// import imgNeck from '../../../images/neck.png';
// import imgQuads from '../../../images/quads.png';
// import imgShoulders from '../../../images/shoulders.png';
// import imgTraps from '../../../images/traps.png';
// import imgTriceps from '../../../images/triceps.png';
import { connect } from 'react-redux';
import styles from './ImageExercise.module.css';

const ImageExercise = (props) => {

  // const imageShow = () => {
  //   switch (props.imageName) {
  //     case 'Abd':
  //       return imgAbd;

  //     case 'Biceps':
  //       return imgBiceps;

  //     case 'Calves':
  //       return imgCalves;

  //     case 'Chest':
  //       return imgChest;

  //     case 'Glutes':
  //       return imgGlutes;

  //     case 'Hamstrings':
  //       return imgHamstrings;

  //     case 'Lats':
  //       return imgLats;

  //     case 'Lowerback':
  //       return imgLowerBack;

  //     case 'MiddleBack':
  //       return imgMiddleBack;

  //     case 'Neck':
  //       return imgNeck;

  //     case 'Quads':
  //       return imgQuads;

  //     case 'Shoulders':
  //       return imgShoulders;

  //     case 'Traps':
  //       return imgTraps;

  //     case 'Triceps':
  //       return imgTriceps;

  //     default:
  //       return imgNone;
  //   }
  // }

  return (
    <div className={styles.imageExercise}>
      {/* <img className={styles.image} src={imageShow()} alt="" /> */}
      <img className={styles.image} src={props.imageShow[props.imageName]} alt="" />

    </div>
  )
}

const mapStateToProps = (state) => ({ imageName: state.windowNewExercise.groupImage });

export default withImage(connect(mapStateToProps)(ImageExercise));
