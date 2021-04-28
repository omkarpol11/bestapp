import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "omkar"
        }
        console.log("LifeCycleB : constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB : getDerivedStateFromProp");
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleB : componentDidMount");
    }


    render() {
        console.log("LifeCycleB : render");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB



