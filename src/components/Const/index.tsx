/*
w: warm up
i: interval
g: group
t: task
*/

export const warmup = {
  type: "w",
  key: -2,  
  label: 'Warm Up',
  loops: 1,
  duration: '00:30' 
} satisfies ITask

export const interval = {
  type: "i",
  key: -2,  
  label: 'Prepare to the next',
  loops: 1,
  duration: '00:30' 
} satisfies ITask

export const coolDown = {
  type: "w",
  key: -2,  
  label: 'Cool Down',
  loops: 1,
  duration: '00:10' 
} satisfies ITask

export const taskGroup = { 
  type: "g",
  key: -1,  
  label: 'New Group',
  loops: 1,
  nodes: [],
  param: {
    timeInterval:'00:06',
    timeWarmup:'00:06'
  }
} satisfies ITask

export const taskItem:ITask = { 
  type: "t",
  key: -1,  
  label: 'New Task',
  loops: 1,
  duration: '00:30',
  nodes:[]
} satisfies ITask
  
export const treinos: ITask[] = [{
  key: -1,
  label: "Ficha BB Carol",
  type:"g",
  param: {
    timeInterval:'00:06',
    timeWarmup:'00:06'
  },
  nodes: [
    { key: 0, type:"g", label: 'aquecimento', loops: 2, duration: "00:30", nodes:[
      { key: 2, label: "Polichinelo", duration: '00:30', type:'t', nodes:[], loops:1 }
    ]}
  ]
},

{
  key: -0,
  label: "Ficha C Carol",
  type:"g",
  param: {
    timeInterval:'00:05',
    timeWarmup:'00:05'
  },  
  nodes: [{
    type:"g",
    key: 0,
    label: 'aquecimento',
    loops: 2,
    nodes: [
      { key: 1, label: "Polichinelo", duration: '00:30', type:'t', nodes:[], loops:1 },
      { key: 2, label: "Corrida estacionaria", duration: '00:30', type:'t', nodes:[], loops:1}
    ]    
  }
  ,{key: 3, label: "Apoio", duration: '00:30', type:'t', loops:2, nodes:[]}
  ,{key: 4, label: "Apoio2", type:'t', loops:2, duration: "00:00", nodes:[]}
  ]
},


  {
    key: -2,
    label: "2 Ficha C Carol",
    type:"g",
    param: {
      timeInterval:'00:10',
      timeWarmup:'00:30'
    },  
    nodes: [
      {key: 2, type:'g', label: "Aquecimento", loops:2, nodes:[
        {key: 3, label: "Gato cachorro", duration: '01:00', type:'t', loops:1, nodes:[]},
        {key: 4, label: "Abnominal V isometrico", duration: '00:20', type:'t', loops:1, nodes:[]},
        {key: 5, label: "Rolamento para tras", duration: '10:00', type:'t', loops:1, nodes:[]}
      ]},
      {key: 1, type:'g', label: "Treino", loops: 4, nodes:[
        {key: 6, label: "Agachamento + desenvolvimento", duration: '00:30', type: 't', loops:1, nodes:[]},
        {key: 7, label: "Prancha  eelvacao miniband", duration: '00:30', type: 't', loops:1, nodes:[]},
        {key: 8, label: "Twist em pé", duration: '00:30', type: 't', loops:1, nodes:[]},
        {key: 9, label: "Flexao joelho bola suiça", duration: '00:30', type: 't', loops:1, nodes:[]},
        {key: 10, label: "Rosca alternada com mini band", duration: '00:30', type: 't', loops:1, nodes:[]},
        {key: 11, label: "corrida estacionaria", duration: '00:30', type: 't', loops:1, nodes:[]}
        ]
      },
    ]
  }
]
