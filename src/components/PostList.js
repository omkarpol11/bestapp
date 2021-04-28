import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount(){
        axios.get("https://reqres.in/api/users?page=2")
        .then(Response =>{
            this.setState({posts:Response.data.data})   
            console.log(Response.data.data);         
        })
        .catch(error =>{
            console.log(error);        
        })

    }
    
    render() {     
        let data = this.state.posts.map(post => {
            return(
                <>
                <img src={post.avatar}></img>
                
                </>
            )
        })        
        return (
            <div>
            list post data   
            {data}                   
            </div>
        )
    }
}

export default PostList
