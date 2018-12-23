// imports from vendors
import React from 'react';

// imports from styles
import './Card.css';
import pigeon from '../../images/pigeon.jpg';
import shrimp from '../../images/shrimp.jpg';
import chimp from '../../images/chimp.jpg';
import chevro from '../../images/chevro.jpg';
import peacock from '../../images/peacock.jpg';
import capuchin from '../../images/capuchin.jpg';
import dragonfly from '../../images/dragonfly.jpg';
import elephant from '../../images/elephant.jpg';
import crocodile from '../../images/crocodile.jpg';
import otter from '../../images/otter.jpg';

export default class Card extends React.PureComponent {

    state = {
        animals:[
          {
            index: '1',
            name: 'Pigeons',
            fact: 'TRAINED PIGEONS CAN TELL THE DIFFERENCE BETWEEN THE PAINTINGS OF PABLO PICASSO AND CLAUDE MONET.',
            image: pigeon,
          },
          {
            index: '2',
            name: 'Shrimps',
            fact: 'THE PEACOCK MANTIS SHRIMP CAN THROW A PUNCH AT 50 MPH, ACCELERATING QUICKER THAN A .22-CALIBER BULLET.',
            image: shrimp,
          },
          {
            index: '3',
            name: 'Chimps',
            fact: 'STUDIES HAVE SHOWN THAT WILD CHIMPS IN GUINEA DRINK FERMENTED PALM SAP, WHICH CONTAINS ABOUT 3 PERCENT ALCOHOL BY VOLUME.',
            image: chimp,
          },
          {
            index: '4',
            name: 'Chevrotain',
            fact: 'THE CHEVROTAIN IS AN ANIMAL THAT LOOKS LIKE A TINY DEER WITH FANGS.',
            image: chevro,
          },
          {
            index: '5',
            name: 'Peacocks',
            fact: 'ONLY THE MALES ARE CALLED PEACOCKS. FEMALES ARE CALLED PEAHENS.',
            image: peacock,
          },
          {
            index: '6',
            name: 'Monkeys',
            fact: 'CAPUCHIN MONKEYS PEE ON THEIR HANDS TO WASH THEIR FEET.',
            image: capuchin,
          },
          {
            index: '7',
            name: 'Dragonflies',
            fact: 'DRAGONFLIES AND DAMSELFLIES FORM A HEART WITH THEIR TAILS WHEN THEY MATE.',
            image: dragonfly,
          },
          {
            index: '8',
            name: 'Elephants',
            fact: 'BABY ELEPHANTS SUCK THEIR TRUNKS FOR COMFORT.',
            image: elephant,
          },
          {
            index: '9',
            name: 'Crocodiles',
            fact: 'THERE WAS ONCE A TYPE OF CROCODILE THAT COULD GALLOP.',
            image: crocodile,
          },
          {
            index: '10',
            name: 'Otters',
            fact: "SEA OTTERS HOLD HANDS WHILE THEY'RE SLEEPING SO THEY DON'T DRIFT APART.",
            image: otter,
          }
        ]
      }

  render() {
    let animalitems = this.state.animals.map((item, index) => <p key={index}> <img src={item.image}></img> <br /> <br/>{item.name} <hr></hr><br/> {item.fact} <br/><br /> </p>)


  return (
    <div className={Card}> {animalitems}
    </div>
    );
  }

}
