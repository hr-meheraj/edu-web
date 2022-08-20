import React from 'react'

export default function PopularTopic() {
    return (
        <section>
            <div class="container">
                { /*Titles */ }
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="text-center mb-4">Popular Articles</h2>
                    </div>
                </div>

                <div class="row g-4">

                    <div class="col-xl-6">
                        { /*Card item START */ }
                        <div class="card card-body border p-4 h-100">
                            { /*Title */ }
                            <h4 class="card-title mb-4"><a href="#" class="stretched-link">The installation part</a></h4>

                            { /*Avatar group and content */ }
                            <div class="d-sm-flex align-items-center">
                                { /*Avatar group */ }
                                <ul class="avatar-group mb-2 mb-sm-0">
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/01.jpg" alt="avatar"/>
                                    </li>
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/02.jpg" alt="avatar"/>
                                    </li>
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/03.jpg" alt="avatar"/>
                                    </li>
                                </ul>
                                { /*Content */ }
                                <div class="ms-sm-2">
                                    <h6 class="mb-1">10 articles in this collection</h6>
                                    <p class="mb-0">Written by <b>Carolyn Ortiz</b> ,<b>Billy Vasquez</b> and <b>Larry Lawson</b></p>
                                </div>
                            </div>
                        </div>
                        { /*Card item END */ }
                    </div>

                    <div class="col-xl-6">
                        { /*Card item START */ }
                        <div class="card card-body border p-4 h-100">
                            { /*Title */ }
                            <h4 class="card-title mb-4"><a href="#" class="stretched-link">Supporting Customer With Inbox</a></h4>

                            { /*Avatar group and content */ }
                            <div class="d-sm-flex align-items-center">
                                { /*Avatar group */ }
                                <ul class="avatar-group mb-2 mb-sm-0">
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/08.jpg" alt="avatar"/>
                                    </li>
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/04.jpg" alt="avatar/"/>
                                    </li>
                                </ul>
                                { /*Content */ }
                                <div class="ms-sm-2">
                                    <h6 class="mb-1">5 articles in this collection</h6>
                                    <p class="mb-0">Written by <b>Dennis Barrett</b> and <b>Louis Ferguson</b></p>
                                </div>
                            </div>
                        </div>
                        { /*Card item END */ }
                    </div>

                    <div class="col-xl-6">
                        { /*Card item START */ }
                        <div class="card card-body border p-4 h-100">
                            { /*Title */ }
                            <h4 class="card-title mb-4"><a href="#" class="stretched-link">Sending Effective Emails </a></h4>

                            { /*Avatar group and content */ }
                            <div class="d-sm-flex align-items-center">
                                { /*Avatar group */ }
                                <ul class="avatar-group mb-2 mb-sm-0">
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/05.jpg" alt="avatar"/>
                                    </li>
                                </ul>
                                { /*Content */ }
                                <div class="ms-sm-2">
                                    <h6 class="mb-1">4 articles in this collection</h6>
                                    <p class="mb-0">Written by <b>Jacqueline Miller</b></p>
                                </div>
                            </div>
                        </div>
                        { /*Card item END */ }
                    </div>

                    <div class="col-xl-6">
                        { /*Card item START */ }
                        <div class="card card-body border p-4 h-100">
                            { /*Title */ }
                            <h4 class="card-title mb-4"><a href="#" class="stretched-link">Connect With Customers</a></h4>

                            { /*Avatar group and content */ }
                            <div class="d-sm-flex align-items-center">
                                { /*Avatar group */ }
                                <ul class="avatar-group mb-2 mb-sm-0">
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/09.jpg" alt="avatar"/>
                                    </li>
                                    <li class="avatar avatar-md">
                                        <img class="avatar-img rounded-circle border-white" src="https://eduport.webestica.com/assets/images/avatar/10.jpg" alt="avatar"/>
                                    </li>
                                </ul>
                                { /*Content */ }
                                <div class="ms-sm-2">
                                    <h6 class="mb-1">11 articles in this collection</h6>
                                    <p class="mb-0">Written by <b>Lori Stevens</b> and <b>Samuel Bishop</b></p>
                                </div>
                            </div>
                        </div>
                        { /*Card item END */ }
                    </div>

                </div> { /*Row END */ }
            </div>
        </section>
    )
}
