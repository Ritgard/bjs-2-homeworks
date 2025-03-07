'use strict';

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, type) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'detective';
  }
}

/*-------------------------*/

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
    return this.books;
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) return this.books[i];
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice([i], 1)[0];
      }
    }
    return null;
  }
}

const library = new Library('Красное село библиотека');
library.addBook(
  new DetectiveBook(
    'Артур Конан Дойл',
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
  )
);
/*-------------------------*/
class Student {
  constructor(name) {
    this.name = name;
  }

  addMark(mark, nameItem) {
    if (mark > 5 || mark < 1) {
      console.log('Ошибка, оценка должна быть числом от 1 до 5');
    } else {
      if (this[nameItem] !== undefined) {
        this[nameItem].push(mark);
      } else {
        this[nameItem] = [mark];
      }
    }
  }

  getAverageBySubject(nameItem) {
    if (this[nameItem] !== undefined) {
      let item = this[nameItem].reduce((acc, num) => acc + num, 0);
      item = item / this[nameItem].length;
      item = item.toFixed(); // окргуление числа до двух знаков после запятой
      return +item;
    } else {
      return console.log('Несуществующий предмет');
    }
  }

  getAverage() {
    // в методе проводится итерация по всем полям объекта, которому был вызван данный метод, в каждом шаге цикла, проверяется условие, является ли значение массивом с оценками или нет
    let totalAverageOfArrays = 0;
    let totalSumOfArrays = []; // массив со средней оценкой всех массивов
    for (let key in this) {
      if (Array.isArray(this[key])) {
        let item = this[key].reduce((acc, num) => acc + num, 0);
        item = item / this[key].length;
        totalSumOfArrays.push(item);
      }
    }
    totalAverageOfArrays = totalSumOfArrays.reduce((acc, num) => acc + num, 0);
    totalAverageOfArrays = totalAverageOfArrays / totalSumOfArrays.length;
    return totalAverageOfArrays;
  }
}
const student = new Student('Олег Никифоров');
student.addMark(5, 'algebra');
student.addMark(5, 'algebra');
student.addMark(5, 'geometry');
student.addMark(4, 'geometry');
student.addMark(6, 'geometry'); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject('geometry'); // Средний балл по предмету geometry 4.5
student.getAverageBySubject('biology'); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
