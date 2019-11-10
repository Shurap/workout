import React from 'react';

import imgNone from './images/muscleman.jpg'
import imgAbd from './images/abd.png';
import imgBiceps from './images/biceps.png';
import imgCalves from './images/calves.png';
import imgChest from './images/chest.png';
import imgGlutes from './images/glutes.png';
import imgHamstrings from './images/hamstrings.png';
import imgLats from './images/lats.png';
import imgLowerBack from './images/lowerback.png';
import imgMiddleBack from './images/middleback.png';
import imgNeck from './images/neck.png';
import imgQuads from './images/quads.png';
import imgShoulders from './images/shoulders.png';
import imgTraps from './images/traps.png';
import imgTriceps from './images/triceps.png';

const withImages = (Component) => {

  const WrapperComponent = (props) => {

    const imageShow = {
      'Abd': imgAbd,
      'Biceps': imgBiceps,
      'Calves': imgCalves,
      'Chest': imgChest,
      'Glutes': imgGlutes,
      'Hamstrings': imgHamstrings,
      'Lats': imgLats,
      'Lowerback': imgLowerBack,
      'MiddleBack': imgMiddleBack,
      'Neck': imgNeck,
      'Quads': imgQuads,
      'Shoulders': imgShoulders,
      'Traps': imgTraps,
      'Triceps': imgTriceps,
      'No group': imgNone,
    }

    return <Component {...props} imageShow={imageShow} />
  }

  return WrapperComponent;
}

export default withImages;