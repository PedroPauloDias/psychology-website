

export const sendContactForm = async (data) =>

  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },

  }).then((res) => {
  console.log(res);
   alert('ok')
  }).catch((error)  => {
  console.log(error);
  alert('error');
  
})