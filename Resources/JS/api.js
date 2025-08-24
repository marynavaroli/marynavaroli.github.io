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

  document.getElementById("evUpload").addEventListener("submit", (event) => {
    event.preventDefault(); // stop page refresh
    const speed = document.getElementById("speed").value;
    const torque = document.getElementById("torque").value;
    const charging = document.getElementById("charging").value;
    const height = document.getElementById("height").value;
    const body = document.getElementById("body").value;

    if (!speed || !torque || !charging || !height || !body) {
        alert("Please provide input for all fields");
        return;
      }

    if (speed < 125 || speed > 325) {
        displayPrediction("Top Speed must be within range 125 to 325 km/hr")
        return
    } else if (torque < 113 || torque > 1350) {
        displayPrediction("Torque must be within range 113 to 1350 nm")
        return
    } else if (charging < 29 || charging > 281) {
        displayPrediction("Fast Charging Power must be within range 29 to 281 kW DC")
        return
    } else if (height < 1329 || height > 1986) {
        displayPrediction("Top Speed must be within range 1329 to 1986 mm")
        return
    } else if (body == "") {
        displayPrediction("Select a Body Style")
        return
    } else {
        getPrediction(speed, torque, charging, height, body)
    }
    
  });

function displayBrand(message) {
    document.getElementById('brand').textContent = message;
}

function displayPrediction(message) {
    document.getElementById('prediction').textContent = message;
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
      displayBrand("Your car is a: " + img_class);
      return result
    } catch (error) {
        displayBrand("Error uploading image:" + error);
        return 
    }
  }

  async function getPrediction(speed, torque, charging, height, body) {
    try {
      const response = await fetch(apiBase + "/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"  // tell Flask it's JSON
        },
        body: JSON.stringify({   // convert to JSON string
          speed: speed,
          torque: torque,
          charging: charging,
          height: height,
          body: body
        }),
        mode: "cors"
      });
  
      const result = await response.json();
      let pred = result.prediction;
      displayPrediction("Efficiency: " + pred.toFixed(2) + " Wh/km");
      return result;
    } catch (error) {
      displayPrediction("Error uploading data: " + error);
      return;
    }
  }