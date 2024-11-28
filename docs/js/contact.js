// EMAIL JS
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_m80ttdp', 'template_cqadm5r', '#contact-form', 'T2faZUZc2S0ykvzrD')
        .then(() => {
            // SHOW SENT MESSAGE
            contactMessage.textContent = "Message sent successfully!"

            // REMOVE SENT MESSAGE
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)

            // CLEAR INPUT FIELDS
            contactForm.reset()
        }, () => {
            contactMessage.textContent = "Message not sent (service error)"
        })
}

contactForm.addEventListener("submit", sendEmail)