'use strict';

function parseCount(value) {
  if (isNaN(Number.parseInt(value))) {
    throw new Error('Невалидное значение');
  } else {
    return Number.parseInt(value);
  }
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}
/*-----------------*/
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || b + c < a || c + a < b) {
      throw Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter(a, b, c) {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }
  getArea() {
    let p2 = (this.a + this.b + this.c) * 0.5; // полупериметр
    let square = +Math.sqrt(
      p2 * (p2 - this.a) * (p2 - this.b) * (p2 - this.c)
    ).toFixed(3);
    return square;
  }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      getPerimeter: () => 'Ошибка! Треугольник не существует',
      getArea: () => 'Ошибка! Треугольник не существует',
    };
  }
}
