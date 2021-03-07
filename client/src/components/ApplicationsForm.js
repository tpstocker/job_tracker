import { useState } from "react";
import { postApplication } from "../services/ApplicationService";

const ApplicationsForm = ({ addApplication }) => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    formData[e.target.id] = e.target.value;
    setFormData(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postApplication(formData).then(() => {
      addApplication(formData);
    });
  };

  return (
        <form onSubmit={onSubmit} id="applications-form">
            <h2>Add a New Application</h2>
            <div class="formWrap">
                <label for="company">Company:</label>
                <input onChange={onChange} type="text" id="company" required/>
            </div>
            <div class="formWrap">
                <label for="website">Website:</label>
                <input onChange={onChange} type="text" id="website" required/>
            </div>
            <div class="formWrap">
                <label for="role">Role:</label>
                <input onChange={onChange} type="text" id="role" required/>
            </div>
            <div class="formWrap">
                <label for="closing-date">Closing Date:</label>
                <input onChange={onChange} type="text" id="closing-date" required/>
            </div>
            <div class="formWrap">
                <label for="email">Email:</label>
                <input onChange={onChange} type="text" id="email" required/>
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
  );
};

export default ApplicationsForm;

//DONE
