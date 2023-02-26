import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { logIn } from 'redux/auth/operations';
import {
  Button,
  ContactForm,
  Input,
  FormError,
  InputWrapper,
} from 'components/Formik/FormikForm.Styled';

const schema = yup.object().shape({
  email: yup.string().min(6).max(16).required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    // if (contacts.find(el => el.name === name)) {
    //   toast.error(`${name} is already in contacts`);
    //   return;
    // }
    dispatch(logIn({ email, password }));
    // toast.success(`${name} was added to contacts`);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm autoComplete="off">
        <InputWrapper>
          <Input type="email" name="email" placeholder="email" required />
          <BsFillPersonFill />
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
        <Button type="submit">logIn</Button>
      </ContactForm>
    </Formik>
  );
};

export default LoginForm;
