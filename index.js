        // local storage saving function
        function save(){
            var fieldValue = document.getElementById('textField').value;
            localStorage.setItem("text",fieldValue);

            var efieldValue = document.getElementById('emailField').value;
            localStorage.setItem("email",efieldValue);

            var nfieldValue = document.getElementById('numField').value;
            localStorage.setItem("num",nfieldValue);

            var afieldValue = document.getElementById('areaField').value;
            localStorage.setItem("area", afieldValue);
            alert("Form Submited , Thanks!");

        }

        function load(){
            var storedValue = localStorage.getItem('text');
            var etoredValue = localStorage.getItem('email');
            var ntoredValue = localStorage.getItem('num');
            var atoredValue = localStorage.getItem("area");

            if(storedValue){
                document.getElementById('textField').value = storedValue;
          
            }

            if(etoredValue){
                document.getElementById('emailField').value = etoredValue;
                
            }

            if(ntoredValue){
                document.getElementById('numField').value = ntoredValue;
              
            }

            if(atoredValue){
                document.getElementById('areaField').value = atoredValue;
              
            }
        }



        // The remove info from localStorage 
        function remove(){
            document.getElementById('textField').value = "";
            localStorage.removeItem('text');

            document.getElementById('emailField').value = "";
            localStorage.removeItem('email');


            document.getElementById('numField').value = "";
            localStorage.removeItem('num');


            document.getElementById('areaField').value = "";
            localStorage.removeItem('area');

            alert('The Form Local Storage Data Is Terminated !!!')
        }


