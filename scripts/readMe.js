import { renderToDom } from "./renderToDom.js";

const readMeToDom = () => {
  //initialize variable domString
  let domString ='';
  domString = 
  `<p>biglawtheman5/README.md</p>
    <md-block src="./scripts/biglawtheman/README.md">
    </md-block>
  `
  renderToDom('#readMe',domString);
}

export {readMeToDom}
