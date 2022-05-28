import React from 'react';
import Layout from '@/components/Layout';
import {Form} from '@/components/Form';

const Popup = () => {  
  return (
   
    <Layout>

        <div className="popup">
        <div className="popup__content">
          <form >
             <Form />
            {/* <label htmlFor="first">Name on Supplier (Anchor)</label>
            <input type="text" id="first" name="supplier_name" required />


            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="authorised_signatory_email" required />

            <label htmlFor="mobile">Mobile number (linked with Aadhar)</label>
            <input type="text" id="mobile" name="authorised_signatory_mobile_number" required />

            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
            <label htmlFor="kyc_pan">KYC - PAN Card of Authorised Signatory</label>
            <input type="file" id="kyc_pan" name="authorised_signatory_pan" />

            <label htmlFor="kyc_aadhar">KYC - Aadhar Card of Authorised Signatory</label>
            <input type="file" id="kyc_aadhar" name="authorised_signatory_aadhar" />

            <button type="submit" >Submit</button>} */ }
          </form>
          </div>
          </div>
          
      </Layout>
  )
}

export default Popup;