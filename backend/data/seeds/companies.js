
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {company_name: 'Cresco'},
        {company_name: 'Verano'},
        {company_name: 'Ascend'},
        {company_name: 'PTS'}
      ]);
    });
};
