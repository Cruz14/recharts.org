export default {
  name: 'ScatterChart',
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: '{ top: 5, right: 5, bottom: 5, left: 5 }',
      isOptional: true,
      desc: 'The sizes of whitespace around the container.',
    },
  ],
  examples: [
    {
      name: 'Simple ScatterChart',
      url: '/examples#SimpleScatterChart',
    },
    {
      name: 'ScatterChart of three-dimensional data',
      url: '/examples#ThreeDimScatterChart',
    },
    {
      name: 'Joint all the points in ScatterChart',
      url: '/examples#JointLineScatterChart',
    },
  ]
};
