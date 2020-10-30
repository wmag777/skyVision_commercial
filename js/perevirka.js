$(function($) {
	var field = new Array("phone");
	var fieldTwo = new Array("size");
	$("#call_contactWithMe").submit(function() {
		var error = 0;
		$("#call_contactWithMe").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {
						$(this).css('background', 'green');
					}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_contactWithMe"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				s_name = $form.find('input[name="name"]').val(),
				s_messanger = $form.find('input[name="messanger"]').val(),
				s_email = $form.find('input[name="email"]').val(),
				s_desc = $form.find('textarea[name="desc"]').val(),
				url = $form.attr('action');
			$('#result').fadeIn(100);
			$('.arcticmodal-container').hide(100);
			$('.arcticmodal-overlay').hide(100);
			$('#txt').fadeIn(100);
			$('#result').html("Отправка...");
			$('#txt').html("Заявка принята, наш менеджер свяжется с вами в течении 24 часов.");
			$('#txt').fadeOut(2800);
			$.post(url, {
				phone: s_phone,
				theme: s_theme,
				name: s_name,
				messanger: s_messanger,
				email: s_email,
				desc: s_desc,
			}).done(function(data) {
				alert('done');
				$('#result').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});

	$("#call_send").submit(function() {
		var error = 0;
		$("#call_send").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {
						$(this).css('background', 'green');
					}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				s_time = $('.ui-slider-handle').html(),
				s_plan1 = $form.find('#test-check1'),
				s_plan2 = $form.find('#test-check2'),
				s_plan3 = $form.find('#test-check3'),
				s_vir1 = $form.find('#test-check4'),
				s_vir2 = $form.find('#test-check5'),
				url = $form.attr('action');
			var zxc, zxc1, zxc2, zxc3, zxc4;
			if (s_plan1.prop("checked")) {
				zxc = "ТВ";
			}
			if (s_plan2.prop("checked")) {
				zxc1 = "Онлайн";
			}
			if (s_plan3.prop("checked")) {
				zxc2 = "Другие";
			}
			if (s_vir1.prop("checked")) {
				zxc3 = "Да";
			}
			if (s_vir2.prop("checked")) {
				zxc4 = "Нет";
			}
			$('#result').fadeIn(100);
			$('.arcticmodal-container').hide(100);
			$('.arcticmodal-overlay').hide(100);
			$('#txt').fadeIn(100);
			$('#result').html("Отправка...");
			$('#txt').html("Заявка принята, наш менеджер свяжется с вами в течении 24 часов.");
			$('#txt').fadeOut(2800);
			$.post(url, {
				phone: s_phone,
				theme: s_theme,
				time: s_time,
				plan1: zxc,
				plan2: zxc1,
				plan3: zxc2,
				vir1: zxc3,
				vir2: zxc4
			}).done(function(data) {
				$('#result').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
	$("#call_send1").submit(function() {
		var error = 0;
		$("#call_send1").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {
						$(this).css('background', 'green');
					}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send1"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				url = $form.attr('action');
			$('#result').fadeIn(100);
			$('.arcticmodal-container').hide(100);
			$('.arcticmodal-overlay').hide(100);
			$('#txt').fadeIn(100);
			$('#result').html("Отправка...");
			$('#txt').html("Заявка принята, наш менеджер свяжется с вами в течении 24 часов.");
			$('#txt').fadeOut(2800);
			$.post(url, {
				phone: s_phone,
				theme: s_theme
			}).done(function(data) {
				$('#result').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});

	$("#call_send0").submit(function() {
		var error = 0;
		$("#call_send0").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {
						$(this).css('background', 'green');
					}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send0"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				s_email = $form.find('input[name="email"]').val(),
				url = $form.attr('action');
			$('#result').fadeIn(100);
			$('.arcticmodal-container').hide(100);
			$('.arcticmodal-overlay').hide(100);
			$('#txt').fadeIn(100);
			$('#result').html("Отправка...");
			$('#txt').html("Заявка принята, наш менеджер свяжется с вами в течении 24 часов.");
			$('#txt').fadeOut(2800);
			$.post(url, {
				phone: s_phone,
				theme: s_theme,
				email: s_email
			}).done(function(data) {
				$('#result').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
	$("#call_send2").submit(function() {
		var error = 0;
		$("#call_send2").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {
						$(this).css('background', 'green');
					}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send2"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				url = $form.attr('action');
			$('#result').fadeIn(100);
			$('.arcticmodal-container').hide(100);
			$('.arcticmodal-overlay').hide(100);
			$('#txt').fadeIn(100);
			$('#result').html("Отправка...");
			$('#txt').html("Заявка принята, наш менеджер свяжется с вами в течении 24 часов.");
			$('#txt').fadeOut(2800);
			$.post(url, {
				phone: s_phone,
				theme: s_theme
			}).done(function(data) {
				$('#result').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
	$("#call_send3").submit(function() {
		var error = 0;
		$("#call_send3").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send3"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				url = $form.attr('action');
			$('#result').fadeIn(100);
			$('.arcticmodal-container').hide(100);
			$('.arcticmodal-overlay').hide(100);
			$('#txt').fadeIn(100);
			$('#result').html("Отправка...");
			$('#txt').html("Заявка принята, наш менеджер свяжется с вами в течении 24 часов.");
			$('#txt').fadeOut(2800);
			$.post(url, {
				phone: s_phone,
				theme: s_theme
			}).done(function(data) {
				$('#result').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
	$("#call_send4").submit(function() {
		var error = 0;
		$("#call_send4").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send4"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				url = $form.attr('action');
			$('#result').fadeIn(100);
			$('.arcticmodal-container').hide(100);
			$('.arcticmodal-overlay').hide(100);
			$('#txt').fadeIn(100);
			$('#result').html("Отправка...");
			$('#txt').html("Заявка принята, наш менеджер свяжется с вами в течении 24 часов.");
			$('#txt').fadeOut(2800);
			$.post(url, {
				phone: s_phone,
				theme: s_theme
			}).done(function(data) {
				$('#result').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
	$("#call_send5").submit(function() {
		var error = 0;
		$("#call_send5").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send5"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				url = $form.attr('action');
			$('#result5').fadeIn(100);
			$('#hide5').hide(100);
			$('#txt5').fadeIn(100);
			$('#result5').html("Отправка...");
			$('#txt5').html("В БЛИЖАЙШЕЕ ВРЕМЯ ВАША ЗАЯВКА БУДЕТ ОБРАБОТАНА.");
			$.post(url, {
				phone: s_phone,
				theme: s_theme
			}).done(function(data) {
				$('#result5').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
	$("#call_send6").submit(function() {
		var error = 0;
		$("#call_send6").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send6"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_theme = $form.find('input[name="theme"]').val(),
				url = $form.attr('action');
			$('#result6').fadeIn(100);
			$('#hide6').hide(100);
			$('#txt6').fadeIn(100);
			$('#result6').html("Отправка...");
			$('#txt6').html("В БЛИЖАЙШЕЕ ВРЕМЯ ВАША ЗАЯВКА БУДЕТ ОБРАБОТАНА.");
			$.post(url, {
				phone: s_phone,
				theme: s_theme
			}).done(function(data) {
				$('#result6').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
	$("#call_send7").submit(function() {
		var error = 0;
		$("#call_send7").find(":input").each(function() {
			for (var i = 0; i < field.length; i++) {
				if ($(this).attr("name") == field[i]) {
					if (!$(this).val()) {
						$(this).css('background', 'red');
						error = 1;
					} else {}
				}
			}
		})
		if (error == 0) {
			var $form = $("#call_send7"),
				s_phone = $form.find('input[name="phone"]').val(),
				s_name = $form.find('input[name="name"]').val(),
				url = $form.attr('action');
			$('#result7').fadeIn(100);
			$('#hide7').hide(100);
			$('#txt7').fadeIn(100);
			$('#result7').html("Отправка...");
			$('#txt7').html("В БЛИЖАЙШЕЕ ВРЕМЯ ВАША ЗАЯВКА БУДЕТ ОБРАБОТАНА.");
			$.post(url, {
				phone: s_phone,
				name: s_name
			}).done(function(data) {
				$('#result7').html(data);
				$(location).attr('href', 'thanks.html');
			});
			return false;
		} else {
			var err_text = "";
			if (error == 1) err_text = "Не все обязательные поля заполнены!";
			return false;
		}
	});
});