import React from 'react'

const AddNewExp = () => {

  return (
          <>
              <h4>Agregá un nuevo expediente </h4>
              <div className='container-fluid'>
                <div className='row justify-content-center'>
                  <div className='col-6'>
                    <label for="exampleFormControlInput1" class="form-label">Empresa</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className='container-fluid'>
                  <div className='row justify-content-center'>
                    <div className='col-6'>
                      <label for="exampleFormControlInput1" class="form-label">Nro. GDEBA</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                  </div>
                </div>
              </div>
          </>
  )
};
export default AddNewExp;