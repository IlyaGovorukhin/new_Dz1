var myMod = (function (){

	var initInside = function () {
		_setUpListners();
		// то что должно произойти сразу
	};

    var  _setUpListners = function () {
    	// прослушка
    		console.log('Привет! я прослушка событий');
    	$('#mywork_site_img1').on('click', _showModule); // открыть модальное окно
        $('#form_add').on('submit', _addProject); // добавление проекта

    };


    var _showModule = function(ev){
    	console.log('Показать модальное окно');
    	ev.preventDefault(); // отменяет стандартное поведение
    	var newPopap = $('#popap'),
          form = newPopap.find('.form');
      newPopap.bPopup({
    		speed: 650,
    		transition: 'slideDown',
          onClose: function() { // в документации попап есть
          form.find('.f-e').text('').hide(); // hide show - методы джиквери
          form.find('.f-s').text('').hide();
          form.trigger('reset');
          $('.body_popap').css('height' , '450px');  
        }
    	});

    };

    var _addProject = function (ev) {

        console.log('добавление проекта');
        ev.preventDefault(); // отменяет стандартное поведение
        
       //объявление переменных
       var form = $(this),
       url =  'add_project.php',
       MyserverAnswer =  _newAjax(form, url);
       

       // проверяем был ли запрос на сервер
      if(MyserverAnswer) { 
       MyserverAnswer.done(function(answer) { 
       	console.log(answer);// ввыводим ответ от сервера
       var successBox = form.find('.f-s'),
              errorBox = form.find('.f-e');

          if(answer.status === 'OK'){            
            errorBox.hide();
            successBox.text(answer.text).show();
            $('.body_popap').css('height' , '480px');           
          }else{
            successBox.hide();
            errorBox.text(answer.text).show();
        }

        });
     };
   }




    var _newAjax = function(form, url) {
       if (!validation.validationForm(form)) return false;
    data = form.serialize(); //Упорядочивает набор элементов ввода  input в строку данных.

    var result =  $.ajax({
        url: url,
        type:  'POST', // когда imput тогда всегда тип пост
        dataType:  'json',
        data: data,
       }).fail( function(answer) {
        form.find('.f-e').text('на сервере произошла ошибка').show();
         
       } ); 
    return result;


    };





    return {
    	init: initInside
    };


})();

myMod.init();
