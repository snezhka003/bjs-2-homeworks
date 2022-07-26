//Задача № 1 - решение:

function parseCount(value) {
    let number = Number.parseInt(value, 10);
    if (isNaN(number)) {
        throw new Error ("Невалидное значение");
    }
    
    return number;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

//Задача № 2 - решение:

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

        if (this.sideA + this.sideB < this.sideC || this.sideA + this.sideC < this.sideB || this.sideB + this.sideC < this.sideA) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    };

    getArea() {
        let p = (this.sideA + this.sideB + this.sideC) / 2;
        return +(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));
    };
}

function getTriangle(sideA, sideB, sideC) {
    try {
        let triangle = new Triangle(sideA, sideB, sideC);
        return triangle;
    } catch(error) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
        
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }         
}

