(function(){
    const form= document.querySelector('.input_container');
    const message= document.querySelector('#message');
    const submitButton= document.querySelector('#submitButton');
    const messageDisplay= document.querySelector('.message_content');
    const feedback= document.querySelector('.error_message');

    submitButton.addEventListener('click', function(e){
        //Clicking on a "Submit" button, prevent it from submitting a form
        e.preventDefault();
        //messageInput: takes in the value of the message in the textbox
        const messageInput= message.value;

        //check if the textbox has any text in it
        if(messageInput==''){
            //display error message if the textbox doesn't have any text
            feedback.classList.add('show');
            //The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
            //here we are removing the error message after 2 seconds
            setTimeout(function(){
                feedback.classList.remove('show')
            }, 2000);
        } else {
            //if the textbox has text in it, then display it on the screen
            messageDisplay.textContent= messageInput;
            message.value='';
        }
    });
})()