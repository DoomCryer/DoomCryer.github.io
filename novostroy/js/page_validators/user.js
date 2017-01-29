$(document).ready(function(){
	$('#userSubmit').validate({
		rules:{
			name:{
				required:true
			},
			surname:{
				required:true
			},
			email:{
				required: true,
				email: true,
				remote: {
					url: base_url+"ajax/emailExists",
					type: "post",
					dataType: 'JSON',
					data: {
					  email: function() {
						return $("#email").val();
					  }
					}
				}
			},
			old_pw:{
				required:function(element) {
					if($('#password').val() == "")
						return false;
					return true;
				}
			},
			password:{
				required:function(element) {
					if($('#value_id').val() == "")
						return true;
					return false;
				}
			},
			new_pw:{
				equalTo: '#password'
			}
		},
		messages:{
			name:{
				required: 'Необходимо имя пользователя'
			},
			surname:{
				required: 'Необходима фамилия пользователя'
			},
			email:{
				required: 'Необходим email пользователя',
				email: 'Email должен быть в формате xxxx@xxxx.xx',
				remote: 'Пользователь с таким email уже существует'
			},
			old_pw:{
				required: 'При смене пароля нужно ввести старый'
			},
			password:{
				required: 'При создании пользователя, пароль не может быть пустым'
			},
			new_pw:{
				equalTo: 'Пароли не совпадают'
			}
		},
		validClass: 'has-success',
		errorClass: 'has-error',
		errorElement: "span",
		errorPlacement: function(error, element) {
			error.appendTo($("label[for='"+$(element).attr('id')+"']"));
		},
		highlight: function (element, errorClass, validClass) {
			if ($(element).attr("type") === "radio") {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
				$(element).closest('.form-group').removeClass(validClass);
				$(element).closest('.form-group').addClass(errorClass);
			}
		},
		unhighlight: function (element, errorClass, validClass) {
			if ($(element).attr("type") === "radio") {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
				$(element).closest('.form-group').addClass(validClass);
				$(element).closest('.form-group').removeClass(errorClass);
			}
		},
	});
});