import React from 'react';
import RegistryItem from './RegistryItem';
import store from './store';

export default class extends React.Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentWillMount () {
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        return (
            <div>
                <h1>My Registry</h1>
                {this.state.registryItems.map((item) => {
                    return (
                    <div key={item.id}>
                        <RegistryItem itemDetails={item}/>
                    </div>)
                })}
            </div>
        );
    }

}
