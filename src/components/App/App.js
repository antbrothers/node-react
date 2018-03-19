import React, {Component} from 'react'
import getRouter from '../../router/router'

export default class APP extends Component {
    render() {
        return (
            <div>
                {getRouter()}
            </div>
        )
    }
}