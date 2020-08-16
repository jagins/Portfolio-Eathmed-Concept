
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {id: 1, company_name: 'Cresco'},
        {id: 2, company_name: 'Verano'},
        {id: 3, company_name: 'Avexia'},
        {id: 4, company_name: 'Ascend'},
        {id: 5, company_name: 'PTS'}
      ]);
    });
};
