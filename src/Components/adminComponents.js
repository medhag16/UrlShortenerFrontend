import React from 'react';
import urlservice from '../Services/urlService.js';
import {Navbar, Nav,Form,FormControl,Button}  from 'react-bootstrap';

class AdminComponents extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            url:[]
        }
        
    }
    componentDidMount(){
        urlservice.getUrlList().then((Response) =>{
            this.setState({url:Response.data})
        });
    }
    render(){
        return(
            <div>
                <h1 className = "text-center">URL List</h1>
                <table striped bordered hover variant="dark" className = "table table-striped text-center"  >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Original URL</th>
                            <th>Short URL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.url.map(
                                current_url =>
                                <tr key = {current_url.id}>
                                    <td>{current_url.id}</td>
                                    <td>{current_url.originalUrl}</td>
                                    <td>{current_url.shortLink}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default AdminComponents