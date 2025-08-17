const apiBase = "https://car-classifier-1jch.onrender.com";

  // attach event listener to file input
  document.getElementById("imgForm").addEventListener("submit", (event) => {
    event.preventDefault(); // stop page refresh
    const file = document.getElementById("imgInput").files[0];

    if (!file) {
        alert("Please select an image first.");
        return;
      }

    if (file) {
      uploadImage(file);
      document.getElementById("imageUpload").src = URL.createObjectURL(file)
      document.getElementById("imageUpload").style.display = "block"
    } else {
      console.error("No file selected");
    }
  });

function displayOutput(message) {
    document.getElementById('result').textContent = message;
}

async function uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file); // "image" must match Flask's key
  
    try {
      const response = await fetch(apiBase + "/classify", {
        method: "POST",
        body: formData,
        mode: "cors" 
      });
  
      const result = await response.json();
      img_class = result.class;
      displayOutput("Your car is a: " + img_class);
      return result
    } catch (error) {
        displayOutput("Error uploading image:" + error);
        return 
    }
  }

//change function
async function addSearch(email, name, date, breach) {
    try {
        if (!breach) {
            breach = "Reset link not found";
        }
        const res = await fetch(`${apiBase}/search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_email: email,
                breach_name: name,
                breach_date: date,
                breach: breach
            })
        });

        const data = await res.json();

        if (!res.ok || "error" in data) {
            return { error: data.error || "oops" };
        }

        return data;
    } catch (err) {
        console.error('addSearch fetch error:', err);
        return { error: 'Network error or invalid response' };
    }
}