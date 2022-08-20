import React from 'react'

function Service() {
    return (
        <section>
            <div class="container">
                <div class="row g-4">

                    {  /*Action box item */ }
                    <div class="col-lg-4">
                        <div class="bg-info bg-opacity-10 rounded-3 p-5">
                            {  /*Icon */ }
                            <h2 class="display-5 text-info"><i class="bi bi-headset"></i></h2>
                            {  /*Title */ }
                            <h3>Contact Support?</h3>
                            <p>Delay death ask to style Me mean able conviction For every delay death ask to style</p>
                            {  /*Button */ }
                            <a href="#" class="btn btn-dark mb-0">Contact Us</a>
                        </div>
                    </div>

                    {  /*Action box item */ }
                    <div class="col-lg-4">
                        <div class="bg-purple bg-opacity-10 rounded-3 p-5">
                            {  /*Icon */ }
                            <h2 class="display-5 text-purple"><i class="fas fa-ticket-alt"></i></h2>
                            {  /*Title */ }
                            <h3>Submit a Ticket</h3>
                            <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
                            {  /*Button */ }
                            <a href="#" class="btn btn-dark mb-0">Submit Ticket</a>
                        </div>
                    </div>

                    {  /*Action box item */ }
                    <div class="col-lg-4">
                        <div class="bg-warning bg-opacity-15 rounded-3 p-5">
                            {  /*Icon */ }
                            <h2 class="display-5 text-warning"><i class="bi bi-envelope-fill"></i></h2>
                            {  /*Title */ }
                            <h3>Request a feature</h3>
                            <p>Prosperous impression had conviction For every delay death ask to style Me mean able</p>
                            {  /*Button */ }
                            <a href="#" class="btn btn-dark mb-0">Request</a>
                        </div>
                    </div>

                </div> {  /*Row END */ }
            </div>
        </section>
    )
}

export default Service