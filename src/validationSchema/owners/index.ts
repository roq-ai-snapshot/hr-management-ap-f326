import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  owner_number: yup.string().required(),
  company_owned: yup.string().required(),
  years_owned: yup.number().integer().required(),
  industry: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
