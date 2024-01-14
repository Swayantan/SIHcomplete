const uploadButton = document.querySelector(".btn-submit");
const uploadFeedback = document.querySelector("#upload-feedback");

uploadButton.addEventListener("click", function () {
    uploadFeedback.textContent = "Uploading..."; // Display uploading message
    setTimeout(function () {
        uploadFeedback.textContent = "File Uploaded!"; // Display upload success message (you can customize this)
    }, 2000); // Simulate a 2-second upload process (you can adjust this time)
});

document
    .getElementById("registration-form")
    .addEventListener("submit", async function (e) {
        e.preventDefault();
        // Retrieve and display form values (excluding the file input)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;
        const courseName = document.getElementById("courseName").value;
        const courseId = document.getElementById("courseId").value;
        const instituteName = document.getElementById("instituteName").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        const fileInput = document.getElementById("file");

        // Check if a file is selected
        if (fileInput.files.length === 0) {
            alert("Please select a PDF file for upload.");
            return;
        }

        console.log("certificate uploaded: ", fileInput.files[0]);

        const formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("phnumber", contact);
        formData.append("coursename", courseName);
        formData.append("courseid", courseId);
        formData.append("instname", instituteName);
        formData.append("startdate", startDate);
        formData.append("enddate", endDate);
        formData.append("certificate", fileInput.files[0]);

        const res = await fetch("http://127.0.0.1:5050", {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });
        // const data = await res.json();
        console.log(res);
    });