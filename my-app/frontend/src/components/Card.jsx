import React from 'react'

export default function 
() {
  return (
    <div>
         <div className="card mt-3" style={
          {
            "width": "18rem",
            "maxHeight":"360px"
            }}>
          <img src="https://www.cookwithmanali.com/wp-content/uploads/2021/06/Hariyali-Paneer-Tikka-480x270.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is some important text</p>
                  <div className="container w-100">
                <select className="m-2 h-100 bg-success rounded" >
                  {
                    Array.from(Array(6),(e,i)=>{
                      return(
                        <option value={i+1} key={i+1}> {i+1} </option>
                      )
                    })
                  }
                </select>
                <select className="m-2 h-100 bg-success rounded" >
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>
                <div className="d-inline h-100 fs-5"> Total Price</div>
              </div>
            </div>
        </div>
    </div>
  )
}
