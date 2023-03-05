import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { register } from 'redux/auth/operations';
import {
  Button,
  ContactForm,
  Input,
  FormError,
  InputWrapper,
} from 'components/Formik/FormikForm.Styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().min(6).max(16).required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ children }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm autoComplete="off">
        {children}
        <InputWrapper>
          <Input type="text" name="name" placeholder="name" required />
          <BsFillPersonFill />
        </InputWrapper>
        <FormError name="name" />
        <InputWrapper>
          <Input type="email" name="email" placeholder="email" required />
          <BsFillTelephoneFill />
        </InputWrapper>
        <FormError name="email" />
        <InputWrapper>
          <Input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <BsFillTelephoneFill />
        </InputWrapper>
        <FormError name="password" />
        <Button type="submit">Sign Up</Button>
      </ContactForm>
    </Formik>
  );
};

export default RegisterForm;
