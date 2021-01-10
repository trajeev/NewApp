import React from 'react';
import ListBox from '../listBox/listBox.component'
import {connect} from 'react-redux'
import './lists.styles.css'

const Lists = ({lists}) => {
    let listCard = (
        <div>
            {lists.map(list => {
                return <ListBox 
                    key = {list.storeId}
                    list = {list} />
            })}
        </div>
    )

    return ( 
        <div className = 'lists'>
        {lists.length > 0  ? listCard : <span><strong>No forms to show</strong></span>}
        </div> 
    );
}

const mapStateToProps = ({list: {lists}}) => ({
    lists
})
 
export default connect(mapStateToProps)(Lists);