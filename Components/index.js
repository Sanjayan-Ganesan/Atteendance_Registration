
var menu = document.getElementById("menu");
var topic_menu = document.getElementById("topic_menu");


 async function getdata(){

    try{
    var name = document.getElementById("input_person").value;

    var emp_list = await fetch(`http://localhost:3000/Search?employeName=${name}`);

    var datalist = await emp_list.json();

    //console.log(datalist);

    append_att(datalist);
    
    }catch(error){

no_append_att();

    }
   
 }

 //getdata();


 function append_att(datalist){

    console.log(datalist);

    document.getElementById("menu").innerHTML= "";
    document.getElementById("topic_menu").innerHTML= "";

    let car = document.createElement("div");
    car.style.display="flex";
car.style.justifyContent= "space-evenly";
car.style.border="1px solid black";

    


    let topics_name = document.createElement("h5");
    topics_name.textContent="Employee Name";

    let cit = document.createElement("h5");
    cit.textContent="Check-in-Time";


    let cot = document.createElement("h5");
    cot.textContent="Check-out-Time";

    let date_ = document.createElement("h5");
    date_.textContent="Date";

    let w_ = document.createElement("h5");
    w_.textContent="Working hours/day";


    let dep = document.createElement("h5");
    dep.textContent="Department";

   
   
   
   
   
   
    datalist.forEach(function (element){


let card = document.createElement("div");

card.style.display="flex";
card.style.justifyContent= "space-evenly";
card.style.border="1px solid black";
card.style.height="20%";
card.style.backgroundColor="transparent";


let emp_name = document.createElement("p");

emp_name.textContent = element.employeName;



let c_i_t = document.createElement("p");

c_i_t.textContent = element.checkinTime ;


let c_o_t = document.createElement("p");


c_o_t.textContent = element.checkouttime ;


let d_ate = document.createElement("p");

d_ate.textContent = element.date;

let t_time = document.createElement("p");

t_time.textContent = ((parseInt(element.checkouttime)) - (parseInt(element.checkinTime) )) +" "+"hour";


let dept = document.createElement("p");
dept.textContent = element.dept;


card.append(emp_name,c_i_t,c_o_t,d_ate,t_time,dept);



menu.append(card);

    })
    car.append(topics_name,cit,cot,date_,w_,dep)
    topic_menu.append(car);

   
 }


 function no_append_att(){

    document.getElementById("menu").innerHTML = "";

    document.getElementById("topic_menu").innerHTML="";
 }


