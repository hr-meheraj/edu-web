import React from 'react'

function AdminDashboard() {
    return (
        <main>

            { /*  Sidebar START */}
            <nav class="navbar sidebar navbar-expand-xl navbar-dark bg-dark">

                { /*  Navbar brand for xl START */}
                <div class="d-flex align-items-center">
                    <a class="navbar-brand" href="index.html">
                        <img class="navbar-brand-item" src="https://eduport.webestica.com/assets/images/logo-light.svg" alt="" />
                    </a>
                </div>
                { /*  Navbar brand for xl END */}

                <div class="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabindex="-1" id="offcanvasSidebar">
                    <div class="offcanvas-body sidebar-content d-flex flex-column bg-dark">

                        { /*  Sidebar menu START */}
                        <ul class="navbar-nav flex-column" id="navbar-sidebar">

                            { /*  Menu item 1 */}
                            <li class="nav-item"><a href="admin-dashboard.html" class="nav-link active"><i class="bi bi-house fa-fw me-2"></i>Dashboard</a></li>

                            { /*  Title */}
                            <li class="nav-item ms-2 my-2">Pages</li>

                            { /*  menu item 2 */}
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#collapsepage" role="button" aria-expanded="false" aria-controls="collapsepage">
                                    <i class="bi bi-basket fa-fw me-2"></i>Courses
                                </a>
                                { /*  Submenu */}
                                <ul class="nav collapse flex-column" id="collapsepage" data-bs-parent="#navbar-sidebar">
                                    <li class="nav-item"> <a class="nav-link" href="admin-course-list.html">All Courses</a></li>
                                    <li class="nav-item"> <a class="nav-link" href="admin-course-category.html">Course Category</a></li>
                                    <li class="nav-item"> <a class="nav-link" href="admin-course-detail.html">Course Detail</a></li>
                                </ul>
                            </li>

                            { /*  Menu item 3 */}
                            <li class="nav-item"> <a class="nav-link" href="admin-student-list.html"><i class="fas fa-user-graduate fa-fw me-2"></i>Students</a></li>

                            { /*  Menu item 4 */}
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#collapseinstructors" role="button" aria-expanded="false" aria-controls="collapseinstructors">
                                    <i class="fas fa-user-tie fa-fw me-2"></i>Instructors
                                </a>
                                { /*  Submenu */}
                                <ul class="nav collapse flex-column" id="collapseinstructors" data-bs-parent="#navbar-sidebar">
                                    <li class="nav-item"> <a class="nav-link" href="admin-instructor-list.html">Instructors</a></li>
                                    <li class="nav-item"> <a class="nav-link" href="admin-instructor-detail.html">Instructor Detail</a></li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="admin-instructor-request.html">Instructor requests
                                            <span class="badge text-bg-success rounded-circle ms-2">2</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            { /*  Menu item 5 */}
                            <li class="nav-item"> <a class="nav-link" href="admin-review.html"><i class="far fa-comment-dots fa-fw me-2"></i>Reviews</a></li>

                            { /*  Menu item 6 */}
                            <li class="nav-item"> <a class="nav-link" href="admin-earning.html"><i class="far fa-chart-bar fa-fw me-2"></i>Earnings</a></li>

                            { /*  Menu item 7 */}
                            <li class="nav-item"> <a class="nav-link" href="admin-setting.html"><i class="fas fa-user-cog fa-fw me-2"></i>Admin Settings</a></li>

                            { /*  Menu item 8 */}
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                                    <i class="bi bi-lock fa-fw me-2"></i>Authentication
                                </a>
                                { /*  Submenu */}
                                <ul class="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                                    <li class="nav-item"> <a class="nav-link" href="sign-up.html">Sign Up</a></li>
                                    <li class="nav-item"> <a class="nav-link" href="sign-in.html">Sign In</a></li>
                                    <li class="nav-item"> <a class="nav-link" href="forgot-password.html">Forgot Password</a></li>
                                    <li class="nav-item"> <a class="nav-link" href="admin-error-404.html">Error 404</a></li>
                                </ul>
                            </li>

                            { /*  Title */}
                            <li class="nav-item ms-2 my-2">Documentation</li>

                            { /*  Menu item 9 */}
                            <li class="nav-item"> <a class="nav-link" href="docs/index.html"><i class="far fa-clipboard fa-fw me-2"></i>Documentation</a></li>

                            { /*  Menu item 10 */}
                            <li class="nav-item"> <a class="nav-link" href="docs/changelog.html"><i class="fas fa-sitemap fa-fw me-2"></i>Changelog</a></li>
                        </ul>
                        { /*  Sidebar menu end */}

                        { /*  Sidebar footer START */}
                        <div class="px-3 mt-auto pt-3">
                            <div class="d-flex align-items-center justify-content-between text-primary-hover">
                                <a class="h5 mb-0 text-body" href="admin-setting.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Settings">
                                    <i class="bi bi-gear-fill"></i>
                                </a>
                                <a class="h5 mb-0 text-body" href="index.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Home">
                                    <i class="bi bi-globe"></i>
                                </a>
                                <a class="h5 mb-0 text-body" href="sign-in.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sign out">
                                    <i class="bi bi-power"></i>
                                </a>
                            </div>
                        </div>
                        { /*  Sidebar footer END */}

                    </div>
                </div>
            </nav>
            { /*  Sidebar END */}

            { /*  Page content START */}
            <div class="page-content">

                { /*  Top bar START */}
               
                { /*  Top bar END */}

                { /*  Page main content START */}
                <div class="page-content-wrapper border">

                    { /*  Title */}
                    <div class="row">
                        <div class="col-12 mb-3">
                            <h1 class="h3 mb-2 mb-sm-0">Dashboard</h1>
                        </div>
                    </div>

                    { /*  Counter boxes START */}
                    <div class="row g-4 mb-4">
                        { /*  Counter item */}
                        <div class="col-md-6 col-xxl-3">
                            <div class="card card-body bg-warning bg-opacity-15 p-4 h-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    { /*  Digit */}
                                    <div>
                                        <h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1958" data-purecounter-delay="200" data-purecounter-duration="0">1958</h2>
                                        <span class="mb-0 h6 fw-light">Completed Courses</span>
                                    </div>
                                    { /*  Icon */}
                                    <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fas fa-tv fa-fw"></i></div>
                                </div>
                            </div>
                        </div>

                        { /*  Counter item */}
                        <div class="col-md-6 col-xxl-3">
                            <div class="card card-body bg-purple bg-opacity-10 p-4 h-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    { /*  Digit */}
                                    <div>
                                        <h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1600" data-purecounter-delay="200" data-purecounter-duration="0">1600</h2>
                                        <span class="mb-0 h6 fw-light">Enrolled Courses</span>
                                    </div>
                                    { /*  Icon */}
                                    <div class="icon-lg rounded-circle bg-purple text-white mb-0"><i class="fas fa-user-tie fa-fw"></i></div>
                                </div>
                            </div>
                        </div>

                        { /*  Counter item */}
                        <div class="col-md-6 col-xxl-3">
                            <div class="card card-body bg-primary bg-opacity-10 p-4 h-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    { /*  Digit */}
                                    <div>
                                        <h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="1235" data-purecounter-delay="200" data-purecounter-duration="0">1235</h2>
                                        <span class="mb-0 h6 fw-light">Course In Progress</span>
                                    </div>
                                    { /*  Icon */}
                                    <div class="icon-lg rounded-circle bg-primary text-white mb-0"><i class="fas fa-user-graduate fa-fw"></i></div>
                                </div>
                            </div>
                        </div>

                        { /*  Counter item */}
                        <div class="col-md-6 col-xxl-3">
                            <div class="card card-body bg-success bg-opacity-10 p-4 h-100">
                                <div class="d-flex justify-content-between align-items-center">
                                    { /*  Digit */}
                                    <div>
                                        <div class="d-flex">
                                            <h2 class="purecounter mb-0 fw-bold" data-purecounter-start="0" data-purecounter-end="845" data-purecounter-delay="200" data-purecounter-duration="0">845</h2>
                                            <span class="mb-0 h2 ms-1">hrs</span>
                                        </div>
                                        <span class="mb-0 h6 fw-light">Total Watch Time</span>
                                    </div>
                                    { /*  Icon */}
                                    <div class="icon-lg rounded-circle bg-success text-white mb-0"><i class="bi bi-stopwatch-fill fa-fw"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    { /*  Counter boxes END */}

                    { /*  Chart and Ticket START */}
                    <div class="row g-4 mb-4">

                        { /*  Chart START */}
                        <div class="col-xxl-8">
                            <div class="card shadow h-100">

                                { /*  Card header */}
                                <div class="card-header p-4 border-bottom">
                                    <h5 class="card-header-title">Earnings</h5>
                                </div>

                                { /*  Card body */}
                                <div class="card-body" style={{ position: "relative" }}>
                                    { /*  Apex chart */}
                                    <div id="ChartPayout" style={{ minHeight: "312px" }}><div id="apexchartsn03qq77l" class="apexcharts-canvas apexchartsn03qq77l apexcharts-theme-light" width="694px" height="300px">

                                        <div class="apexcharts-legend" style={{maxHeight:"150px"}}></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title"></div><div class="apexcharts-tooltip-series-group" style={{order:"1"}}><span class="apexcharts-tooltip-marker" style={{background:"rgb(6, 106, 201)"}}></span><div class="apexcharts-tooltip-text" ><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div class="apexcharts-xaxistooltip-text" ></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div>
                                    </div>

                                    <div class="resize-triggers"><div class="expand-trigger"><div style={{width:"735px", height:"498px"}}></div></div><div class="contract-trigger"></div></div></div>
                            </div>
                        </div>
                        { /*  Chart END */}

                        { /*  Ticket START */}
                        <div class="col-xxl-4">
                            <div class="card shadow h-100">
                                { /*  Card header */}
                                <div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                                    <h5 class="card-header-title">Support Requests</h5>
                                    <a href="#" class="btn btn-link p-0 mb-0">View all</a>
                                </div>

                                { /*  Card body START */}
                                <div class="card-body p-4">

                                    { /*  Ticket item START */}
                                    <div class="d-flex justify-content-between position-relative">
                                        <div class="d-sm-flex">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/09.jpg" alt="avatar" />
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-0"><a href="#" class="stretched-link">Lori Stevens</a></h6>
                                                <p class="mb-0">New ticket #759 from Lori Stevens for General Enquiry</p>
                                                <span class="small">8 hour ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    { /*  Ticket item END */}

                                    <hr />{ /*  Divider */}

                                    { /*  Ticket item START */}
                                    <div class="d-flex justify-content-between position-relative">
                                        <div class="d-sm-flex">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <div class="avatar-img rounded-circle bg-purple bg-opacity-10">
                                                    <span class="text-purple position-absolute top-50 start-50 translate-middle fw-bold">DB</span>
                                                </div>
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>
                                                <p class="mb-0">Comment from Billy Vasquez on ticket #659</p>
                                                <span class="small">8 hour ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    { /*  Ticket item END */}

                                    <hr />{ /*  Divider */}

                                    { /*  Ticket item START */}
                                    <div class="d-flex justify-content-between position-relative">
                                        <div class="d-sm-flex">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <div class="avatar-img rounded-circle bg-orange bg-opacity-10">
                                                    <span class="text-orange position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                                </div>
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>
                                                <p class="mb-0"><b>Webestica</b> assign you a new ticket for <b>Eduport theme</b></p>
                                                <span class="small">5 hour ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    { /*  Ticket item END */}

                                    <hr />{ /*  Divider */}

                                    { /*  Ticket item START */}
                                    <div class="d-flex justify-content-between position-relative">
                                        <div class="d-sm-flex">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/04.jpg" alt="avatar" />
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-0"><a href="#" class="stretched-link">Dennis Barrett</a></h6>
                                                <p class="mb-0">Thanks for contact us with your issues.</p>
                                                <span class="small">9 hour ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    { /*  Ticket item END */}

                                </div>
                                { /*  Card body END */}
                            </div>
                        </div>
                        { /*  Ticket END */}
                    </div>
                    { /*  Chart and Ticket END */}

                    { /*  Top listed Cards START */}
                    <div class="row g-4">

                        { /*  Top instructors START */}
                        <div class="col-lg-6 col-xxl-4">
                            <div class="card shadow h-100">

                                { /*  Card header */}
                                <div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                                    <h5 class="card-header-title">Top Instructors</h5>
                                    <a href="#" class="btn btn-link p-0 mb-0">View all</a>
                                </div>

                                { /*  Card body START */}
                                <div class="card-body p-4">

                                    { /*  Instructor item START */}
                                    <div class="d-sm-flex justify-content-between align-items-center">
                                        { /*  Avatar and info */}
                                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/09.jpg" alt="avatar" />
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-1">Lori Stevens<i class="bi bi-patch-check-fill text-info small ms-1"></i></h6>
                                                <ul class="list-inline mb-0 small">
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>25 Courses</li>
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                                </ul>
                                            </div>
                                        </div>
                                        { /*  Button */}
                                        <a href="#" class="btn btn-sm btn-light mb-0">View</a>
                                    </div>
                                    { /*  Instructor item END */}

                                    <hr />{ /*  Divider */}

                                    { /*  Instructor item START */}
                                    <div class="d-sm-flex justify-content-between align-items-center">
                                        { /*  Avatar and info */}
                                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/03.jpg" alt="avatar" />
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-1">Dennis Barrett</h6>
                                                <ul class="list-inline mb-0 small">
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>18 Courses</li>
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                                </ul>
                                            </div>
                                        </div>
                                        { /*  Button */}
                                        <a href="#" class="btn btn-sm btn-light mb-0">View</a>
                                    </div>
                                    { /*  Instructor item END */}

                                    <hr />{ /*  Divider */}

                                    { /*  Instructor item START */}
                                    <div class="d-sm-flex justify-content-between align-items-center">
                                        { /*  Avatar and info */}
                                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/01.jpg" alt="avatar" />
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-1">Jacqueline Miller<i class="bi bi-patch-check-fill text-info small ms-1"></i></h6>
                                                <ul class="list-inline mb-0 small">
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>21 Courses</li>
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.8/5.0</li>
                                                </ul>
                                            </div>
                                        </div>
                                        { /*  Button */}
                                        <a href="#" class="btn btn-sm btn-light mb-0">View</a>
                                    </div>
                                    { /*  Instructor item END */}

                                    <hr />{ /*  Divider */}

                                    { /*  Instructor item START */}
                                    <div class="d-sm-flex justify-content-between align-items-center">
                                        { /*  Avatar and info */}
                                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/04.jpg" alt="avatar" />
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-1">Billy Vasquez</h6>
                                                <ul class="list-inline mb-0 small">
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>15 Courses</li>
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                                </ul>
                                            </div>
                                        </div>
                                        { /*  Button */}
                                        <a href="#" class="btn btn-sm btn-light mb-0">View</a>
                                    </div>
                                    { /*  Instructor item END */}

                                    <hr />{ /*  Divider */}

                                    { /*  Instructor item START */}
                                    <div class="d-sm-flex justify-content-between align-items-center">
                                        { /*  Avatar and info */}
                                        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                                            { /*  Avatar */}
                                            <div class="avatar avatar-md flex-shrink-0">
                                                <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/05.jpg" alt="avatar" />
                                            </div>
                                            { /*  Info */}
                                            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                                <h6 class="mb-1">Amanda Reed<i class="bi bi-patch-check-fill text-info small ms-1"></i></h6>
                                                <ul class="list-inline mb-0 small">
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>29 Courses</li>
                                                    <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-star text-warning me-1"></i>4.5/5.0</li>
                                                </ul>
                                            </div>
                                        </div>
                                        { /*  Button */}
                                        <a href="#" class="btn btn-sm btn-light mb-0">View</a>
                                    </div>
                                    { /*  Instructor item END */}

                                </div>
                                { /*  Card body END */}
                            </div>
                        </div>
                        { /*  Top instructors END */}

                        { /*  Notice Board START */}
                        <div class="col-lg-6 col-xxl-4">
                            <div class="card shadow h-100">
                                { /*  Card header */}
                                <div class="card-header border-bottom p-4">
                                    <h5 class="card-header-title">Notice board</h5>
                                </div>

                                { /*  Card body START */}
                                <div class="card-body p-4">
                                    <div class="custom-scrollbar h-300px">

                                        { /*  Notice Board item START */}
                                        <div class="d-flex justify-content-between position-relative">
                                            <div class="d-sm-flex">
                                                <div class="icon-lg bg-purple bg-opacity-10 text-purple rounded-2 flex-shrink-0"><i class="fas fa-user-tie fs-5"></i></div>
                                                { /*  Info */}
                                                <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                    <h6 class="mb-0"><a href="#" class="stretched-link">Join New Instructor</a></h6>
                                                    <p class="mb-0">Amongst moments do in arrived Fat weddings believed prospect</p>
                                                    <span class="small">5 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        { /*  Notice Board item END */}

                                        <hr />{ /*  Divider */}

                                        { /*  Notice Board item START */}
                                        <div class="d-flex justify-content-between position-relative">
                                            <div class="d-sm-flex">
                                                <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-2 flex-shrink-0"><i class="fas fa-book-open fs-5"></i></div>
                                                { /*  Info */}
                                                <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                    <h6 class="mb-0"><a href="#" class="stretched-link">Update New Course</a></h6>
                                                    <p class="mb-0">Arrived Fat weddings believed prospect</p>
                                                    <span class="small">4 hour ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        { /*  Notice Board item END */}

                                        <hr />{ /*  Divider */}

                                        { /*  Notice Board item START */}
                                        <div class="d-flex justify-content-between position-relative">
                                            <div class="d-sm-flex">
                                                <div class="icon-lg bg-info bg-opacity-10 text-info rounded-2 flex-shrink-0"><i class="fas fa-book fs-5"></i></div>
                                                { /*  Info */}
                                                <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                    <h6 class="mb-0"><a href="#" class="stretched-link">Update Syllabus</a></h6>
                                                    <p class="mb-0">Arrived Fat weddings believed prospect</p>
                                                    <span class="small">2 days ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        { /*  Notice Board item END */}

                                        <hr />{ /*  Divider */}

                                        { /*  Notice Board item START */}
                                        <div class="d-flex justify-content-between position-relative">
                                            <div class="d-sm-flex">
                                                <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-2 flex-shrink-0"><i class="fas fa-globe fs-5"></i></div>
                                                { /*  Info */}
                                                <div class="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                    <h6 class="mb-0"><a href="#" class="stretched-link">Update New Feature</a></h6>
                                                    <p class="mb-0">Arrived Fat weddings believed prospect</p>
                                                    <span class="small">3 days ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        { /*  Notice Board item END */}
                                    </div>
                                </div>
                                { /*  Card body END */}

                                { /*  Card footer START */}
                                <div class="card-footer border-top">
                                    <div class="alert alert-success d-flex align-items-center mb-0 py-2">
                                        <div>
                                            <small class="mb-0">45 more notices listed</small>
                                        </div>
                                        <div class="ms-auto">
                                            <a class="btn btn-sm btn-success-soft mb-0" href="#!"> View all </a>
                                        </div>
                                    </div>
                                </div>
                                { /*  Card footer START */}
                            </div>
                        </div>
                        { /*  Notice Board END */}

                        { /*  Traffic sources START */}
                        <div class="col-lg-6 col-xxl-4">
                            <div class="card shadow h-100">

                                { /*  Card header */}
                                <div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                                    <h5 class="card-header-title">Traffic Sources</h5>
                                    <a href="#" class="btn btn-link p-0 mb-0">View all</a>
                                </div>

                                { /*  Card body START */}
                                <div class="card-body p-4">
                                    { /*  Chart */}
                                    <div class="col-sm-6 mx-auto" style={{position:"relative"}}>
                                        <div id="ChartTrafficViews" style={{minHeight:"196.9px"}}><div id="apexchartsgaggpn8b" class="apexcharts-canvas apexchartsgaggpn8b apexcharts-theme-light" style={{height:"196.2px", width:"200px"}}>
                                            <div class="apexcharts-legend"></div><div class="apexcharts-tooltip apexcharts-theme-dark"><div class="apexcharts-tooltip-series-group" style={{order:1}} ><span class="apexcharts-tooltip-marker" style={{backgroud:"rgb(6, 106, 201);"}}></span><div class="apexcharts-tooltip-text"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style={{order:2}}><span class="apexcharts-tooltip-marker" style={{background:"rgb(12, 188, 135)"}}></span><div class="apexcharts-tooltip-text"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style={{border:3}}><span class="apexcharts-tooltip-marker" style={{background:"rgb(247, 195, 46)"}}></span><div class="apexcharts-tooltip-text"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div><div class="apexcharts-tooltip-series-group" style={{order:4}}><span class="apexcharts-tooltip-marker" style={{background:"rgb(214, 41, 62)"}}></span><div class="apexcharts-tooltip-text" ><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div></div></div>
                                        <div class="resize-triggers"><div class="expand-trigger"><div height='198px' width='153px'></div></div><div class="contract-trigger"></div></div></div>

                                    { /*  Content */}
                                    <ul class="list-group list-group-borderless mt-3">
                                        <li class="list-group-item"><i class="text-primary fas fa-circle me-2"></i>Create a Design System in Figma</li>
                                        <li class="list-group-item"><i class="text-success fas fa-circle me-2"></i>The Complete Digital Marketing Course - 12 Courses in 1</li>
                                        <li class="list-group-item"><i class="text-warning fas fa-circle me-2"></i>Google Ads Training: Become a PPC Expert</li>
                                        <li class="list-group-item"><i class="text-danger fas fa-circle me-2"></i>Microsoft Excel - Excel from Beginner to Advanced</li>
                                    </ul>
                                </div>
                            </div>
                            { /*  Card body END */}
                        </div>
                        { /*  Traffic sources END */}

                    </div>
                    { /*  Top listed Cards END */}

                </div>
                { /*  Page main content END */}
            </div>
            { /*  Page content END */}

        </main>
    )
}

export default AdminDashboard 