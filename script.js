function end(){
    matrix[7][2]=3
    matrix[7][3]=3
    matrix[7][4]=3
    matrix[7][6]=3
    matrix[7][8]=3
    matrix[7][10]=3
    matrix[7][11]=3
    matrix[7][12]=3
    matrix[7][14]=3
    matrix[7][17]=3
    matrix[7][19]=3
    matrix[7][22]=3

    matrix[8][3]=3
    matrix[8][6]=3
    matrix[8][8]=3
    matrix[8][10]=3
    matrix[8][11]=1
    matrix[8][12]=3
    matrix[8][14]=3
    matrix[8][15]=3
    matrix[8][17]=3
    matrix[8][19]=3
    matrix[8][21]=3

    matrix[9][11]=5

    matrix[9][3]=3
    matrix[9][6]=3
    matrix[9][7]=3
    matrix[9][8]=3
    matrix[9][10]=3
    matrix[9][12]=3
    matrix[9][14]=3
    matrix[9][16]=3
    matrix[9][17]=3
    matrix[9][19]=3
    matrix[9][20]=3


    matrix[10][3]=3
    matrix[10][6]=3
    matrix[10][8]=3
    matrix[10][10]=3
    matrix[10][12]=3
    matrix[10][14]=3
    matrix[10][17]=3
    matrix[10][19]=3
    matrix[10][21]=3

    
    matrix[11][3]=3
    matrix[11][6]=3
    matrix[11][8]=3
    matrix[11][10]=3
    matrix[11][12]=3
    matrix[11][14]=3
    matrix[11][17]=3
    matrix[11][19]=3
    matrix[11][22]=3

    matrix[13][6]=3
    matrix[13][8]=3
    matrix[13][10]=3
    matrix[13][11]=3
    matrix[13][12]=3
    matrix[13][14]=3
    matrix[13][16]=3

    matrix[14][6]=3
    matrix[14][8]=3
    matrix[14][10]=3
    matrix[14][11]=1
    matrix[14][12]=3
    matrix[14][14]=3
    matrix[14][16]=3

    matrix[15][6]=3
    matrix[15][7]=3
    matrix[15][8]=3
    matrix[15][10]=3
    matrix[15][11]=1
    matrix[15][12]=3
    matrix[15][14]=3
    matrix[15][16]=3

    matrix[16][8]=3
    matrix[16][10]=3
    matrix[16][11]=1
    matrix[16][12]=3
    matrix[16][14]=3
    matrix[16][16]=3

    matrix[17][6]=3
    matrix[17][7]=3
    matrix[17][8]=3
    matrix[17][10]=3
    matrix[17][11]=3
    matrix[17][12]=3
    matrix[17][14]=3
    matrix[17][15]=3
    matrix[17][16]=3
}

function matrixGenerator(matrixSize, grassCount,grassEaterCount,predatorCount,kindCount,importantCount) {

     var matrix = []

     for (let i = 0; i < matrixSize; i++) {
          matrix[i] = []
          for (let j = 0; j < matrixSize; j++) {
               matrix[i][j] = 0

          }
     }


// խոտերի թվերի քանակ մատրիցայում
     for (let i = 0; i < grassCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 1
          }
     }
// խոտակերերի թվերի քանակ մատրիցայում

     for (let i = 0; i < grassEaterCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 2
          }
     }
// գիշատիչի թվերի քանակ մատրիցայում

     for (let i = 0; i < predatorCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 3
          }
     }
//  Kind-ի թվերի քանակ մատրիցայում 
     for (let i = 0; i < kindCount; i++) {

          let x = Math.floor(Math.random() * matrixSize)
          let y = Math.floor(Math.random() * matrixSize)

          if (matrix[y][x] == 0) {
               matrix[y][x] = 4
          }
     }

//    Important-ի թվերի քանակ մատրիցայում
     for (let i = 0; i < importantCount; i++) {
          let x = 12
          let y = 12
          if (matrix[y][x] == 0) {
               matrix[y][x] = 5
          }
      }  
3

     return matrix
}

let matrix = matrixGenerator(25, 25, 15, 6, 7,1)//այստեղ ամեն անգամ վերևում գրված նոր արգումենտին պետք է նոր արժեք տաս

console.log(matrix);

var side = 30

//այստեղ սեղծում ենք մեր բոլոր կերպարների համար նախատեսված զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var kindArr=[]
var importantArr=[]


function setup() {
     createCanvas(matrix[0].length * side, matrix.length * side)
     frameRate(10)
     for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {
               if (matrix[y][x] == 1) {
                    var gr = new Grass(x, y);
                    grassArr.push(gr);
               }
               else if (matrix[y][x] == 2) {

                    var grEat = new GrassEater(x, y);
                    grassEaterArr.push(grEat);
               } else if (matrix[y][x] == 3) {

                    var pre = new Predator(x, y);
                    predatorArr.push(pre);
               }
               else if (matrix[y][x] == 4) {

                    var kind = new Kind(x, y);
                    kindArr.push(kind);
               }
               else if (matrix[y][x] == 5) {

                var imp = new Important(x, y);
                importantArr.push(imp);
           }
          }
     }
}



function draw() {
     for (var y = 0; y < matrix.length; y++) {
          for (var x = 0; x < matrix[y].length; x++) {

               //չենք մոռանում նկարել բոլոր կերպարներին ըստ թվերի
               if (matrix[y][x] == 1) {
                    fill("mediumseagreen")
               }else  if (matrix[y][x] == 2) {
                    fill("yellow")
               }else  if (matrix[y][x] == 3) {
                    fill("red")
               }
               else  if (matrix[y][x] == 4) {
                    fill("blue")
               }
               else  if (matrix[y][x] == 5) {
                    fill("pink")
               }else {
                    fill("lightsteelblue")
               }

               rect(x * side, y * side, side, side)

          }
     }


     

     for (var i in grassArr) {
          grassArr[i].mul()
      }
      for (let j in grassEaterArr) {
          grassEaterArr[j].mul()
          grassEaterArr[j].eat()
  
      }
      if(grassEaterArr == 0 && predatorArr == 0 && kindArr == 0 && importantArr == 0){
           if(grassArr.length >= 625){

                end()    
           }
           
          if(grassEaterArr != 0 && importantArr != 0 && grassArr != 0 && kindArr == 0 && predatorArr == 0){
              for(let j in grassEaterArr){
                  grassEaterArr[j].mul()
                  grassEaterArr[j].eat()
              }
              
          }
      }       
      if(grassEaterArr != 0 && predatorArr == 0 && kindArr == 0 && importantArr == 0){
          for(let i in grassEaterArr){
              grassEaterArr[i].die()
          }
      }
      for (let p in predatorArr) {
          predatorArr[p].mul()
          predatorArr[p].eat()
      }
      for (let k in kindArr) {
           if( predatorArr.length == 0 && grassEaterArr.length == 0){
                
                kindArr[k].mul()
                console.log(("stres"));
               }
           kindArr[k].eat()
      }
      if(importantArr != 0 && grassArr == 0 && kindArr == 0 && predatorArr != 0 && grassEaterArr == 0){
          for(var i in importantArr){
          //     importantArr[i].mul()  
              importantArr[i].eat()
          }
      }
      if (grassArr == 0 && grassEaterArr == 0 && predatorArr == 0) {
          var x = 0
          var y = 0
          matrix[y][x] = 5
          importantArr.push(new Important(x, y))
      }
      if (matrix[0][0] == 5 && kindArr == 0 && grassEaterArr == 0) {
          let x = 0
          let y = 0
          grassArr.push(new Grass(x, y))
      }
      if(grassArr != 0 && importantArr != 0 && kindArr == 0 && predatorArr == 0 && grassEaterArr == 0){
          let x = 10
          let y = 10
          for(var i = 0; i < 3; i++){
               grassEaterArr.push(new GrassEater(x,y))
               predatorArr.push(new Predator(x+5,y+5))
          }
  
  
      }



}
