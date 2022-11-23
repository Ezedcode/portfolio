export const sendContactForm = async (data) => fetch('api/mail', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    }
})