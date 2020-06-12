import React from 'react';

const Card = ({name, email, id}) => {
      return(

       <div className='tc bg-light-green dib bw2 pa3 br3 shadow-5 grow ma2'> 
	      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
  	         <div>
	      	     <h2>{name}</h2>
	      	     <p>{email}</p>
  	         </div>
       </div>
     );
}

export default Card;