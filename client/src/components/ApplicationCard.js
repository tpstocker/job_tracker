import { deleteApplication } from "../services/ApplicationService";

const ApplicationCard = ({ application, removeApplication }) => {
  console.log(application);
  const handleDelete = () => {
    deleteApplication(application._id).then(() => {
      removeApplication(application._id);
    });
  };
  return (
    <>
      <h1>{application.company}</h1>
      <p>Email: {application.email}</p>

      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default ApplicationCard;

//DONE
