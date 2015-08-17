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
    	$('#popap').bPopup({
    		speed: 650,
    		transition: 'slideDown'
    	});

    };

    var _addProject = function (ev) {
        console.log('добавление проекта');
        ev.preventDefault(); // отменяет стандартное поведение
        
       //объявление переменных
       var form = $(this),
       url =  'add_project.php',
       data = form.serialize(); //Упорядочивает набор элементов ввода  input в строку данных.
       console.log(data);
       
       $.ajax({
       	url: url,
       	type:  'POST', // когда imput тогда всегда тип посе
       	dataType:  'json',
       	data: data,
       })
       .done(function(answer) { 
       	console.log("success");
       	console.log(answer);// ввыводим ответ от сервера
        if (answer.mes === 'OK') {
          console.log('ура все! прошло успешно!')}
        else {
          console.log('Все плохо')}

        })
       .fail(function() {
       	console.log("error");
       })


       .always(function() {
       	console.log("complete");
       })

       };
  

    return {
    	init: initInside
    };


})();

myMod.init();