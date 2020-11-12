export const stores = [
  {name: 'project', primaryKey: 'id', indexes: ['name']},
  {name: 'person', primaryKey: 'id', indexes: ['pid', 'name']},
  {name: 'event', primaryKey: 'id', indexes: ['pid', 'name']},
  {name: 'location', primaryKey: 'id', indexes: ['pid', 'name']}
];
