
const form = document.getElementById("food-form-data");

const tbodyEl = document.querySelector("tbody");

const genderEl = document.getElementsByName("gender");
let selectedGender;

const FoodEl = document.getElementsByName("food");
let selectedFoods;

genderEl.forEach(field => {
    field.addEventListener("click",()=>{
        selectedGender = field.value;
        // console.log(selectedGender);
    }) 
});

FoodEl.forEach(items => {
    items.addEventListener("click", ()=>{
        selectedFoods = items.value;
        // console.log(selectedFoods);
    })
});



form.addEventListener("submit", function(event){

    event.preventDefault();
    
    const FirstName = document.getElementById("firstName").value;
    const LastName = document.getElementById("lastName").value;
    const Address = document.getElementById("address").value;
    const Pincode = document.getElementById("pincode").value;
    const Gender = selectedGender;
    const Foods = selectedFoods;
    const State = document.getElementById("state").value;
    const Country = document.getElementById("country").value;
    
    tbodyEl.innerHTML += `
        <tr>
            <td>${FirstName}</td>
            <td>${LastName}</td>
            <td>${Address}</td>
            <td>${Pincode}</td>
            <td>${Gender}</td>
            <td>${Foods}</td>
            <td>${State}</td>
            <td>${Country}</td>
        </tr>
    `
    form.reset();
});