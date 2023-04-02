import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';
import { Wrap} from '@chakra-ui/react';

function Stars({stars}){


    
    const ratingStar = Array.from({length : 5}, (elem,index)=>{
        let number= index+0.5;

return <span key={index}>
{
    stars >= index+1 ? <FaStar className='icon'/> : stars >= number ? <FaStarHalfAlt className='icon'/> : <AiOutlineStar className='icon'/>
    
    }
</span>

    })


    return (
        <div>
      <ratingStar/>
        </div>
    )
};


export default Stars;