import { Formik, Field, ErrorMessage, Form } from 'formik';
import { string, object } from 'yup';

const EmailForm = () => {

  const initialValues = {

  };

  const validationSchema = object({

  });

  const onSubmit = (values, actions) => {

  }

  return (
    <div className='contact'>

      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1 className='contact-title'>Contact</h1>
          <div className='form-fields'>
            <div><label htmlFor='firstName'>First name </label></div>
            <Field id='firstName' name='firstName' />
            <ErrorMessage name='firstName' render={errorMessage => <div className='error-message'>{errorMessage}</div>} />
          </div>

          <div className='form-fields'>
            <div><label htmlFor='lastName'>Last name: </label></div>
            <Field id='lastName' name='lastName' />
            <ErrorMessage name='lastName' render={errorMessage => <div className='error-message'>{errorMessage}</div>} />
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
        </Form>
      </Formik>
    </div>
  );
}

export default EmailForm;