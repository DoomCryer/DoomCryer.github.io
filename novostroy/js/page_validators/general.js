$(document).ready(function(){
	$('#userSubmit').validate({
		rules:{
			name:{
				required:true,
				remote: {
					url: base_url+"ajax/nameExists",
					type: "post",
					dataType: 'JSON',
					data: {
					  name: function() {
						return $("#name").val();
					  },
					  table: table,
					  entry_id: function() {
						return $("#value_id").val();
					  }
					}
				}
			},
			page_address:{
				remote: {
					url: base_url+"ajax/pageAddressExists",
					type: "post",
					dataType: 'JSON',
					data: {
					  page_address: function() {
						return $("#page_address").val();
					  },
					  table: table,
					  entry_id: function() {
						return $("#value_id").val();
					  }
					}
				}
			}
		},
		messages:{
			name:{
				required: 'Необходимо название материала',
				remote: 'Материал с таким названием уже существует'
			},
			page_address:{
				remote: 'Материал с таким адресом уже существует'
			},
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