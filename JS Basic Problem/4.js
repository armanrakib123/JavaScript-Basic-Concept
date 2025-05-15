function calculateFinalScore(obj){
    if(typeof obj!=="object"){
        return "Invalid Input";
    }
    const sum_point=obj.testScore+obj.schoolGrade+obj.isFFamily;

    if(sum_point>=80){
        return "He can get admission";
    }else{
        return "He wii not be admitted";
    }

}
const student={
    name: "Rajib", 
    testScore: 45,
    schoolGrade: 25,
    isFFamily : 20,
}
const result=calculateFinalScore(student);
console.log(result);