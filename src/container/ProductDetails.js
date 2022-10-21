import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { addCart } from '../redux/action/cart.action';

function ProductDetails(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const productval = [props.location.state]
  console.log(productval);

  
  const handleCart = (d)=>{
    dispatch(addCart(d));
    console.log(d);
    history.push('/Cart')

    
  }
  return (
    <div>
      {
        productval.map((d) => {
          return (
            <>
              <div className='container'>
                <div className='row'>
                  <>
                    <div>
                      <img className="pb-5 w-200 pr-5 pl-5" src={d.url} />
                      <div className='pl-5'>
                        <h6>Name:{d.productname}</h6>
                        <p>price:{d.price}</p>
                        <p>Category:{d.categoryname}</p>
                        <button className='btn btn-dark px-3' onClick={()=>handleCart(d)}>Add to Cart</button>
                        <button className='btn btn-dark mx-3'>Buy Now</button>
                      </div>
                    </div>
                  </>

                </div>
              </div>
            </>
          )
        })
      }

    </div>
  );
}

export default ProductDetails;