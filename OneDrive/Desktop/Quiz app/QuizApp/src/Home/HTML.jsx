import React from "react";

function HTML() {
  return (
    <div>
      <h2>HTML QUESTIONS</h2>

      <ol>
        <li>
          <h4>What is HTML?</h4>
          <label>
            <input type="radio" name="q1" /> HTML describes the structure of a webpage
          </label><br />
          <label>
            <input type="radio" name="q1" /> HTML is the standard markup language used to create web pages
          </label><br />
          <label>
            <input type="radio" name="q1" /> HTML consists of elements that help the browser display content
          </label><br />
          <label>
            <input type="radio" name="q1" /> All of the mentioned
          </label>
        </li>

        <li>
          <h4>Who is the father of HTML?</h4>
          <label>
            <input type="radio" name="q2" /> Rasmus Lerdorf
          </label><br />
          <label>
            <input type="radio" name="q2" /> Tim Berners-Lee
          </label><br />
          <label>
            <input type="radio" name="q2" /> Brendan Eich
          </label><br />
          <label>
            <input type="radio" name="q2" /> Sergey Brin
          </label>
        </li>

        <li>
          <h4>HTML stands for __________</h4>
          <label>
            <input type="radio" name="q3" /> HyperText Markup Language
          </label><br />
          <label>
            <input type="radio" name="q3" /> HyperText Machine Language
          </label><br />
          <label>
            <input type="radio" name="q3" /> HyperText Marking Language
          </label><br />
          <label>
            <input type="radio" name="q3" /> HighText Marking Language
          </label>
        </li>

        <li>
          <h4>What is the correct doctype syntax in HTML5?</h4>
          <label>
            <input type="radio" name="q4" /> &lt;!DOCTYPE html&gt;
          </label>
        </li>

        <li>
          <h4>Which is used to read and render HTML?</h4>
          <label>
            <input type="radio" name="q5" /> Web browser
          </label>
        </li>
      </ol>
    </div>
  );
}

export default HTML;
