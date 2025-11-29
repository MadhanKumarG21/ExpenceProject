const button = document.getElementById("click");
const cont1 = document.getElementById("content1");

let totalExpense = 0;
let income1 = 0; 

function click() {
  income1 = Number(document.getElementById("income").value);
  const expense = Number(document.getElementById("textbox").value);
  const item = document.getElementById("textbox1").value.trim();
  //Validate inputs
  if (!income1 || income1 <= 0) {
    alert("Please enter your income first!");
    return;
  }
  if (isNaN(expense) || expense <= 0) {
    alert("Please enter a valid expense amount");
    return;
  }
  if (!item) {
    alert("Please enter an item name!");
    return;
  }
  //Prevent total expenses from above income
  if (totalExpense + expense > income1) {
    alert("Enter a valid expence amount!");
    return;
  }
  // show income amount
  document.getElementById("amount").innerHTML = "Amount: " + income1;
  totalExpense += expense;
  document.getElementById("para1").innerHTML = totalExpense;
  document.getElementById("para2").innerHTML = income1 - totalExpense;
  // create expense item block
  const itemDiv = document.createElement("div");
  itemDiv.style.display = "flex";
  itemDiv.style.alignItems = "center";
  itemDiv.style.gap = "10px";
  itemDiv.style.borderBottom = "2px solid white";
  const line2 = document.createElement("p");
  const line1 = document.createElement("p");
  line2.textContent = item;
  line2.style.textTransform = "capitalize";
  line1.textContent = expense;
  line1.style.fontSize = "20px";
  line2.style.fontSize = "20px";
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";
  // styling buttons
  [editBtn, deleteBtn].forEach(btn => {
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.padding = "5px 10px";
  });
  editBtn.style.backgroundColor = "#062c47";
  deleteBtn.style.backgroundColor = "red";
  const btnContainer = document.createElement("div");
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);
  itemDiv.appendChild(line2);
  itemDiv.appendChild(line1);
  itemDiv.appendChild(btnContainer);
  cont1.appendChild(itemDiv);
  cont1.style.display = "flex";
  cont1.style.flexDirection = "column";
  
  cont1.style.backgroundColor = "#b0d5e6ff";
  cont1.style.borderRadius = "20px";
  cont1.style.padding = "10px";
  cont1.style.justifyContent="space-around  ";
  // Delete button
  deleteBtn.addEventListener("click", () => {
    cont1.removeChild(itemDiv);
    totalExpense -= expense;
    document.getElementById("para1").innerHTML = totalExpense;
    document.getElementById("para2").innerHTML = income1 - totalExpense;
  });
  // Edit button
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit expense amount:", line1.textContent);
    const newItem = prompt("Edit item name:", line2.textContent);
    const newAmount = Number(newText);

    if (isNaN(newAmount) || newAmount <= 0) {
      alert("Please enter a valid number!");
      return;
    }
    //  prevent exceeding total after edit
    const tempTotal = totalExpense - expense + newAmount;
    if (tempTotal > income1) {
      alert("Enter a valid expence amount");
      return;
    }
    line1.textContent = newAmount;
    line2.textContent = newItem;
    totalExpense = tempTotal;
    document.getElementById("para1").innerHTML = totalExpense;
    document.getElementById("para2").innerHTML = income1 - totalExpense;
  });
  document.getElementById("textbox").value = "";
  document.getElementById("textbox1").value = "";
  document.getElementById("income").style.display = "none";
  document.getElementById("in").style.display = "none";
}
function remove() {
  cont1.innerHTML = ""; // clear all expense items
  totalExpense = 0;
  income1 = 0;
const rem=document.getElementById("content1");
rem.style.display="none";
  document.getElementById("income").value = "";
  document.getElementById("textbox").value = "";
  document.getElementById("textbox1").value = "";
  document.getElementById("para1").innerHTML = "0";
  document.getElementById("para2").innerHTML = "0";
  document.getElementById("amount").innerHTML = "";

  document.getElementById("income").style.display = "block";
  document.getElementById("in").style.display = "block";
}

button.addEventListener("click", click);

