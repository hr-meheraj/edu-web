import React from 'react';

const Header = () => {
    return (
        <section class="bg-primary bg-opacity-10">
            <div class="container">
                <div class="row">
                    { /* Content START */ }
                    <div class="col-lg-8 mx-auto text-center">
                        { /* Title */ }
                        <h1 class="display-6">Search Solution. Get Support</h1>
                        <p class="mb-0">Search here to get answers to your questions.</p>
                        { /* Search bar */ }
                        <form class="bg-body rounded p-2 mt-4">
                            <div class="input-group">
                                <input class="form-control border-0 me-1" type="text" placeholder="Search question..." spellcheck="false" data-ms-editor="true"/>
                                    <button type="button" class="btn btn-dark mb-0 rounded">Search</button>
                            </div>
                        </form>

                        { /* Popular questions START */ }
                        <div class="row mt-4 align-items-center">
                            <div class="col-12">
                                <h5 class="mb-3">Popular questions</h5>
                                { /* Questions List START */ }
                                <div class="list-group list-group-horizontal gap-2 justify-content-center flex-wrap mb-0 border-0">
                                    <a class="btn btn-white btn-sm fw-light" href="help-center-detail.html"> How can we help?</a>
                                    <a class="btn btn-white btn-sm fw-light" href="help-center-detail.html"> How to upload data to the system? </a>
                                    <a class="btn btn-white btn-sm fw-light" href="help-center-detail.html"> Installation Guide? </a>
                                    <a class="btn btn-white btn-sm fw-light" href="help-center-detail.html"> How to view expired course? </a>
                                    <a class="btn btn-white btn-sm fw-light" href="help-center-detail.html"> What's are the difference between a social?</a>
                                    <a class="btn btn-primary-soft btn-sm fw-light" href="#!">View all question</a>
                                </div>
                                { /* Questions list END */ }
                            </div>
                        </div>
                        { /* Popular questions END */ }
                    </div>
                    { /* Content END */ }

                    { /* Image */ }
                    <div class="col-12 mt-6">
                        <img src="https://eduport.webestica.com/assets/images/element/help-center.svg" class="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
