$(document).ready(function() {
    // Function to read the file and display it
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    // Trigger file upload when file input changes
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    // Trigger file input click when upload button is clicked
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});
