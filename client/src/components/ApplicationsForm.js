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
            <div className="formWrap">
                <label htmlFor="company">Company:</label>
                <input onChange={onChange} type="text" id="company" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="website">Website:</label>
                <input onChange={onChange} type="text" id="website" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="role">Role:</label>
                <input onChange={onChange} type="text" id="role" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="location">Location (post code or city):</label>
                <input onChange={onChange} type="text" id="location" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="closingDate">Closing Date:</label>
                <input onChange={onChange} type="date" id="closingDate" required/>
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" required/>
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
  );
};

export default ApplicationsForm;

//DONE
