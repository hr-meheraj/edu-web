import React from 'react'

function Header() {
    return (
        <section class="bg-blue py-7">
            <div class="container">
                <div class="row justify-content-lg-between">

                    <div class="col-lg-8">
                        {/* <!-- Title --> */}
                        <h1 class="text-white">The Complete Digital Marketing Course - 12 Courses in 1</h1>
                        <p class="text-white">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>

                        {/* <!-- Content --> */}
                        <ul class="list-inline mb-5">
                            <li class="list-inline-item h6 me-4 mb-1 mb-sm-0 text-white"><span class="fw-light">By</span> Lori Stevens</li>
                            <li class="list-inline-item me-4 mb-1 mb-sm-0">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                                    <li class="list-inline-item ms-2 h6 text-white">4.5/5.0</li>
                                    <li class="list-inline-item text-white">(1,586 reviews)</li>
                                </ul>
                            </li>
                            <li class="list-inline-item h6 mb-0 text-white"><i class="fas fa-globe text-info me-2"></i>English</li>
                        </ul>
                    </div>

                    <div class="col-lg-3">
                        <h6 class="text-white lead fw-light mb-3"><i class="fas fa-user-graduate text-orange me-2"></i>12,155 already enrolled</h6>
                        {/* <!-- Button --> */}
                        <a href="#" class="btn btn-warning mb-3 w-100">Enroll Course</a>

                        {/* <!-- Progress item --> */}
                        <div class="overflow-hidden mb-4">
                            <h6 class="text-white">Your Progress</h6>
                            <div class="progress progress-sm bg-white bg-opacity-10 mb-1">
                                <div class="progress-bar bg-white aos aos-init aos-animate" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <small class="text-white">08 of 135 Completed</small>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header