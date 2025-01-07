function changeColor() {
    const selectedColor = document.getElementById('color').value;
    document.body.style.background = selectedColor;

    // إذا كانت الخلفية سوداء، نجعل النص أبيض والعكس
    document.body.style.color = (selectedColor === 'black') ? 'white' : 'black';

    // الحفاظ على العنصر "منيوا" بلونه الثابت
    document.querySelector('.manue').style.background = 'white';
}




/*searsh*/



    function searsh(){
       let searchBar = document.querySelector('.search-input').value.toUpperCase();//input text
       let productList = document.querySelector('.selected');//all items
       let product = document.querySelectorAll('.imgBox');//التحتوي علي عنصر المراد البحث عنه
       let productName = document.getElementsByTagName('#');//اسم العنصر المكاتوب بين الاتش تو


       for (let i = 0; i<productName.length; i++){
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            product[i].style.display = "";
        } else{
            product[i].style.display = "none";
        }

       }

    }
    /*منع الموقع من السرقه*/ 
    //<![CDATA[
        document.oncontextmenu = function() {
            return false;
            };
            document.onkeydown = function(e) {
            if (e.keyCode == 123) {
            return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
            }
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
            }
            }
            //]]>
