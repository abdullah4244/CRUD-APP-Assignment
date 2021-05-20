 let form = document.forms['person-form'];
 let lists = document.querySelector('.table .list');
 const updatebtn = document.getElementById('updatebtn');
 updatebtn.style.display = "none";
 let updateindex = -1;

 let persons = [];

 form.addEventListener('submit', (e)=> {
  e.preventDefault();
  let personinfo = {};

    const name = form.querySelector('#name').value;
    personinfo['name'] = name;
    const email = form.querySelector('#email').value;
    personinfo['email'] = email;
    const cnic = form.querySelector('#cnic').value;
    personinfo['cnic'] = cnic;
    const address = form.querySelector('#address').value;
   personinfo['address'] = address;

   insert(personinfo);
   clear();
   

 })

 function insert(person) {
     persons.push(person);
 
   
     renderlist();

 }

 function renderlist() {
    lists.innerHTML = '';
    persons.forEach((p)=>{
      

        lists.innerHTML +=`<div class="row justify-content-center bg-primary bbottom">
     <h2 class="col-2">${p.name}</h2>
     <h2 class="col-3">${p.email}</h2>
     <h2 class="col-2">${p.cnic}</h2>
     <h2 class="col-2">${p.address}</h2>
      <div class="col-3"><button type="button" class="btn btn-success">EDIT</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </div>

     </div>`
     })
 }

 lists.addEventListener('click' , (e)=> {

   if(e.target.textContent == "Delete") {
       if(confirm("Are you sure you want to delete")){
       const parent = e.target.parentElement.parentElement.parentElement;
       const child = e.target.parentElement.parentElement;
       const index = Array.prototype.indexOf.call(parent.children , child);
       persons.splice(index , 1);
       renderlist();
       }
   }
   if(e.target.textContent == "EDIT") {
     if(confirm("Are you sure you want to update")){
 const data = e.target.parentElement.parentElement.querySelectorAll('h2');

 const name = data[0].textContent;
 const email = data[1].textContent;
 const cnic = data[2].textContent;
 const address = data[3].textContent;

 const parent = e.target.parentElement.parentElement.parentElement;
 const child = e.target.parentElement.parentElement;
 updateindex = Array.prototype.indexOf.call(parent.children , child);
  update(name,email,cnic,address);

   }}
 })

 function clear() {
    form.querySelector('#name').value = "";
    form.querySelector('#email').value= "";
    form.querySelector('#cnic').value = "";
    form.querySelector('#address').value = "";
 }


 function update(name,email,cnic,address) {
    form.querySelector('#name').value = name;
    form.querySelector('#email').value = email;
    form.querySelector('#cnic').value = cnic;
    form.querySelector('#address').value = address;
    updatebtn.style.display = "initial";
    document.getElementById('submitbtn').style.display="none";

 }

updatebtn.addEventListener('click' , (e)=> {
    

    if(confirm("PLEASE CONFIRM AGAIN")) {
        const name = form.querySelector('#name').value;
        persons[updateindex].name = name;
        const email = form.querySelector('#email').value;
        persons[updateindex].email = email;
        const cnic = form.querySelector('#cnic').value;
        persons[updateindex].cnic = cnic;
        const address = form.querySelector('#address').value;
        persons[updateindex].address = address;
        renderlist();
        updatebtn.style.display = "none";
        document.getElementById('submitbtn').style.display="initial";
        clear();
    }
    
    
})