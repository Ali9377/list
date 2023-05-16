const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      this.print(i);
    }
  },

  add: function (text) {
    const newItem = {
      text: text,
      completed: false,
    };
    this.items.unshift(newItem);
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    const item = this.items[index];
    const status = item.completed ? "[x]" : "[ ]";
    console.log(`${status} ${item.text}`);
  },

  complete: function (index) {
    if (this.items[index]) {
      this.items[index].completed = true;
    }
  },
};

todoList.add("Перейти к следующему релизу");
todoList.complete(1);
todoList.remove(0);
todoList.printAll();
todoList.print(3);
