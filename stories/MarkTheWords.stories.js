import { html } from 'lit';
import '../mark-the-words.js';

export default {
  title: 'Project 3',
  component: 'mark-the-words',
  argTypes: {
    promptContent: {control: 'text'},
    bodyContent: {control: 'text'},
    answerContent: {control: 'text'}
  }
};

function MarkTheWordsTemplate({bodyContent, promptContent, answerContent}) {
  return html` 
  <mark-the-words answers="${answerContent}" promptContent="${promptContent}">
  ${bodyContent}
  </mark-the-words>`
};
export const MarkTheWords = Template.bind({});

export const MarkTheWordsFill = MarkTheWordsTemplate.bind({});
MarkTheWordsFill.args = {
  answerContent: 'this,is,a',
  promptContent: 'Select the words "this", "is" and "a"',
  bodyContent: 'This is a test sentence. Please select the correct words'
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