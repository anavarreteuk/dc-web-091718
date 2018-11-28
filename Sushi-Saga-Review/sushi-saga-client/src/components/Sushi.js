import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={()=>props.handleEaten(props.sushi)}>
        {props.taken ? null : <img src={props.sushi.img_url} alt={"sushi"} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
//
// <div className="sushi">
//   <div className="plate"
//        onClick={/* Give me a callback! */ null}>
//     {
//       /* Tell me if this sushi has been eaten! */
//       true ?
//         null
//       :
//         <img src={/* Give me an image source! */} width="100%" />
//     }
//   </div>
//   <h4 className="sushi-details">
//     {/* Give me a name! */} - ${/* Give me a price! */}
//   </h4>
// </div>
