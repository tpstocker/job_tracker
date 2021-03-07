import { useState, useEffect } from "react";

import "./App.css";

import ApplicationsForm from "./components/ApplicationsForm";
import ApplicationsGrid from "./containers/ApplicationsGrid";
import { getApplications } from "./services/ApplicationService";

function App() {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    getApplications().then((allApplications) => {
      setJobApplications(allApplications);
    });
  }, []);

  const addApplication = (application) => {
    const temp = jobApplications.map((s) => s);
    temp.push(application);
    setJobApplications(temp);
  };

  const removeApplication = (id) => {
    const temp = jobApplications.map((s) => s);
    const indexToDel = temp.map((s) => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setJobApplications(temp);
  };

  return (
    <>
      <ApplicationsForm addApplication={addApplication} />
      <ApplicationsGrid
        applications={jobApplications}
        removeApplication={removeApplication}
      />
    </>
  );
}

export default App;

//DONE