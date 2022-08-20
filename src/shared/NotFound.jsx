import React from 'react'
import Footer from './Footer'

function NotFound() {
    return (
        <main>

        <section class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        { /* Image */ }
                        <img src="https://eduport.webestica.com/assets/images/element/error404-01.svg" class="h-200px h-md-400px mb-4" alt=""/>
                            { /* Title */ }
                            <h1 class="display-1 text-danger mb-0">404</h1>
                            { /* Subtitle */ }
                            <h2>Oh no, something went wrong!</h2>
                            { /* info */ }
                            <p class="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
                            { /* Button */ }
                            <a href="index.html" class="btn btn-primary mb-0">Take me to Homepage</a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </main>
    )
}

export default NotFound