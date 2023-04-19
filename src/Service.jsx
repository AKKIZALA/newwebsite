import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
  return (
    <>
     <div className="my5">
      <h1 className='text-center'> Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            {
              Sdata.map((vel,ind) => {
                  return <Card
                  key={ind}
                  imgsrc={vel.imgsrc}
                  title={vel.title}
                  />
              })
            }
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service