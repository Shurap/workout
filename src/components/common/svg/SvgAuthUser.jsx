import React from 'react';
import styles from './SvgAuthUser.module.css';

const SvgAuthUser = (props) => {

  const stylesStroke = {
    stroke: props.color
  }

  return (
    <div className={styles.wrapperSvg}>
      <svg className={styles.svg} style={stylesStroke} x="0px" y="0px" viewBox="0 0 30 30" height="40px" width="40px">
        <path className={styles.path} strokeWidth="1"
        d="M11.512.078c-.52.082-1.164.305-1.715.582-2.113 1.067-3.578 3.262-3.875 5.8a13.41 13.41 0 00-.016 1.942c.184 1.82.887 3.371 2.094 4.63.61.632 1.203 1.073 1.902 1.417a5.84 5.84 0 003.762.469c2.8-.582 4.91-3.004 5.395-6.191.066-.438.093-1.543.043-1.997-.188-1.894-.973-3.605-2.215-4.847A6.393 6.393 0 0013.699.12c-.261-.058-.433-.066-1.117-.078-.602-.008-.879 0-1.07.035zm0 0M15.828 15.762c-.867.39-1.68.625-2.512.73-.43.055-1.379.051-1.82-.015a7.55 7.55 0 01-2.113-.618c-.516-.238-.7-.312-.75-.316-.121 0-5.25 2.777-6.672 3.613-.527.313-.863.602-1.215 1.047-.555.707-.726 1.211-.726 2.121-.004.61.05.848.3 1.36a3.445 3.445 0 002.008 1.757l.29.098.886.023c.492.012 3.848.024 7.465.024l6.57.004v-.13c0-1.175.809-2.405 1.953-2.98.281-.14.778-.3 1.078-.343.371-.051.953-.02 1.32.078.684.176 1.075.394 1.696.945l.203.184.488-.489c.27-.265.528-.539.57-.601.118-.168.126-.387.032-.758a3.387 3.387 0 00-.93-1.621c-.48-.457-.816-.668-2.672-1.664a367.397 367.397 0 01-4.09-2.238c-.351-.196-.68-.38-.734-.407-.086-.043-.101-.039-.625.196zm0 0"/>
        <path className={styles.path1} strokeWidth="1.5"
        d="M27.844 22.035c-.45.11-.672.3-2.809 2.422l-1.183 1.176-.594-.578c-1.106-1.09-1.324-1.239-1.871-1.293-.395-.04-.73.004-.985.129-.398.199-.824.672-.918 1.027-.062.23-.062.793 0 1.055.036.144.086.261.18.394.398.551 2.516 2.801 3.02 3.203.125.102.32.227.43.278.195.09.206.093.656.093.433 0 .468-.003.628-.078.301-.14.707-.492 1.778-1.535 1.012-.976 2.797-2.781 3.168-3.195.535-.602.656-.86.656-1.36-.004-.554-.145-.894-.535-1.261-.485-.453-1.035-.617-1.621-.477zm0 0"/>
      </svg>
    </div>
  )
}

export default SvgAuthUser;