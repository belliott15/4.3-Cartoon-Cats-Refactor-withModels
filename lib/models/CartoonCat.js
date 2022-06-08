const pool = require('../utils/pool');

module.exports = class CartoonCat {
    id;
    name;
    type;
    url;
    year;
    lives;
    isSidekick;

    constructor(row){
        this.id = row.id;
        this.name = row.name;
        this.type = row.type;
        this.url = row.url;
        this.year = row.year;
        this.lives = row.lives;
        this.isSidekick = row.isSidekick;
    }

    static async getAllCats(){
        const { rows } = await pool.query('SELECT * FROM cats;');
        return rows.map((row) => new CartoonCat(row));
    }

    static async getCatByID(id){
        const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1;', [id]);
        if (!rows[0]) return null;

        return new CartoonCat(rows[0]);
    }

};