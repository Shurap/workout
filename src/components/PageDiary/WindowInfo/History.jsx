import React from 'react';

const History = (props) => {

  const dataIn = props.data.map((element, index) => {
    return (
      <div key={index}>
        <div>
          {element.wight}
        </div>
        <div>
          {element.count}
        </div>

      </div>
    )
  });


  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        <p>repeat</p>
        <p>weight</p>
      </div>
      {dataIn}

    </div>
  )

}

export default History;


// const dataIn = this.props.data.map((element, index) => {
//   return (
//     <div className={styles.wrapperNumbers} key={index}>
//       <div className={styles.wrapperWight}>
//         {element.wight}
//       </div>
//       <div className={styles.wrapperCount}>
//         {element.count}
//       </div>

//     </div>
//   )
// });

// return (
//   <div className={styles.history}>
//     <div className={styles.wrapperData}>
//       {this.props.name}
//     </div>
//     <div className={styles.wrapperText}>
//       <p>repeat</p>
//       <p>weight</p>
//     </div>
//     {dataIn}

//   </div>
// )
// }