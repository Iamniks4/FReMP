import React from 'react';

class Results extends React.Component {
    render() {
        return (
            this.props.names.map(row =>
                <div key = {row.id}>
                    {row.name}
                </div>
            )
        );
    }
}

export default Results;