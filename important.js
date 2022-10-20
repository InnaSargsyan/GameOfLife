class Important extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 25
}

    getNewCoordinates() {
        let i = Math.floor(Math.random() * 20)
        this.directions = [
            [this.x - i, this.y - i],
            [this.x, this.y - i],
            [this.x + i, this.y - i],
            [this.x - i, this.y],
            [this.x + i, this.y],
            [this.x - i, this.y + i],
            [this.x, this.y + i],
            [this.x + i, this.y + i]
        ];

    }

    chooseCell(char, char1, char2, char3) {
        
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
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char3) {
                    found.push(this.directions[i])
                }
            }
        }

        return found;
    }


    // mul() {
    //     this.multiply++
    //     var emptyCells = this.chooseCell(0)
    //     var newCell = random(emptyCells)

    //     if (newCell && this.multiply >= 6) {

    //         var newX = newCell[0]
    //         var newY = newCell[1]

    //         matrix[newY][newX] = 5
    //         var imp = new Important(newX, newY)
    //         importantArr.push(imp)


    //         this.multiply = 0
    //     }


    // }


    move() {
        var emptyCells = this.chooseCell(0)
        var newCell = random(emptyCells)

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY
        } else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }


    eat() {
        var emptyCells = this.chooseCell(1, 2, 3, 4)
        var newCell = random(emptyCells)

        if (newCell) {
            this.energy++

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]

            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }

            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                }

            }
            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                }

            }
            for (let i = 0; i < kindArr.length; i++) {
                if (kindArr[i].x == newX && kindArr[i].y == newY) {
                    kindArr.splice(i, 1)
                }

            }


        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0

        for (var i in importantArr) {
            if (this.x == importantArr[i].x && this.y == importantArr[i].y) {

                importantArr.splice(i, 1)
                break
            }
        }
    }
}