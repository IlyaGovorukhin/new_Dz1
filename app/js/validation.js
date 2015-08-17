var validation = (function (){

	var init = function () {
		_setUpListners();
		// то что должно произойти сразу
	};

    var  _setUpListners = function () {
        $('form').on('keydown', '.has-error', _removeError);
            $('form').on('reset', _clearForm);
    	// прослушка
    	console.log('Привет! я прослушка событий2');
    }

    var _removeError = function () {
        $(this).removeClass('has-error');

    };
    var _clearForm = function (form) {
        var form = $(this);
        form.find('.input, .textarea').trigger('hide');
        form.find('.has-error').removeClass('has-error');       
    };


 // создает култипы
   var _creatQtip = function (elem, position) {
    if (position === 'right') {
        position = {
            my: 'left center',
            at: 'right center'
        }

    } else {
       position = {
            my: 'right center',
            at: 'left center',
              adjust: {
                method: 'shift none'
              }
     }
     }
elem.qtip({
      content: {
        text: function() {
          return $(this).attr('qtip-content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'keydown hide'
      },
      position: position,
      style: {
        classes: 'qtip-mystyle qtip-rounded',
        tip: {
          height: 10,
          width: 16
        }
      }
    }).trigger('show');

    };
    // Универсальная функция
     var validationForm = function(form) {
      var elem = form.find('input, textarea'),
      valid = true;
       console.log('Привет я в мродуле валидации проверию форму')
     //  пройдемся по всем элементам формы
      $.each(elem, function (index,val){
        var elem = $(val),
            val = elem.val(),
            pos = elem.attr('qtip-position');
            if (val.length === 0 ) {
                elem.addClass('has-error');
                _creatQtip(elem, pos);
                valid = false;
            }
        console.log(val);
      }); 

      return valid;
     };






       //Возвращает объект (публичный метод)
       return {
    	init: init,
        validationForm: validationForm
    };


})();

validation.init();