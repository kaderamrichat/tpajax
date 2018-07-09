const app = (function(){
    let getTxtBtn,getUserBtn,getUsersBtn,getDataPhpBtn,submitFormBtn;
    let divExo1,divExo2;
    let inputName;

    const init = function(){
        //btns
        getTxtBtn = document.getElementById("getTxt-btn");
        getUserBtn = document.getElementById("getuser-btn");
        getUsersBtn = document.getElementById("getusers-btn");
        getDataPhpBtn = document.getElementById("getdata-php");
        submitFormBtn = document.getElementById("post-form");
        

        //divs
        divExo1 = document.getElementById("exo1");
        divExo2 = document.getElementById("exo2");
        
        //Listners
        getTxtBtn.addEventListener("click", getTxt);
        getUserBtn.addEventListener("click", getUser);
        getUsersBtn.addEventListener("click", getUsers);
        getDataPhpBtn.addEventListener("click", getDataPhp);
        submitFormBtn.addEventListener("submit", getPhpForm);

        //forms
        

    }

    const getTxt = function(){
        const xhr = new XMLHttpRequest();
        const url = "data.txt";

        xhr.open("GET",url, true);

        xhr.onload = function(){
            if(this.status === 200){
                console.log(xhr.responseText);
                divExo1.innerHTML = this.responseText;
            }
        }

        xhr.send();
    }
    const getUser = function(){
        const xhr = new XMLHttpRequest();
        const url = "user.json";

        xhr.open("GET",url, true);

        xhr.onload = function(){
            if(this.status === 200){
                const res = JSON.parse(xhr.responseText);
                divExo2.innerHTML += `
                                    <h3>User :</h3>
                                    <ul>
                                    <li>${res.id}</li>
                                    <li>${res.nom}</li>
                                    <li>${res.prenom}</li>
                                    </ul>`;
            }
        }

        xhr.send();
    }

    const getUsers = function(){
        const xhr = new XMLHttpRequest();
        const url = "users.json";

        xhr.open("GET",url, true);

        xhr.onload = function(){
            if(this.status === 200){
                const res = JSON.parse(xhr.responseText);
                res.forEach(el => {
                        divExo2.innerHTML += `
                                            <h3>User ${el.id} :</h3>
                                            <ul>
                                            <li>${el.id}</li>
                                            <li>${el.nom}</li>
                                            <li>${el.prenom}</li>
                                            </ul>`;
                })
            }    
                
        }
        xhr.send();
    }

    const getDataPhp = function(){
        const xhr = new XMLHttpRequest();
        const url="data.php";

        xhr.open("GET", url);

        xhr.onload = function(){
            console.log(this.responseText);
        }
        xhr.send();
    }

    const getPhpForm = function(e){
        e.preventDefault();

        inputName = document.getElementById("name").value;
        const params = "name" + inputName;
        
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "data.php");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.onload = function(){
            console.log(inputName);
            divExo2.innerHTML += inputName;
        }
        xhr.send();

    }

window.addEventListener("DOMContentLoaded",init);

}());