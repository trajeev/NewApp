import React, { Component } from 'react';
import ListBox from '../listBox/listBox.component'

class Lists extends Component {
    state = { 
        lists: [{id: '1', FranchiseName: 'newks', store: '1', storeLocation: 'cl'}] 
    }

    render() { 
        let lists = (
            <div>
                {this.state.lists.map(list => {
                    return <ListBox 
                        key = {list.id}
                        franchiseName= {list.FranchiseName}
                        store = {list.store}
                        storeLocation = {list.storeLocation} />
                })}
            </div>
        )

        return ( 
            <div>
            {lists}
            </div> 
         );
    }
}
 
export default Lists;