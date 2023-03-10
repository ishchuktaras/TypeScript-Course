
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return  `Name: ${this.name}`;
  }
};

const colaDrink = {
  color: 'black',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} gramms of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  // console.log (`Name: ${vehicle.name}`);
  // console.log (`Year: ${vehicle.year}`);
  // console.log (`Broken: ${vehicle.broken}`);

  console.log (item.summary());
};

printSummary (oldCivic);
printSummary (colaDrink);