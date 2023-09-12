import * as yup from 'yup';

export const simulatorProfileValidationSchema = yup.object().shape({
  profile_name: yup.string().required(),
  child_id: yup.string().nullable().required(),
});
