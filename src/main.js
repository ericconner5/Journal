import './styles.css';
import './sass/input.scss';
import {journalWordSplit}  from './journal.js';
import {journalWordCount}  from './journal.js';
import {journalVowelCount}  from './journal.js';
import {journalConsonantCount}  from './journal.js';
import {journalTeaserMaker}  from './journal.js';
// import {lastItemCleaner} from './journal.js';
import $ from 'jquery';
//interface logic
$(document).ready(function(){
  $('#theForm').submit(function(event){
    event.preventDefault();
    var entry = $('#body').val();
    var words = journalWordSplit(entry);

    var wordCount = journalWordCount(words);
    var vowelCount = journalVowelCount(entry);
    var consonantCount = journalConsonantCount(entry);
    var teaser = journalTeaserMaker(words);

    $('#result').empty();

    $('#result').append("<li>Word Count: " + wordCount + "</li>");
    $('#result').append("<li>Vowel Count: " + vowelCount + "</li>");
    $('#result').append("<li>Consonant Count: " + consonantCount + "</li>");
    $('#result').append("<li>Teaser: " + teaser + "</li>");
  });
});
