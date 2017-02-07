// Выйти из личного кабинета
$('.logout').click(function(e){
	e.preventDefault();
	$('.logged').hide();
	$('.button_login').show();
});


// Popup city
$('.popup-city__shop-selection').click(function(){
	$(this).addClass('active');
	$('.popup-city').addClass('active');
	$('.overlay').addClass('active');
});


// Popup search
$('a[href="#searchbar"]').click(function(e){
	e.preventDefault();
	$('.popup-search').addClass('active');
	$('.overlay').addClass('active');
});


// Popup login
$('.button_login').click(function(e){
	e.preventDefault();
	if ( $('.popup-menu').hasClass('active') ) {
		$('.popup-menu').removeClass('active')
	}
	$('.popup-login').addClass('active');
	$('.overlay').addClass('active login');
})

// Popup menu
$('.header__burger').click(function(e){
	e.preventDefault();
	$('.popup-menu').addClass('active');
	$('.overlay').addClass('active');
})


// Смена города
$('.popup-city__radiodiv input').click(function(){
	var shop = $(this).val();
	$('.shop-name').text(shop);
});


// Закрытие попапа
$('.popup__closeicon').click(function(e){
	e.preventDefault();
	$(this).parents('.popup').removeClass('active');
	$('.overlay').removeClass('active login');
	$('.popup-city__shop-selection').removeClass('active');
});
$('.overlay').click(function(){
	$(this).removeClass('active login');
	$('.popup.active').removeClass('active');
	$('.popup-city__shop-selection').removeClass('active');
});


// Проверка формы на правильность введенных данных
$("form button").click(function(){
	$(this).attr("disabled", "disabled");
    window.activeform = $(this).parents("form").attr("id");
    checkinputs();
    checkandsubmit();
});
//Проверка на ошибочные поля и отправка формы
function checkandsubmit() {
    window.formerrors = 0;
    $('#'+activeform).find("div.error").each(function(){
        formerrors += 1; 
    });
    if (formerrors !== 0) {
        $('#'+activeform+'button').attr("disabled", "disabled");
    } else {
		$('#'+activeform).submit();
		$('#'+activeform).parents('.popup').removeClass('active');
		$('.overlay').removeClass('active login');
	}
}
// Скрипт проверки на пустое значение
function checkinputs() {
    $('#'+activeform+' [data-required]').each(function(){
        if (!$(this).val()) {
            $(this).parent().addClass("error")
        } else {$(this).parent().removeClass("error")}
    });
}
// Убрать ошибку при изменении input'а
$("[data-required]").on("keyup change", function(){
   $(this).parent().removeClass("error");	$(this).parents('form').find('button').removeAttr("disabled");
});
// Отправка формы
$('#loginform').submit(function(e){
	e.preventDefault();
	$(this)[0].reset();
	$('.button_login').hide();
	$('.logged').show();
});


// Слайд в блоке Megacard
$(document).ready(function(){
	var slidecontent = $('.megacard__about-right .megacard__topblock').html();
	$('.megacard__mobileslide_green').html(slidecontent);
	$('.megacard__about-right .megacard__text').clone().appendTo('.megacard__mobileslide_green');
});

// Меню выбора магазина в попап меню
$('.shop-name_selected').click(function(){
	$('.popup-menu__shop-select').toggleClass('active');
	$('.popup-menu__shop-selection img').toggleClass('active');
});

$('.shop-select__option').click(function(){
	var shop = $(this).text();
	$('.shop-name').text(shop);
	$('.popup-menu__shop-select').removeClass('active');
	$('.popup-menu__shop-selection img').removeClass('active');
	$('.popup-city__radiodiv input:not(old):checked').removeAttr('checked');
	$('.popup-city__radiodiv input:not(old)[value="'+shop+'"]').attr('checked', 'checked');
});