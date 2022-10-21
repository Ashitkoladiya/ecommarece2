import React from 'react';

const  Navbar=({filterItem,uniqueList}) =>{
    
    return (
        <>
            <nav>
                <div className='container'>
                <div className='row'>
                    <div>

                        <ul className='d-flex p-0  navbar-filter '>
                        {
                            uniqueList.map((valcat,index)=>{
                                return(
                                    <>
                                    <li className='nav-link btn btn-dark mx-3 mb-5' key={index} data-filter="" onClick={()=>{
                                        filterItem(valcat)
                                    }}>{valcat}</li>
                                    </>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;