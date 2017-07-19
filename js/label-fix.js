'use strict';

(function(){
    var fields = Array.from(document.querySelectorAll('.text-field'));

    fields.forEach(function(field) {
        field.querySelector('.text-field__input').addEventListener('input', function(evt){
            if (field.querySelector('.text-field__input').value) {
                field.querySelector('.text-field__input').classList.add('text-field__input--not-empty');
            } else {
                field.querySelector('.text-field__input').classList.remove('text-field__input--not-empty');
            }
        });
    });
})();
