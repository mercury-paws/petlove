import InputField from '../InputField/InputField';
import css from './PetUserImg.module.css';


export default function PetUserImg() {
    return (
        <div>
                                        <div>
                                            <img alt="Uploaded preview" />
                                        </div>
        
                                        <div>
                                            <InputField
                                                required
                                                placeholder="Enter URL"
                                                type="text"
                                                name="url"
                                                id="urlFieldId"
                                            />
                                            <InputField
                                                type="file"
                                                name="file"
                                                placeholder="Upload photo"
                                                id="fileFieldId"
                                            />
                                        </div>
                                    </div>
    )
}