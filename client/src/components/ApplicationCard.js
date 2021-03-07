import {deleteApplication} from "../services/ApplicationService";



//get today's date//
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;


const ApplicationCard = ({ application, removeApplication }) => {
  // console.log(application);
  const handleDelete = () => {
    deleteApplication(application._id).then(() => {
      removeApplication(application._id);
    });
  };

    var date1 = new Date (today);
    var date2 = new Date (application.closingDate);
    var Diff_In_Days = (date2.getTime() - date1.getTime())/ (1000 * 3600 * 24);
    console.log(application.closingDate);
    
    console.log("Diff in days is", Diff_In_Days)


  return (
    <>
      <h1>{application.company}</h1>
      <p>Days left to closing:{Diff_In_Days}</p>


      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default ApplicationCard;

//DONE
