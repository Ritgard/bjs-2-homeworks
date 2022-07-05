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
        this.state = this._state * 1.5;
    }

    set state(num) {
        if (num < 0) {
            this._state = 0;
        } else if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
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
        if (book._state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        let result;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
                result = this.books[i];
            } else {
                result = null;
            }
        }
        return result;
    }

    giveBookByName(bookName) {
        let book;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                book = this.books.splice([i], 1);
            } else {
                book = null;
            }
        }
        return book;
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
            item = item.toFixed(1); // окргуление числа до двух знаков после запятой
            console.log(`Средний балл по предмету ${nameItem} ${item}`);
        } else {
            console.log('Несуществующий предмет');
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
        totalAverageOfArrays = totalSumOfArrays.reduce(
            (acc, num) => acc + num,
            0
        );
        totalAverageOfArrays = totalAverageOfArrays / totalSumOfArrays.length;
        console.log(`Средний балл по всем оценкам ${totalAverageOfArrays}`);
    }
}
