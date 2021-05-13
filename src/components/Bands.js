import React, { Component} from 'react';
import Band from './Band';

class Bands extends Component {


    render() {
        return(
            <div>
                {this.props.bands.map(band => <Band delete={this.props.delete}  name={band.name} id={band.id} key={band.id} />)}
            </div>
        )
    }
}

export default Bands;