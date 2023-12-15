import { Component } from '@angular/core';

@Component({
  selector: 'app-home-restarants',
  templateUrl: './home-restarants.component.html',
  styleUrl: './home-restarants.component.scss'
})

export class HomeRestarantsComponent {

  public restaraunts = [
    {
      img1: 'assets/royal.png',
      name: 'Royal Sushi House',
      bag: 'assets/shopping-bag.svg',

      img2: 'assets/clock.svg',
      time: '30-40 min',
      price:'$32 min sum',

      tags: [
        {
          img3: 'assets/sushi.svg',
          title: 'Sushi',
        }
      ]
    },

    {
      img1: 'assets/burgers-shop.png',
      name: 'Burgers & Pizza',
      bag: 'assets/shopping bag.svg',
      cart: '',
      number: 2,

      img2: 'assets/clock.svg',
      time: '40-60 min',
      price:'$24 min sum',

      tags: [
        {
          img3: 'assets/burger.svg',
          title: 'Burger',
        },
        {
          img3: 'assets/pizza.svg',
          title: 'Pizza',
        },
        
      ]
    },
    {
      img1: 'assets/ninja-shop.png',
      name: 'Ninja sushi',
      bag: 'assets/shopping-bag.svg',

      img2: 'assets/clock.svg',
      time: '20-40 min',
      price:'$40 min sum',

      tags: [
        {
          img3: 'assets/sushi.svg',
          title: 'Sushi',
        }
      ]
    },
    {
      img1: 'assets/master-shop.png',
      name: 'Sushi master',
      bag: 'assets/shopping-bag.svg',

      img2: 'assets/clock.svg',
      time: '60-70 min',
      price:'$49 min sum',

      tags: [
        {
          img3: 'assets/sushi.svg',
          title: 'Sushi',
        }
      ]
    },
    {
      img1: 'assets/japan-shop.png',
      name: 'Japanese sushi',
      bag: 'assets/shopping-bag.svg',

      img2: 'assets/clock.svg',
      time: '30-50 min',
      price:'$104 min sum',

      tags: [
        {
          img3: 'assets/sushi.svg',
          title: 'Sushi',
        }
      ]
    },
    {
      img1: 'assets/kobe.png',
      name: 'Kobe',
      bag: 'assets/shopping-bag.svg',

      img2: 'assets/clock.svg',
      time: '20-30 min',
      price:'$57 min sum',

      tags: [
        {
          img3: 'assets/sushi.svg',
          title: 'Sushi',
        }
      ]
    },
  ]

}
