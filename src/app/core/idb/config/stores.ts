export const stores = [
  {name: 'project', primaryKey: 'id', indexes: ['name']},
  {name: 'person', primaryKey: 'id', indexes: ['pid', 'name']},
  {name: 'affair', primaryKey: 'id', indexes: ['pid', 'name']},
  {name: 'site', primaryKey: 'id', indexes: ['pid', 'name']}
];
