import { Formik, Field, ErrorMessage, Form } from 'formik';
import { string, object } from 'yup';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const EmailForm = () => {

  const [showConfirmation, setShowConfirmation] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = object({
    name: string().max(30, 'Name too long').required('Required'),
    email: string().email('Email is not valid').required('Required'),
    message: string().max(10000, 'Your message is too long').required('Required')
  });

  const onSubmit = (values, actions) => {
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_CONTACT_FORM_NAME, values, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
        actions.setSubmitting(false);
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
        }, 3000);
      }, (error) => {
        console.log(error.text);
        actions.setSubmitting(false);
      });
  }

  return (
    <div className='contact' id='contact'>
      <h1 className='title'>Contact</h1>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='form-fields'>
              <div><label htmlFor='name'>Name: </label></div>
              <Field id='name' name='name' />
              <ErrorMessage name='name' render={errorMessage => <div className='error-message'>{errorMessage}</div>} />
            </div>

            <div className='form-fields'>
              <div><label htmlFor='email'>Email: </label></div>
              <Field id='email' name='email' />
              <ErrorMessage name='email' render={errorMessage => <div className='error-message'>{errorMessage}</div>} />
            </div>

            <div className='form-fields'>
              <div><label htmlFor='message'>Message:</label></div>
              <Field component='textarea' id='message' name='message' />
              <ErrorMessage name='message' render={errorMessage => <div className='error-message'>{errorMessage}</div>} />
            </div>
            {showConfirmation &&
              <div >
                <h3 className='confirmation'>Message successfully sent!</h3>
              </div>
            }
            {isSubmitting ? <p>Sending...</p> : <button className='contact-button' type='submit' >Send</button>}
          </Form>)}
      </Formik>
    </div>
  );
}

export default EmailForm;