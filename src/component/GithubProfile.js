import React, { PureComponent, Fragment } from 'react';
import GithubProfileDetails from "./GithubProfileDetails";
import GithubProfileCard from "./GihubProfileCard"

class GithubProfile extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {
                                //to check the object is empty
                                Object.keys(this.props).length !== 0 ? 
                                <GithubProfileCard profile={this.props.profile}/> : null
                            }
                        </div>
                        <div className="col-md-9">
                             {
                                //to check the object is empty
                                Object.keys(this.props).length !== 0 ? 
                                <GithubProfileDetails profile={this.props.profile}/> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GithubProfile