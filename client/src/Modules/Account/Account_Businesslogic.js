export class Account_BusinessLogic {
  // Handle input field changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Handle profile picture change
  handleProfilePicChange(objContext, event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        objContext.dispatch({
          type: "UPDATE_PROFILE_PICTURE",
          value: e.target.result, // Update with base64 string of the image
        });
      };
      reader.readAsDataURL(file);
    }
  }

  // Handle form submission
  handleSubmit(objContext, event) {
    event.preventDefault();
    console.log("Updated Details:", objContext.state);
    // You can send the updated data to your backend here
  }
}
