import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import Examples from 'docs/examples';

const firstChartName = Object.keys(Examples)[0];

@connect(state => {
  return {
    page: state.routing.location.hash ? state.routing.location.hash.slice(1) : firstChartName,
  };
}, { push: routeActions.push })
class ExamplesView extends Component {
  renderMenuList(type) {
    const { page } = this.props;
    const typeNameList = Object.keys(Examples).filter(name => {
      if (type === 'BarChart') {
        return name.indexOf(type) >= 0 && name.indexOf('RadialBarChart') === -1;
      }
      return name.indexOf(type) >= 0;
    });

    const items = typeNameList.map(name => {
      return (
        <li key={name}>
          <a href={`/examples#${name}`} className={page === name ? 'active' : ''}>{name}</a>
        </li>
      );
    });

    return <ul className="menu">{items}</ul>;
  }

  render() {
    const { page } = this.props;
    const examples = Examples[page];

    return (
      <div className="page page-examples">
        <div className="sidebar">
          <h2>Examples</h2>

          <h4>LineChart</h4>
          {this.renderMenuList('LineChart')}

          <h4>BarChart</h4>
          {this.renderMenuList('BarChart')}

          <h4>AreaChart</h4>
          {this.renderMenuList('AreaChart')}

          <h4>ComposedChart</h4>
          {this.renderMenuList('ComposedChart')}

          <h4>ScatterChart</h4>
          {this.renderMenuList('ScatterChart')}

          <h4>PieChart</h4>
          {this.renderMenuList('PieChart')}

          <h4>RadarChart</h4>
          {this.renderMenuList('RadarChart')}

          <h4>RadialBarChart</h4>
          {this.renderMenuList('RadialBarChart')}

          <h4>Treemap</h4>
          {this.renderMenuList('Treemap')}

          <h4>Tooltip</h4>
          {this.renderMenuList('Tooltip')}

          <h4>AdaptionWrapper</h4>
          {this.renderMenuList('AdaptionWrapper')}

        </div>
        <div className="content">
          <h3>{page}</h3>
          <iframe src={examples} allow-modals allow-forms allow-popups allow-scripts allow-same-origin>
          </iframe>
        </div>
      </div>
    );
  }
}

export default ExamplesView;
