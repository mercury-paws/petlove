import { Form, Formik } from 'formik';
import InputField from '../InputField/InputField';
import PageName from '../PageName/PageName';
import { pageNames } from '../../constants/constants';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from '../Buttons/Button';
import css from './RegisterForms.css'

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


export default function RegisterForm({ onSubmit }: FormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const toggleShowRepeatPassword = () => {
        setShowRepeatPassword(!showRepeatPassword)
    }

    const handleSubmit = () => {
        console.log("registering")
    }

    return (
        <div>
    <PageName name={pageNames[3]} />
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form>
        <p>Thank you for your interest in our platform.</p>
        <div>
          <div>
            <InputField
                required
                    placeholder="Name"
                    type="text"
                name="name"
                id="nameFieldId"
            />
            <InputField
                required
                placeholder="Email"
                    name="email"
                    type="email"
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
            
            <div><InputField
                  required
                  type="text"
                placeholder="Confirm password"
                name="repeatPassword"
                id="repeatPasswordFieldId"
            />
            <div onClick={toggleShowRepeatPassword}>
                {showRepeatPassword ? (
                <FaEye />
                ) : (
                <FaEyeSlash />
              )}
            </div> </div>
               
            
          </div>
                    <Button type="submit" name="Registration" />
                </Form>
                )}
                
        </Formik>
        <p>Already have an account? Login</p>
        </div>
            );
            
}