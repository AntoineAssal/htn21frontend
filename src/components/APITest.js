import React from "react";
import APIService from "../APIService";

export default class APITest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : []
        }
    }

    componentDidMount() {
        APIService.getUser().then((data) => {
            this.setState({user: data})
            console.log(this.state.data)
        })
        .catch(function(error) {
            console.log("error:" + error);
        });;
    }

    render() {
        return (
            <div>
                <h1>API Test</h1>
                <p>{this.state.user.username}</p>
                <p>{this.state.user.firstName}</p>
            </div>
        )
    }   
}
