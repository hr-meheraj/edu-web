import React from 'react'

function ContactForm() {
    return (
        <section>
            <div class="container">
                <div class="row g-4 g-lg-0 align-items-center">

                    <div class="col-md-6 align-items-center text-center">
                        { /*  Image */ }
                        <img src="https://eduport.webestica.com/assets/images/element/contact.svg" class="h-400px" alt=""/>

                            { /*  Social media button */ }
                            <div class="d-sm-flex align-items-center justify-content-center mt-2 mt-sm-4">
                                <h5 class="mb-0">Follow us on:</h5>
                                <ul class="list-inline mb-0 ms-sm-2">
                                    <li class="list-inline-item"> <a class="fs-5 me-1 text-facebook" href="#"><i class="fab fa-fw fa-facebook-square"></i></a> </li>
                                    <li class="list-inline-item"> <a class="fs-5 me-1 text-instagram" href="#"><i class="fab fa-fw fa-instagram"></i></a> </li>
                                    <li class="list-inline-item"> <a class="fs-5 me-1 text-twitter" href="#"><i class="fab fa-fw fa-twitter"></i></a> </li>
                                    <li class="list-inline-item"> <a class="fs-5 me-1 text-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> </li>
                                    <li class="list-inline-item"> <a class="fs-5 me-1 text-dribbble" href="#"><i class="fas fa-fw fa-basketball-ball"></i></a> </li>
                                    <li class="list-inline-item"> <a class="fs-5 me-1 text-pinterest" href="#"><i class="fab fa-fw fa-pinterest"></i></a> </li>
                                </ul>
                            </div>
                    </div>

                    { /*  Contact form START */ }
                    <div class="col-md-6">
                        { /*  Title */ }
                        <h2 class="mt-4 mt-md-0">Let's talk</h2>
                        <p>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly</p>

                        <form>
                            { /*  Name */ }
                            <div class="mb-4 bg-light-input">
                                <label for="yourName" class="form-label">Your name *</label>
                                <input type="text" class="form-control form-control-lg" id="yourName" spellcheck="false" data-ms-editor="true"/>
                            </div>
                            { /*  Email */ }
                            <div class="mb-4 bg-light-input">
                                <label for="emailInput" class="form-label">Email address *</label>
                                <input type="email" class="form-control form-control-lg" id="emailInput"/>
                            </div>
                            { /*  Message */ }
                            <div class="mb-4 bg-light-input">
                                <label for="textareaBox" class="form-label">Message *</label>
                                <textarea class="form-control" id="textareaBox" rows="4" spellcheck="false" data-ms-editor="true"></textarea>
                            </div>
                            { /*  Button */ }
                            <div class="d-grid">
                                <button class="btn btn-lg btn-primary mb-0" type="button">Send Message</button>
                            </div>
                        </form>
                    </div>
                    { /*  Contact form END */ }
                </div>
            </div>
        </section>
    )
}

export default ContactForm