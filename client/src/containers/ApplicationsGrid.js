import ApplicationCard from "../components/ApplicationCard";
const ApplicationsGrid = ({ applications, removeApplication }) => {
  const applicationsList = applications.map((application) => {
    return <ApplicationCard application={application} removeApplication={removeApplication} />;
  });

  return <>{applicationsList}</>;
};

export default ApplicationsGrid;

//DONE