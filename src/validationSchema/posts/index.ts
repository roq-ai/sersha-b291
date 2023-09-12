import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  content: yup.string().required(),
  child_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
