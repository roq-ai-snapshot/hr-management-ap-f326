import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  manager_number: yup.string().required(),
  department: yup.string().required(),
  experience_years: yup.number().integer().required(),
  certifications: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
