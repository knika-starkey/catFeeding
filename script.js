let cat = {
  breed: "Гімалайська",
  name: "Нала",
  weight: 3,
  year: 4,
  minW: 9,
  maxW: 12,
  feed: function () {
    this.weight++;
    if (this.weight > this.maxW) alert("Занадто багато!");
  },
  diet: function () {
    this.weight--;
    if (this.weight < this.minW) alert("Занадто мало!");
  },
  showWeight: function () {
    alert("Моя вага: " + this.weight);
  },
  toString: function () {
    return `Моє ім'я : ${this.name}\nМені ${this.year} років\nМоя порода : ${this.breed}`;
  },
};
alert(cat.toString());
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.showWeight();
cat.diet();
cat.diet();
cat.diet();
cat.diet();
cat.showWeight();
