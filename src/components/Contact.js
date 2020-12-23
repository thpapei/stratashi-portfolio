import { Formik, Field, ErrorMessage, Form } from 'formik';
import { string, object } from 'yup';
import emailjs from 'emailjs-com';

const EmailForm = () => {

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
    emailjs.send('service_mjiqvar', 'contact_form', values, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='contact' id='contact'>
      <h1 className='title'>Contact</h1>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
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
          <button className='contact-button' type='submit'>Send</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EmailForm;