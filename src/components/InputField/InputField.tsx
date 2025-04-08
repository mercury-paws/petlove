import { Field } from 'formik';

interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode;
}

export default function InputField({ id, ...rest }: InputFieldProps) {
  return (
    <div >
      <Field
        {...rest}
        id={id}
      />
    </div>
  );
}