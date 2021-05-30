import React from "react";
import Quote from './Quote';

function createQuote(quote, author){
    return {
        "quote": quote,
        "author": author
    };
}

const QUOTES = [
    createQuote("First, solve the problem. Then, write the code.", "John Johnson"),
    createQuote("Knowledge is power.", "Francis Bacon"),
    createQuote("Code is like humor. When you have to explain it, it’s bad.", "Cory House"),
    createQuote("Fix the cause, not the symptom.", "Steve Maguire"),
    createQuote("Simplicity is the soul of efficiency.", "Austin Freeman"),
    createQuote("Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "Martin Fowler"),
]

function Quotes() {
  return (
    <>
        <br /><br /><br />
        <h2 style={{ textAlign:"left", fontSize: "1.5em", paddingBottom: "20px" }}>
            Favorite <strong className="purple">Quotes</strong>
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {QUOTES.map((quote, quoteIndex) => {
            return (
                <Quote 
                Quote={quote.quote}
                Author={quote.author} />  
            );
        })}
        </div>
    </>
  );
}

export default Quotes;