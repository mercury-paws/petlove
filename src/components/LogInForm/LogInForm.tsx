import { Form, Formik } from 'formik';
import InputField from '../InputField/InputField';
import PageName from '../PageName/PageName';
import { pageNames } from '../../constants/constants';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from '../Buttons/Button';
import css from './LogInForm.css'

export type FieldValues = {
  name: string;
  id: string;

};

const initialValues: FieldValues = {
  name: '',
  id: '',
};

export interface FormProps {
  onSubmit?: (values: FieldValues) => void | Promise<void>;
}


export default function LogInForm({ onSubmit }: FormProps) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleSubmit = () => {
        console.log("logging in")
    }

    return (
        <div>
    <PageName name={pageNames[5]} />
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form>
        <p>Welcome! Please enter your credentials to login to the platform:</p>
        <div>
          <div>

            <InputField
                required
                    placeholder="Email"
                    type="email"
                name="email"
                id="emailFieldId"
            />
                </div>
                <div><InputField
                  required
                  type="text"
                placeholder="Password"
                name="password"
                id="passwordFieldId" />
                
            <div onClick={toggleShowPassword}>
                {showPassword ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
              )}
            </div></div>
            
            
          </div>
                    <Button type="submit" name="Log In" />
                </Form>
                )}
                
            </Formik>
            <p>Don't have an account? Register</p>
        </div>
            );
            
}