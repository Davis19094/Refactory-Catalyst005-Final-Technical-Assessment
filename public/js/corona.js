function formValidation (){
    var surName =  document.coronavirus.surname;
    var givenName =  document.coronavirus.given_name;
    var doB =  document.coronavirus.dob;
    var residence =  document.coronavirus.placeofresidence;
    var occupation =  document.coronavirus.occupation;
    var  nationaliTy=  document.coronavirus.nationality;
    var  genDer=  document.coronavirus.gender;
    var  categoRy=  document.coronavirus.category;

    event.preventDefault()

if(fornames(surName)){}
if(forname(givenName)){}

if(residents(residence)){}
if(occupations(occupation)){}
if(nation(nationaliTy)){}
if(genders(gender)){}
if(categories(category)){}






          
    
return false;

}
var fornames=(sname)=>{
    var letters =  /^[A-Za-z]+$/;
    if(sname.value.match(letters) && sname.value.length< 16 && sname.value.length >1
    ){
        return true;
    }
    else{
        
        sname.style.border = "2px solid red"
        //document.getElementById('error').style.display = "none"
        document.getElementById('error1').style.display = "block"
        sname.addEventListener("click", ()=>{sname.style.border=""})
        return false;
    }   
  }

  var forname=(givname)=>{
    var letters =  /^[A-Za-z]+$/;
    if(givname.value.match(letters) && givname.value.length< 16 && givname.value.length >1
    ){
        return true;
    }
    else{
        
        givname.style.border = "2px solid red"
        //document.getElementById('error').style.display = "none"
        document.getElementById('error2').style.display = "block"
        givname.addEventListener("click", ()=>{sname.style.border=""})
        return false;
    }   
  }
  var residents=(presidence)=>{
    var letters =  /^[A-Za-z]+$/;
    if(presidence.value.match(letters) && presidence.value.length< 20 && presidence.value.length >1
    ){

        return true;
    }
    else{
        
        presidence.style.border = "2px solid red"
        //document.getElementById('error').style.display = "none"
        document.getElementById('error4').style.display = "block"
        presidence.addEventListener("click", ()=>{presidence.style.border=""})
        return false;
    }   
  }


  var occupations=(occupation)=>{
    var letters =  /^[A-Za-z]+$/;
    if(occupation.value.match(letters) && occupation.value.length< 50 && occupation.value.length >5
    ){

        return true;
    }
    else{
        
        occupation.style.border = "2px solid red"
        //document.getElementById('error').style.display = "none"
        document.getElementById('error5').style.display = "block"
        occupation.addEventListener("click", ()=>{occupation.style.border=""})
        return false;
    }   
  }
  var nation=(nationality)=>{
    var letters =  /^[A-Za-z]+$/;
    if(nationality.value.match(letters) && nationality.value.length< 20 && nationality.value.length >5
    ){

        return true;
    }
    else{
        
        nationality.style.border = "2px solid red"
        //document.getElementById('error').style.display = "none"
        document.getElementById('error6').style.display = "block"
        nationality.addEventListener("click", ()=>{nationality.style.border=""})
        return false;
    }   
  }

  var categories=(category)=>{
    
    if(!category.value=="default")
    {

        return true;
    }
    else{
        
        category.style.border = "2px solid red"
        //document.getElementById('error').style.display = "none"
        document.getElementById('error7').style.display = "block"
        category.addEventListener("click", ()=>{category.style.border=""})
        return false;
    }   
  }























  

  