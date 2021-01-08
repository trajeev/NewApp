import React from 'react';
import ListBox from '../listBox/listBox.component'
import {connect} from 'react-redux'

const Lists = ({lists}) => {
    let listCard = (
        <div>
            {lists.map(list => {
                return <ListBox 
                    key = {list.id}
                    list = {list} />
            })}
        </div>
    )

    return ( 
        <div className = 'lists'>
        {listCard}
        </div> 
    );
}

const mapStateToProps = state => ({
    lists: state.list.lists
})
 
export default connect(mapStateToProps)(Lists);