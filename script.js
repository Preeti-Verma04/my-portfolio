const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      status.textContent = "Message sent successfully ✅";
      status.style.color = "#4da3ff";
      form.reset();
    } else {
      status.textContent = "Something went wrong ❌ Try again";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "Network error ❌";
    status.style.color = "red";
  }
});
