const btnElement = document.getElementById("btn")  // button
const bmiInputElement = document.getElementById("bmi-result")  //Bmi result output
const weightConditionElement = document.getElementById("weight-condition") //weight condition result


//calculate Bmi function
const calculateBMI = () => {
  const heightValue = document.getElementById("height").value / 100 //height value in metres
  const weightValue = document.getElementById("weight").value       //weight value in kg
  const bmiValue = weightValue / (heightValue * heightValue)        //bmi value calculation  
  bmiInputElement.value = bmiValue                                  //bmi value output 

  //weight condition calculation
  if(bmiValue < 18.5){
    weightConditionElement.innerText = "UNDER WEIGHT"
  } 
  else if(bmiValue >= 18.5 && bmiValue <= 24.9){
    weightConditionElement.innerText = "NORMAL WEIGHT"
  } 
  else if(bmiValue >= 25 && bmiValue <= 29.9){
    weightConditionElement.innerText = "OVER WEIGHT"
  }
  else if(bmiValue >=30){
    weightConditionElement.innerText = "OBESITY"
  }

}

btnElement.addEventListener("click", calculateBMI ) //we clicking on button and calling the function
