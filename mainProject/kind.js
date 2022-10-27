class Kind extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 12
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],

            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3]
        ];

    }
    chooseCell(char, char1) {
        let found = super.chooseCell(char)
        this.getNewCoordinates()
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)
        // console.log(kindArr.length);

        if (newCell && this.multiply >= 16) {

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 4
            var kind = new Kind(newX, newY)
            kindArr.push(kind)

            //  console.log(newCell);
            this.multiply = 0
        }


    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0, 1)
        var newCell = random(emptyCells)

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]


            if (matrix[newY][newX] == 0) {
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0

            }
            else if (matrix[newY][newX] == 1) {
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 1


            }





            this.x = newX
            this.y = newY
        } else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }



    eat() {
        var emptyCells = this.chooseCell(2, 3)
        var newCell = random(emptyCells)
        // console.log(newCell);
        if (newCell) {
            this.energy++

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            for (var i in predatorArr) {
                // console.log(predatorArr);
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break
                }
            }

            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }
            }

        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (let i in kindArr) {
            if (this.x == kindArr[i].x && this.y == kindArr[i].y) {

                kindArr.splice(i, 1)
            }
        }
    }

}