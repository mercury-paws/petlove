import { Form, Formik } from 'formik';
import InputField from '../InputField/InputField';
import PageName from '../PageName/PageName';
import { pageNames, searchByType } from '../../constants/constants';
import Btn from '../Buttons/Button';
import css from './AddPetForm.css'
import {Button, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Label, Popover} from 'react-aria-components';
import Search from '../Search/Search';
import PetUserImg from '../PetUserImg/PetUserImg';

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


export default function AddPetForm({ onSubmit }: FormProps) {
 
    const handleSubmit = () => {
        console.log("adding pet")
    }

    return (
        <div>
            <div>
                <PageName name={pageNames[4]} />
                <p>Personal details</p>
            </div>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {() => (
                    <Form>
                        <div>
                            <PetUserImg />

                            <div>
                                <InputField
                                    required
                                    placeholder="Title"
                                    type="text"
                                    name="title"
                                    id="titleFieldId"
                                />
                                <InputField
                                    required
                                    placeholder="Pet's Name"
                                    type="text"
                                    name="petName"
                                    id="nameFieldId"
                                />
                                <DatePicker>
  <Group>
    <DateInput>
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <Button>▼</Button>
  </Group>
  <Popover>
    <Dialog>
      <Calendar>
        <header>
          <Button slot="previous">◀</Button>
          <Heading />
          <Button slot="next">▶</Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </Calendar>
    </Dialog>
  </Popover>
</DatePicker>
              
                                <Search
                                    type="select"
                                    name="searchByType"
                                    options={searchByType}
                                    id="searchByType"
                                />
                            </div>
                            <div>
                                <Btn type="button" name="Back" />
                                <Btn type="submit" name="Submit" />
                            </div>
                            
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}