import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Layout from '@/components/Layout';


const uploadFile = async (event: any) => {

  var file;

  // setShowLoader(true);
  if (event.target.files && event.target.files[0]) {
    file = event.target.files[0];
  }
  const formData = new FormData();
  formData.append("uploadedFile", file);
  formData.append("file_type", "kyc-data");
  const response = await fetch("/api/common/file-upload", {
    method: "POST",
    body: formData
  });
  const responseBody = await response.json();
  // setShowLoader(false);
  
}


async function submitForm(event: any) {

  event.preventDefault();
  console.log(event.target.authorised_signatory_pan);
  const data = {
    supplier_name : event.target.supplier_name.value,
    authorised_signatory_name : event.target.authorised_signatory_name.value,
    authorised_signatory_email : event.target.authorised_signatory_email.value,
    authorised_signatory_mobile_number : event.target.authorised_signatory_mobile_number.value,
    address : event.target.address.value,
    city : event.target.city.value,
    state: event.target.state.value,
    pin_code: event.target.pin_code.value,
    authorised_signatory_pan: event.target.authorised_signatory_pan.value,
    authorised_signatory_aadhar: event.target.authorised_signatory_aadhar.value,
  };
  console.log(data)
  
  const response = await fetch("/api/anchor", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  console.log(json);
}

const AddNew: NextPage = () => { 

  return (
      <Layout>
          <form action='/api/anchor' method='post'>

            <label htmlFor="first">Name on Supplier (Anchor)</label>
            <input type="text" id="first" name="supplier_name" required />

            <label htmlFor="last">Authorised Signatory Name</label>
            <input type="text" id="last" name="authorised_signatory_name" required />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="authorised_signatory_email" required />

            <label htmlFor="mobile">Mobile number (linked with Aadhar)</label>
            <input type="text" id="mobile" name="authorised_signatory_mobile_number" required />

            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" required />
            <label htmlFor="pin_code">Pin Code</label>
            <input type="text" id="pin_code" name="pin_code" required />

            <label htmlFor="kyc_pan">KYC - PAN Card of Authorised Signatory</label>
            <input type="file" id="kyc_pan" name="authorised_signatory_pan" onChange={uploadFile} />

            <label htmlFor="kyc_aadhar">KYC - Aadhar Card of Authorised Signatory</label>
            <input type="file" id="kyc_aadhar" name="authorised_signatory_aadhar" onChange={uploadFile} />

            <button type="submit" >Submit</button>
          </form>
      </Layout>
          
  )
}

export default AddNew









  
