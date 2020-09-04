import React from 'react'

export default class FormToSend extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <section>
                    <div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-10 ">
                                        <div>
                                            <h2>CONTACT US</h2>
                                        </div>
                                        <form method="post" data-form-title="CONTACT US">
                                            <input type="hidden" data-form-email="true" />
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" required="" placeholder="Name*" data-form-field="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" required="" placeholder="Email*" data-form-field="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" placeholder="Message" rows="2" data-form-field="Message"></textarea>
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-lg btn-info">CONTACT US</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}