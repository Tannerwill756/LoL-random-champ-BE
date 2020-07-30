
exports.up = function(knex) {
    return knex.schema
        .createTable('champions', tbl => {
            tbl.increments(); //create id and auto increment
            tbl.text('champion_name')
                .notNullable();
            tbl.boolean('champion_pic')
            tbl.boolean('top')
            tbl.boolean('jungle')
            tbl.boolean('mid')
            tbl.boolean('adc')
            tbl.boolean('support')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('champions')
};
