import React from 'react';
import {getMergeSortAnimations} from '../SortAlgo/SortAlgo.js'
import './Sorting.css';

//value for speed of animation
const  ANIMATION_SPEED_MS = 1;
// change value of number bars
const NUMBER_OF_ARRAY_BARS = 310;
// color of arraybars 1st
const PRIMARY_COLOR = 'green';
//array bars compared in animation
const SECONDARY_COLOR ='pink';



export default class Sorting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }
    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
}

    quickSort() {}

    heapSort() {}
    
    bubbleSort() {}

    
    
    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                  }}></div>
                  
          )) }
          <button onClick={() => this.resetArray()}>Generate New Array </button>
          <button onClick={() => this.mergeSort()}>Merge Sort </button>
          <button onClick={() => this.quickSort()}>Quick Sort </button>
          <button onClick={() => this.heapSort()}>Heap Sort </button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort </button>
          <button onClick={() => this.testSortingAlgorithms()}> 
          </button>
          </div>
          
        );
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

