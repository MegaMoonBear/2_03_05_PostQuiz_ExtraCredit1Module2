// Select the form using querySelector
const form="Your code instead of this string";

// TODO: Attach a "submit" event listener to the form
//Start of listener
  // TODO: Prevent the form from refreshing the page
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    //function.preventDefault();
    }
  
  /* 1. Show parent/children Data for learning/debugging */
        /*  id="feedbackForm"  */
        /*  id="customerName"  */
        /*  id="satisfaction"  */
  // TODO: Log the form's children collection in the console
        console.log(form.customerName, satisfaction); 
  // TODO: Log the form's parent element tag name
        var FormParentName = document.getElementById("feedbackForm").parentElement.nodeName;
        console.log(form.FormParentName); 
  // TODO: Log how many children the form has
        let numb = document.getElementById("feedbackForm").childElementCount;
        console.log(numb); 

  /* 2. Extract values */
  // TODO: Select the name input
        /*  id="customerName"  */
  const nameInput = document.getElementById("customerName");

  // TODO: Select the satisfaction input by its id
        /*  id="satisfaction"  */
  const satisfactionInput = document.getElementById("satisfaction");

  //Get the value from the name input and trim spaces
  const name = nameInput.value.trim();
  //Convert satisfaction input to a numbe
  const score = parseInt(satisfactionInput.value);

  /* 3. TODO: Conditional operator
    Use the conditional operator ( ? : ) to create a message INCLUDING NAME INPUT where
    If score >= 4 → thank the customer
    Otherwise → promise to improve
  */
 
  // 4. TODO: Show the message in an alert
          // var alert;      // let alert; 
          //  <form id="feedbackForm">  <input value="Submit Feedback" type="submit">  </form>

          <script>
            if (score >= 4) {
              alert = "Thank you, " + nameInput + ", for your positive feedback!";
            }           
            else {
            alert = "Thank you, " + nameInput + ", for your feedback. We will strive to improve.";
            }
          </script>

          //<SubmitEvent onclick="myFunction()">Submit Feedback</SubmitEvent>
          //<script>
          //function myFunction() {
            //alert("I am an alert box!");
          //}
          //</script>

  // 4. TODO: Show the message in an alert
  
// TODO: Prevent the form from refreshing the page
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    //function.preventDefault();
    }

//End of listener
