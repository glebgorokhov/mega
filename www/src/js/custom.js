// Кнопка Войти в шапке
$('.header__login').click(function(e){
	e.preventDefault();
	$(this).hide();
	$('.header__logged').show();
})

// Кнопка Выйти в шапке
$('.header__logged a.logout').click(function(e){
	$('.header__logged').hide();
	$('.header__login').show();
});