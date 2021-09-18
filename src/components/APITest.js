import React from "react";
import APIService from "../APIService";

export default class APITest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        APIService.getUser().then((data) => {
            this.setState({ user: data })
            console.log(this.state.data)
        })
            .catch(function (error) {
                console.log("error:" + error);
            });;
    }

    render() {
        return (
            <div>
                <h1>API Test</h1>
                <table>
                    <thead>
                        <tr> <th>
                            id
                        </th>
                            <th>
                                username
                            </th>
                            <th>
                                last name
                            </th>
                        </tr>
                    </thead>
                    

                </table>

            </div>
        )
    }
}

