import React, { PureComponent, Fragment } from 'react';
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import Axios from "axios";
import { clientid, clientsecret } from './GithubCredentials';

class GithubAPI extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username : '',
            profile : null,
            repos : null
        }
    }
 
    //two way data binding with user name
    updateInput = (e) => {
        this.setState({
            ...this.state,
            username : e.target.value
        });
    };

    //form submission
    searchUser = (e) =>{
        e.preventDefault();
        this.searProfile();
        this.searRepos();
    };

    //search a profile
    searProfile = () =>{
        Axios.get(`https://api.github.com/users/${this.state.username} ? clientId=${clientid} & ClientSecret=${clientsecret}`)
        .then((response)=>{
            this.setState({
                profile : response.data
            });
        }).catch((err)=>{
            console.log(err);
        });
    };

    //search a Repos
    searRepos = () =>{
        Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientid}&ClientSecret=${clientsecret}`)
        .then((response)=>{
            this.setState({
                repos : response.data
            });
        }).catch((err)=>{
            console.log(err);
        });
    };

    render() {
        return (
            <Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <div className="container mt-3  ">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Github User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={this.searchUser}>
                                        <div className="form-group">
                                             <input 
                                             value={this.state.username}
                                             onChange={this.updateInput}
                                             type="text" 
                                             size="40" 
                                             className="form-control" 
                                             placeholder="User Name"
                                             />
                                        </div>
                                        <div>
                                            <input type="submit" value="search" className="btn btn-secondary btn-sm"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile ? 
                                <GithubProfile profile={this.state.profile}/> : null
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos ? 
                                <GithubRepos repos={this.state.repos}/> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GithubAPI;