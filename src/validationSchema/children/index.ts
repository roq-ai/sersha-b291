import * as yup from 'yup';

export const childValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  age: yup.number().integer().required(),
  gender: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
