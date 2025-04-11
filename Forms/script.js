window.addEventListener('load', () => {
    const phoneInput = document.querySelector('#telefone');
    phoneInput.addEventListener('keydown', disallowNonNumericInput);
    phoneInput.addEventListener('keyup', formatToPhone);
  });
  
  const disallowNonNumericInput = (evt) => {
    if (evt.ctrlKey) { return; }
    if (evt.key.length > 1) { return; }
    if (/[0-9.]/.test(evt.key)) { return; }
    evt.preventDefault();
  }
  
  const formatToPhone = (evt) => {
    const digits = evt.target.value.replace(/\D/g,'').substring(0,11);
    const areaCode = digits.substring(0,2);
    const nine = digits.substring(2,3);
    const prefix = digits.substring(3,7);
    const suffix = digits.substring(7,11);
  
    if(digits.length > 7) {evt.target.value = `(${areaCode}) ${nine} ${prefix} - ${suffix}`;}
    else if(digits.length > 3) {evt.target.value = `(${areaCode}) ${nine} ${prefix}`;}
    else if (digits.length > 2) {evt.target.value = `(${areaCode}) ${nine}  `;}
    else if(digits.length > 0) {evt.target.value = `(${areaCode}`;}
  };