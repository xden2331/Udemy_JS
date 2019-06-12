 // students score, total possible score
 let grade2Percentage = function (score, total) {
     let percentage = score/total * 100.0
     let grade = "F"
     if(percentage >= 90){
         grade = "A"
     }else if (percentage >= 80){
         grade = "B"
     }else if (percentage >= 70){
         grade = "C"
     }else if (percentage >= 60){
         grade = "D"
     }
     return `You got a ${grade} (${percentage}%)!`
 }

 console.log(grade2Percentage(0,20))