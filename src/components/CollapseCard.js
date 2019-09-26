import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CollapseCard extends Component {
  state = { collapse: false };

  render() {
    const { data, collapse } = this.props;
    return (
      <div>
        <Button
          outline
          color="primary"
          size="md"
          onClick={this.toggle}
          style={{ marginBottom: '1rem', margin: 'auto' }}
        >
          {collapse ? 'Hide Details' : 'Show Details'}
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>{data.map(repo => repo.description)}</CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };
}
export default CollapseCard;
