import React from 'react'
import axios from "axios"

export default class FormToSend extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        isSend: false
    }

    handleName = (e) => this.setState({ name: e.target.value })
    handleEmail = (e) => this.setState({ email: e.target.value })
    handlePhone = (e) => this.setState({ phone: e.target.value })
    handleMessage = (e) => this.setState({ message: e.target.value })
    resetFrom = (e) => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: '',
        })
        setTimeout(() => {
            this.setState({ isSend: false })
        }, 3000)

    }

    fromSubmit = e => {
        e.preventDefault()
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
        }
        axios.post('/api/forma', data)
            .then(res => {
                this.setState({ isSend: true }, this.resetFrom())

            })
            .catch(() => console.log('message don\'t sent'))

    }

    render() {
        console.log(this.state)
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
                                                <input value={this.state.name} onChange={(e) => this.handleName(e)} type="text" className="form-control" name="name" required="" placeholder="Name*" />
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.email} onChange={(e) => this.handleEmail(e)} type="email" className="form-control" name="email" required="" placeholder="Email*" />
                                            </div>
                                            <div className="form-group">
                                                <input value={this.state.phone} onChange={(e) => this.handlePhone(e)} type="tel" className="form-control" name="phone" placeholder="Phone" />
                                            </div>
                                            <div className="form-group">
                                                <textarea value={this.state.message} onChange={(e) => this.handleMessage(e)} className="form-control" name="message" placeholder="Message" rows="2"  ></textarea>
                                            </div>
                                            <div>
                                                <button onClick={() => this.fromSubmit()} type="submit" className="btn btn-lg btn-info">CONTACT US</button>
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