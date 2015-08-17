var validation = (function (){

	var initInside = function () {
		_setUpListners();
		// то что должно произойти сразу
	};

    var  _setUpListners = function () {

    $('#form_link').on('submit', _submitForm);
    	// прослушка
    	console.log('Привет! я прослушка событий2');
    };

    var  _submitForm = function(ev) {
        ev.preventDefault();
        console.log('отправка формы')


        var form = $(this),
             url = 'contactme.php',
             defObj = _ajaxForm(form, url);

            // что-то будем делать с ответом с сервера defObj
    };
    
    var _ajaxForm = function (form, url) {
        console.log('ajax запрс с проверкой')
      if (!validation.validationForm(form)) return false;
      // если false то конд ниже не произойдет
    };


    return {
    	init: initInside
    };


})();

validation.init();