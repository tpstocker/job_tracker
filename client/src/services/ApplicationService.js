const baseURL = "http://localhost:5000/api/applications/";

export const getApplications = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postApplication = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const deleteApplication = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};

//DONE
