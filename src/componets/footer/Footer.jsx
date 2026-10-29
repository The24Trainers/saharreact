



function Footer() {

    return (
        <section className="pb-4">
            <div className="border rounded-5">

                <section className="p-4 text-center">
                    <footer className="bg-body-tertiary text-center">

                        <div className="container p-4 pb-0">

                            <section className="mb-4">

                                <a data-mdb-ripple-init="" className="btn text-white btn-floating m-1" style="background-color: #3b5998;" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>


                                <a data-mdb-ripple-init="" className="btn text-white btn-floating m-1" style="background-color: #55acee;" href="#!" role="button"><i className="fab fa-twitter"></i></a>


                                <a data-mdb-ripple-init="" className="btn text-white btn-floating m-1" style="background-color: #dd4b39;" href="#!" role="button"><i className="fab fa-google"></i></a>


                                <a data-mdb-ripple-init="" className="btn text-white btn-floating m-1" style="background-color: #ac2bac;" href="#!" role="button"><i className="fab fa-instagram"></i></a>


                                <a data-mdb-ripple-init="" className="btn text-white btn-floating m-1" style="background-color: #0082ca;" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

                                <a data-mdb-ripple-init="" className="btn text-white btn-floating m-1" style="background-color: #333333;" href="#!" role="button"><i className="fab fa-github"></i></a>
                            </section>

                        </div>



                        <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
                            © 2020 Copyright:
                            <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                        </div>

                    </footer>
                </section>



                <div className="p-4 text-center border-top mobile-hidden">
                    <a className="btn btn-link px-3 collapsed" data-mdb-collapse-init="" href="#example9" role="button" aria-expanded="false" aria-controls="example9" data-ripple-color="hsl(0, 0%, 67%)">
                        <i className="fas fa-code me-md-2"></i>
                        <span className="d-none d-md-inline-block">
                            Show code
                        </span>
                    </a>


                    <a className="btn btn-link px-3 " data-ripple-color="hsl(0, 0%, 67%)">
                        <i className="fas fa-file-code me-md-2 pe-none"></i>
                        <span className="d-none d-md-inline-block export-to-snippet pe-none">
                            Edit in sandbox
                        </span>
                    </a>

                </div>


            </div>
        </section>
    )


}

export default Footer

