import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(errors: ValidationError): Errors {
  const validationsErros: Errors = {};

  errors.inner.forEach(err => {
    validationsErros[err.path] = err.message;
  });

  return validationsErros;
}
