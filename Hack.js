function check() {
    var x = Math.floor((Math.random() * 10) + 1);
    var i = document.getElementById('inputFiled').value;
 
    if (i === x) {
      return "Good Work";
    }else {
       return "Not matched";
    }
   
}
