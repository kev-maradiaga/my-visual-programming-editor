const nodeCategories = [
  {
    title: 'categoria1',
    nodeTypes: [
      {
        id: 't1',
        title: 'tipo1',
        inputs: [{}, {}],
        outputs: [{}],
      },
    ],
  },
  {
    title: 'categoria2',
    nodeTypes: [
      {
        id: 't2',
        title: 'tipo2',
        inputs: [],
        outputs: [],
      },
      {
        id: 't3',
        title: 'tipo3',
        inputs: [],
        outputs: [],
      },
    ],
  },
];

const nodeTypes = {};
nodeCategories.forEach((c) =>
  c.nodeTypes.forEach((t) => {
    nodeTypes[t.id] = t;
  })
);

export {nodeCategories, nodeTypes};
