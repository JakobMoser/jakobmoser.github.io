import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  // https://arraythis.com/
  foods: String[] = ["Reisfleisch", "Brinzove Haluski", "Gulasch", "Würstel Gulasch", "Hühnerfleisch mit Gemüse und Reis", "Lasagne", "Spaghetti Bolognese", "Spaghetti Carbonara", "Fleischleibchen mit Kartoffelpüree und Salat", "Schnitzel", "Cordon bleu", "Fleisch eingepackt in Teig", "Hackfleisch mit Ei drinnen", "Spinatstrudel", "Pannnudeln", "Gröstl", "Speckknödel mit Suppe", "Gemüsesuppe", "Fleischsuppe", "Champignons mit Hühnerfleisch und Reis", "Eierschwammerl Soße mit Knödel", "Zucchinilaibchen", "Palatschinken", "Chili con Carne", "Putengeschnetzeltes mit Reis", "Rahmgeschnetzeltes mit Nudeln", "Lachsnudeln", "Spaghetti aglio e olio", "Französische Kartoffeln", "Risotto", "Chinesische Nudeln mit Fleisch", "Cevapcici mit Pommes", "Spareribs mit Kartoffeln", "Lachs mit Reis", "Hühnergeschetzeltes", "Mohnnudeln", "Kaiserschmarrn", "Putengeschnetzeltes mit Kokos-Curry-Sauce", "Kasnocken", "Pizza", "Linsensuppe", "Bohnensuppe (Fazulova)", "Schoska", "Brathühnchen", "Frittierter Fisch", "Tortellini mit Käse-Sauce", "Gnocchi mit Gorgonzola", "Nudeln mit Champignonsoße", "Quinoa mit Fleisch", "Gebackene Champignons", "Frittieren Blumenkohl", "Schlutzkrapfen", "Calzone", "Schinken-Rahm-Nudeln", "Eierschwammerlgulasch", "Spaghetti Cacio e Pepe", "Überbackene Schnitzel", "Katka Nudelsalat", "Nudeln mit Gorgonzola Sauce", "Ham and Eggs", "Kalbsrahmgulasch", "Frittierter Käse", "Fleisch mit Ebli", "Gebackenes Fleisch mit Kartoffeln", "Köttbullar mit Salzkartoffeln", "Grießbrei", "Schokopudding", "Senfhähnchen mit Erbsen"];
  currentDay: number = -1;
  pickedFood: String = "";

  constructor() { }

  ngOnInit(): void {
    this.currentDay = this.daysIntoYear(new Date())
    let randomPick = Math.floor(Math.random() * this.foods.length);
    this.pickedFood = this.foods[randomPick] + " (" + this.currentDay + ")" ;
    
  }

  daysIntoYear(date: Date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
  }

  randomFood() {
    let randomPick = Math.floor(Math.random() * this.foods.length);
    return this.foods[randomPick];
  }

}


