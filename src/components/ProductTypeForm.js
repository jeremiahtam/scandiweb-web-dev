import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ProductTypeForm = ({type, onChange}) => {

  switch (type) {
    case 'DVD':
      return (
        <>
          <div className="mb-2 row">
            <label className="col-sm-4 col-form-label">Size (MB)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="size" onChange={onChange}/>
              <div className="form-error">
                <ErrorMessage name="size" />
              </div>
            </div>
          </div>
          <div className="form-text">
            Please provide DVD size in MB
          </div>
        </>
      )
    case 'Book':
      return (
        <>
          <div className="mb-2 row">
            <label className="col-sm-4 col-form-label">Weight (KG)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputPassword" onChange={onChange} />
              <div className="form-error">
                <ErrorMessage name="weight" />
              </div>
            </div>
          </div>
          <div className="form-text">
            Please provide book weight in kg
          </div>
        </>
      )
    case 'Furniture':
      return (
        <>
          <div className="mb-2 row">
            <label className="col-sm-4 col-form-label">Height (CM)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="height" onChange={onChange} />
              <div className="form-error">
                <ErrorMessage name="height" />
              </div>
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-sm-4 col-form-label">Width (CM)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="width" onChange={onChange} />
              <div className="form-error">
                <ErrorMessage name="width" />
              </div>
            </div>
          </div>
          <div className="mb-2 row">
            <label className="col-sm-4 col-form-label">Length (CM)</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="length" onChange={onChange} />
              <div className="form-error">
                <ErrorMessage name="length" />
              </div>
            </div>
          </div>
          <div className="form-text">
            Provide furniture dimensions in the form HxWxL all in CM
          </div>
        </>
      )
    default:
      return (
        <>
        </>
      )
  }
}

export default ProductTypeForm
