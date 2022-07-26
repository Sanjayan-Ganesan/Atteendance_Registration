



 async function getdata(){

    try{
    var name = document.getElementById("input_person").value;

    var emp_list = await fetch(`http://localhost:3000/Search?employeName=${name}`);

    var datalist = await emp_list.json();

    console.log(datalist);

    append_att(datalist);
    
    }catch(error){

        append_no_att();

    }
   
 }

 getdata();