

export const sendContactForm = async (data) => 
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    }
  }).then((res) => {
    if (!res.ok) throw new Error("mensagem não enviada");
    return res.json();
  })
