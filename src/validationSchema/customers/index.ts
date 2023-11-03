import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  customer_number: yup.string().required(),
  company_name: yup.string().required(),
  contact_person: yup.string().required(),
  contact_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
