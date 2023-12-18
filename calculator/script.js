class Calculator {
  constructor() {
    this.numbers = [];
    this.elResultDiv = document.querySelector(".mathResult");
    this.elHistoryDiv = document.querySelector(".history");
    this.elEqualDiv = document.querySelector(".equal");
  }

  getNumberClick(variant) {
    let numbersArr = this.elResultDiv.textContent.split(" ");
    if (Number(variant) || variant == "0") {
      //ete tiva uxxaki texContentin avelacnuma
      this.elResultDiv.textContent += variant;
    } else if (
      (Number(
        this.elResultDiv.textContent[this.elResultDiv.textContent.length - 1]
      ) ||
        this.elResultDiv.textContent[
          this.elResultDiv.textContent.length - 1
        ] === "0") &&
      variant !== "."
    ) {
      //ete mer varianty operatora ev iranic araj tiv e grvel, voch te operator
      this.elResultDiv.textContent += " " + variant + " ";
    } else if (
      this.elResultDiv.textContent[this.elResultDiv.textContent.length - 2] !==
        variant &&
      variant !== "."
    ) {
      //ete varianty operatora u iranic araj operatora grve
      this.elResultDiv.textContent =
        this.elResultDiv.textContent.slice(
          0,
          this.elResultDiv.textContent.length - 2
        ) +
        " " +
        variant +
        " ";
    } else if (
      !numbersArr[numbersArr.length - 1].includes(".") &&
      variant === "."
    ) {
      //amboxj tveri hamar ete tvi mej chi parunakum kety avelacni miayn mek hat ket ayd tvi hamar
      this.elResultDiv.textContent += variant;
    }
  }

  getResult() {
    this.numbers = this.elResultDiv.textContent.split(" ");
    this.numbers = this.numbers.filter((item) => {
      return item != "";
    });
    for (let index = 0; index < this.numbers.length; index++) {
      console.log(this.numbers);
      switch (this.numbers[index]) {
        case "×":
          this.numbers[index] =
            +this.numbers[index - 1] * +this.numbers[index + 1];
          this.numbers.splice(index - 1, 3, this.numbers[index]);
          index--;
          break;
        case "÷":
          this.numbers[index] =
            +this.numbers[index - 1] / +this.numbers[index + 1];
          this.numbers.splice(index - 1, 3, this.numbers[index]);
          index--;
          break;
        case "%":
          this.numbers[index] =
            (+this.numbers[index - 1] / 100) * +this.numbers[index + 1];
          this.numbers.splice(index - 1, 3, this.numbers[index]);
          index--;
          break;
        default:
          break;
      }
    }

    for (let index = 0; index < this.numbers.length; index++) {
      console.log(this.numbers);
      switch (this.numbers[index]) {
        case "+":
          this.numbers[index] =
            +this.numbers[index - 1] + +this.numbers[index + 1];
          this.numbers.splice(index - 1, 3, this.numbers[index]);
          index--;
          break;
        case "-":
          this.numbers[index] =
            +this.numbers[index - 1] - +this.numbers[index + 1];
          this.numbers.splice(index - 1, 3, this.numbers[index]);
          index--;
          break;
        default:
          break;
      }
    }
    console.log(this.numbers);

    this.elHistoryDiv.textContent = this.elResultDiv.textContent;
    this.elResultDiv.textContent = this.numbers[0];
    this.elEqualDiv.textContent = "=";
    this.numbers = [];
  }

  module() {
    let numbersArr = this.elResultDiv.textContent.split(" ");
    numbersArr = numbersArr.filter((item) => {
      return item != "";
    });
    if (
      +numbersArr[numbersArr.length - 1] ||
      numbersArr[numbersArr.length - 1] === `0`
    ) {
      if (+numbersArr[numbersArr.length - (1)[0]]) {
        numbersArr[numbersArr.length - 1] =
          "-" + numbersArr[numbersArr.length - 1];
        this.drawEquation(numbersArr);
      } else {
        numbersArr[numbersArr.length - 1].slice(0, 1);
      }
    }
  }
  drawEquation(numbersArr) {
    console.log(numbersArr);
    this.elResultDiv = "";
    numbersArr.forEach((item) => {
      console.log(this.elEqualDiv);
      if (isNaN(item)) {
        this.elEqualDiv.textContent += " " + item + " ";
      } else {
        this.elEqualDiv.textContent += item;
      }
    });
  }

  deleteCash() {
    this.firstOperand = "";
    this.secondOperand = "";
    this.operator = "";
    this.elResultDiv.textContent = "0";
    this.elHistoryDiv.textContent = "";
    this.elEqualDiv.textContent = "";
  }
}

const calculator = new Calculator();
