const whichSchool=function (age) {
  if (age < 13) {
    return "Elementary School"
  }
  if (age >= 13 && age <= 18) {
    return "Secondary School"
  }
  else return "Lighthouse Labs"
  
}