import { Component, State } from '../../../../dist/index';


const textA = 'A';
const spanA = <span>A</span>;
const divA = <div>A</div>;

const textB = 'B';
const spanB = <span>B</span>;
const divB = <div>B</div>;


@Component({
  tag: 'slot-ion-content'
})
export class SlotIonContent {

  @State() inc = 1;

  testClick() {
    this.inc++;
  }

  render() {
    return (
      <div>
        <button onClick={this.testClick.bind(this)} class='test'>
          Test
        </button>

        <div>
          Rendered: {this.inc}
        </div>

        <div class='results1'>
          <ion-content>{textA}{textB}</ion-content>
        </div>

        <div class='results2'>
          <ion-content>{textA}{spanB}</ion-content>
        </div>

        <div class='results3'>
          <ion-content>{textA}{divB}</ion-content>
        </div>

        <div class='results4'>
          <ion-content><div>{textA}{divB}</div></ion-content>
        </div>

        <div class='results5'>
          <ion-content>{spanA}{textB}</ion-content>
        </div>

        <div class='results6'>
          <ion-content>{spanA}{spanB}</ion-content>
        </div>

        <div class='results7'>
          <ion-content>{spanA}{divB}</ion-content>
        </div>

        <div class='results8'>
          <ion-content>{divA}{textB}</ion-content>
        </div>

        <div class='results9'>
          <ion-content>{divA}{spanB}</ion-content>
        </div>

        <div class='results10'>
          <ion-content>{divA}{divB}</ion-content>
        </div>

      </div>
    );
  }

}
