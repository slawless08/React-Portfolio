import React from 'react';

export default function Contact() {
  return (
    <section class = "contact" id = "contact">

    <h1 class = "section__title section__title--contact">Use the form below to contact me. You can also click the links below.</h1>
    
    <form class="form">
        <div class="form-group">
            <label>Name: </label>
            <input type="text" name="name"/>
        </div>
        <div class="form-group">
            <label>Email: </label>
            <input type="text" name="email"/>
        </div>
        <div class="form-group">
            <label>Message: </label>
            <textarea name="message"></textarea>
        </div>
        <input class="button" type="submit" value="Submit" name=""/>
    </form>

    </section>
  );
}
