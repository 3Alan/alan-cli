module.exports = [
  {
    name: 'init',
    type: 'confirm',
    message: 'init a project?'
  },
  {
    name: 'name',
    message: 'input project name',
    when: res => Boolean(res.init)
  },
  {
    type: 'list',
    message: 'select a tool',
    name: 'type',
    choices: ['webpack', 'vite'],
    filter: function (val) {
      return val.toLowerCase();
    },
    when: res => Boolean(res.init)
  }
];
