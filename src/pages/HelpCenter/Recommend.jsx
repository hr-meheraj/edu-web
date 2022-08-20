import React from 'react'

function Recommend() {
    return (
        <section>
            <div class="container">
                { /*  Titles */ }
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="text-center mb-4">Recommended Topics</h2>
                    </div>
                </div>

                { /*  Row START */ }
                <div class="row g-4">
                    <div class="col-md-6 col-xl-3">
                        { /*  Card START */ }
                        <div class="card bg-light h-100">
                            { /*  Title */ }
                            <div class="card-header bg-light pb-0 border-0">
                                <i class="bi bi-emoji-smile fs-1 text-success"></i>
                                <h5 class="card-title mb-0 mt-2">Get started </h5>
                            </div>
                            { /*  List */ }
                            <div class="card-body">
                                <ul class="nav flex-column">
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Gulp and Customization</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Color Scheme and Logo Settings</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Dark mode, RTL Version and Lazy Load</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Sources, Credits and Changelog</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Updates and Support</a></li>
                                </ul>
                            </div>
                        </div>
                        { /*  Card END */ }
                    </div>

                    <div class="col-md-6 col-xl-3">
                        { /*  Card START */ }
                        <div class="card bg-light h-100">
                            { /*  Title */ }
                            <div class="card-header bg-light pb-0 border-0">
                                <i class="bi bi-layers fs-1 text-warning"></i>
                                <h5 class="card-title mb-0 mt-2">Account Setup</h5>
                            </div>
                            { /*  List */ }
                            <div class="card-body">
                                <ul class="nav flex-column">
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Connecting to your Account</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Edit your profile information</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Connecting to other Social Media Accounts</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Adding your profile picture</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Describing your store</a></li>
                                </ul>
                            </div>
                        </div>
                        { /*  Card END */ }
                    </div>

                    <div class="col-md-6 col-xl-3">
                        { /*  Card START */ }
                        <div class="card bg-light h-100">
                            { /*  Title */ }
                            <div class="card-header bg-light pb-0 border-0">
                                <i class="bi bi-info-circle fs-1 text-orange"></i>
                                <h5 class="card-title mb-0 mt-2">Other Topics </h5>
                            </div>
                            { /*  List */ }
                            <div class="card-body">
                                <ul class="nav flex-column">
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Security &amp; Privacy</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Author, Publisher &amp; Admin Guides</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Pricing plans</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Sales Tax &amp; Regulatory Fees</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 me-2"></i>Promotions &amp; Deals</a></li>
                                </ul>
                            </div>
                        </div>
                        { /*  Card END */ }
                    </div>

                    <div class="col-md-6 col-xl-3">
                        { /*  Card START */ }
                        <div class="card bg-light h-100">
                            { /*  Title START */ }
                            <div class="card-header bg-light pb-0 border-0">
                                <i class="bi bi-house fs-1 text-purple"></i>
                                <h5 class="card-title mb-0 mt-2">Advanced Usage </h5>
                            </div>
                            { /*  List */ }
                            <div class="card-body">
                                <ul class="nav flex-column">
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Admin &amp; Billing</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Become a Pro</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Mobile application</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Guide</a></li>
                                    <li class="nav-item"><a class="nav-link d-flex" href="help-center-detail.html"><i class="fas fa-angle-right text-primary pt-1 fa-fw me-2"></i>Promotions &amp; Deals</a></li>
                                </ul>
                            </div>
                        </div>
                        { /*  Card END */ }
                    </div>
                </div>
                { /*  Row END */ }
            </div>
        </section>
    )
}

export default Recommend