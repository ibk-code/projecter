$(document).ready(function()
{


	$('#btn-save').on('click',function()
	{
		
		var Name = $('#name').val();
		var Username = $('#username').val(); 
		var Email = $('#email').val();
		var password = $('#password').val();
		var rpassword = $('#reenter-password').val();

      if(Username=="" && Email=="" && password=="" && rpassword=="")
      {
      	// $('#empty').text('please Enter Username').css('color','red');
      	// $('#mpty').text('please Enter phonenumber').css('color','red');
      	//  $('#mty').text('please Enter password').css('color','red');
      	//  $('#emty').text('please Enter confirm password').css('color','red');
      	$('#username,#email,#password, #reenter-password').css('border', '1px  solid red');
      }
      else
      {
      	if(Username!="")
      	{
      		$('#username').css('border','1px solid #ccc');
      		if (Email!="") {
      			$('#email').css('border','1px solid #ccc');

      			if (Email!="") {
      			$('#password').css('border','1px solid #ccc');


      			if (Email!="") {
      			$('#reenter-password').css('border','1px solid #ccc');
      		}

      		}

      		}

      	}

      	if(Username!="" && Email!="" && password!="" && rpassword!=""){
      		if(password==rpassword)
      		{
      			$('#success').text('You have sucessfully Registered').css('color', 'green')
      		}
      		else
      		{
      				$('#password, #reenter-password').css('border', '1px  solid red');
      		}
      	}
      }

	})
})