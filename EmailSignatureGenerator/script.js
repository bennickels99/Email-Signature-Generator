/* Input validation
Copy signature to clipboard
Clear form button
Multiple signature templates
Live preview as user types
Insert user or company picture*/

// wait for page to load
document.addEventListener("DOMContentLoaded", function () {
    // get references to buttons
    const generateButton = document.getElementById("gen")
    const sendButton = document.getElementById("send")

    // attach event listeners
    generateButton.addEventListener("click", generateSignature)
    sendButton.addEventListener("click", sendEmail)

});

// function to collect form data
function getFormData() {
    // read values from inputs
    const name = document.getElementById("fullName").value.trim();
    const title = document.getElementById("title").value.trim();
    const phoneNum = document.getElementById("phoneNum").value.trim();
    const company = document.getElementById("company").value.trim();
    const website = document.getElementById("website").value.trim();
    const email = document.getElementById("emailAddress").value.trim();

    // store them in an object
    const data = {
        userName: name,
        userTitle: title,
        userPhoneNum: phoneNum,
        userCompany: company,
        userWebsite: website,
        userEmail: email
    };

    // return object
    return data;
}

// function to generate formatted signature
function generateSignature() {
    // call getFormData()
    const fields = getFormData();

    // create formatted string
    let signature = `${fields.userName} <br>
    ${fields.userTitle} <br>
    ${fields.userCompany} <br>
    ${fields.userPhoneNum} <br>
    ${fields.userWebsite}`;

    // update output div
    document.getElementById("output").innerHTML = signature;

    return signature;
}

// function to send email
function sendEmail() {
    // get generated signature
    const signature = generateSignature();
    const fields = getFormData();

    // uses email from first field that was entered
    const email = fields.userEmail;

    // create subject
    let subject = `${fields.userName}'s Email Signature`;

    // create body
    let body = `${fields.userName}
    ${fields.userTitle}
    ${fields.userCompany}
    ${fields.userPhoneNum}
    ${fields.userWebsite}`;
    console.log(body);

    // use mailto link
    window.location.href =
        `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}