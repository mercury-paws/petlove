import css from './EditUserProfile.module.css';
import { Form, Formik } from 'formik';
import Button from '../Buttons/Button';
import InputField from '../InputField/InputField';
import PetUserImg from '../PetUserImg/PetUserImg';
import PageName from '../PageName/PageName';
import { pageNames } from '../../constants/constants';

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

export default function EditUserProfile({ onSubmit }: FormProps) {

    const handleSubmit = () => {
        console.log("editing user profile")
    }

    return (
        <div>
                    <div>
                        <PageName name={pageNames[7]} />
                    </div>
        
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        {() => (
                            <Form>
                                <div>
                                    <PetUserImg />
        
                                    <div>
                                        
                                        <InputField
                                            required
                                            placeholder="Name"
                                            type="text"
                                            name="petName"
                                            id="nameFieldId"
                                        />
<InputField
                required
                placeholder="Email"
                    name="email"
                    type="email"
                id="emailFieldId"
                                />
                                <InputField
                required
                placeholder="Phone"
                    name="phone"
                    type="text"
                id="phoneFieldId"
            />
            
       
                                   </div>
                                   <div>
                                       <Button type='button' name="Go to Profile" />
                                   </div>
                                   
                               </div>
                           </Form>
                       )}
                   </Formik>
               </div>
           )
       }