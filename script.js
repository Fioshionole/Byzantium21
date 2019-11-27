//Загрузчик
document.body.onload = function test() {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 100)
}

//Поиск
document.querySelector('#search').oninput = function () {
    var val = this.value.toLowerCase(this.value.trim());
    var searchItems = document.querySelectorAll('.container a');
    var container = document.querySelector('.container');

    if (val != '') {
        searchItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        searchItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}
