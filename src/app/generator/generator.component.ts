import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  foods: String[] = ["Reisfleisch", "Brinzove Haluski", "Gulasch", "Würstel Gulasch", "Hühnerfleisch mit Gemüse und Reis", "Lasagne", "Spaghetti Bolognese", "Spaghetti Carbonara", "Fleischleibchen mit Kartoffelpüre und Salat", "Schitzel", "Cordon Bleu", "Fleisch eingepackt in Teig", "Hackfleisch mit Ei drinnen", "Spinatstrudel", "Pannnudeln", "Gröstl", "Speckknödel mkt Suppe", "Gemüsesuppe", "Fleischsuppe", "Champignons mit Hühnerfleisch und Reis", "Eierschwammerl Sauce mit Knödel", "Zuchinilaibchen", "Palatschinken", "Chili con Carne", "Putengeschnätzeltes mit Reis", "Rahmgeschnätzeltes mit Nudeln", "Lachsnudeln", "Spaghetti aglio e olio", "Französische Kartoffeln", "Risitto", "Chinesische Nudeln mit Fleisch", "Cevapcici mit Pommes", "Spare-Ribs mit Kartoffeln", "Lachs mit Reis", "Hühnergeschätzeltes", "Mohnnudeln", "Kaiserschmarrn", "Putengeschnätzeltes mit Kokos-Curry-Sauce", "Kasnocken", "Pizza", "Linsensuppe", "Bohnensuppe (Fazulova)", "Schoska", "Brathühnchen", "Frietierter Fisch", "Tortellini mit Käse-Sauce", "Gnocchi mit Gorgonzola", "Nudeln mit Champignonsoße", "Quinoa mit Fleisch", "Gebackene Champignons", "Fritierter Blumenkohl", "Schlutzkrapfen", "Calzone", "Schinken-Rahm-Nudeln", "Eierschwammerlgulasch", "Spaghetti Cacio e Pepe", "Überbackene Schnitzel", "Katka Nudelsalat", "Nudeln mit Gorgonzola Sauce", "Ham and Eggs", "Kalbsrahmgulasch", "Fritierter Käse", "Fleisch mit Ebli", "Gebackenes Fleisch mit Kartoffeln", "Köttbullar mit Salzkartoffeln", "Griesbrei", "Schokopudding", "Senfhähnchen mit Erbsen"];

  pickedFood: String = "";

  constructor() { }

  ngOnInit(): void {
    let randomPick = Math.floor(Math.random() * this.foods.length);
    this.pickedFood = this.foods[randomPick];
    //this.pickedFood = "" + this.foods.length;
  }

}
