function Student(name, gender, age) {
    // создается конструктор
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    // метод, который генерирует поле subject со значение предмета
    this.subject = subjectName;
};

// метод добавляет в массив marks оценку mark
Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
};

// метод добавляет сразу много оценок студенту
Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
        this.marks = [...marks];
    } else {
        this.marks.push(...marks);
    }
};
// метод возвращает среднее арифметическое оценок студентов
Student.prototype.getAverage = function () {
    let average = 0; // инициализированная перменная с начальным значением среднего арифметического
    for (item of this.marks) {
        average += item;
    }
    return average / this.marks.length;
};

// метод исключает студентов и устанавливает причину отчисления, удаляет свойства subject и marks и добавляет свойства excluded со значение reason
Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};
