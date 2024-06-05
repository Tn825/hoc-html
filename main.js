
function Validator(optinos) {


    
     var formElement = document.querySelector(options.form)

     if (formElement) {
        
         optinos.rules.forEach(function (rule) {
 
         var inputElement = formElement.querySelector(rule.selector);
         var errorElement = inputElement.parentElement.querySelector('.form-message');

         if (inputElement) {
            inputElement.onblur  = function () {
              var errorMessage = rule.test(inputElement.value);

              if (errorMessage) {
                 errorElement.innerText = errorMessage;
                 inputElement.parentElement.classList.add('invaLid');
              } else {
                   errorElement.innerText = '';
                   inputElement.parentElement.classList.remove('invaLid');
              }
            }
         }

     }

} 

Validator.isRequired = function (selector) {
   return {
     selector: selector,
     test: function (value)  {
        return value.trim() ? undefined : 'Vui lòng nhập tên'
     }
   }
}

Validator.isLop = function (selector) {
    return {
        selector: selector,
        test: function ()  {

        }
      }
}
