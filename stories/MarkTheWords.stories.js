import { html } from 'lit';
import '../mark-the-words.js';

export default {
  title: 'Project 3',
  component: 'mark-the-words',
  argTypes: {
    innerText: "",
    promptContext: "",
    }
  };

function MarkTheWordsTemplate({innerText, promptContent, }) {
  return html` 
  <mark-the-words innerText="${innerText}" promptContent="${promptContent}>
  </mark-the-words> `
};

export const MarkTheWords = MarkTheWordsTemplate.bind({});
MarkTheWords.args = {
  innerText: '',
  promptContext: '',
};

//i was trying to base off the argument stuff on the constructor bc i think thats what i did last time for the learning card
/**
 *     super();
    this.answers = "";
    this.correctAnswers = [];
    //parse text
    this.wordList = this.innerText.split(/\s+/g);
    this.innerText = "";
    this.promptContent = "";
    this.isEnabled = true;
    this.buttonText = "Check";
    this.numberCorrect = 0;
    this.numberGuessed = 0;
 */