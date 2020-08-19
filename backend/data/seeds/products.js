
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          product_name: 'Pheno51', 
          price: 25, 
          product_type: 'Flower', 
          image: 'https://tinyurl.com/yyhnufga', 
          company_id: 1
        },

        { 
          product_name: 'Wintermint Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://tinyurl.com/y3fasqzc', 
          company_id: 2
        },

        { 
          product_name: 'Wildberry Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://tinyurl.com/yyqa6e2l',
          company_id: 2
        },

        {
          product_name: 'Tangerine 1:1 Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://tinyurl.com/y4uzs3fe',
          company_id: 2
        },
        
        { 
          product_name: 'Green Tea Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://tinyurl.com/y3l5dbk7', 
          company_id: 2,
        },

        {
          product_name: 'Espresso Beans Kiva Terra Bites', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://tinyurl.com/yyzqrrfu', 
          company_id: 1,
        },

        {
          product_name: 'Botanical White Grapefruit Gummies', 
          price: 25, 
          product_type: 'Edible', 
          image: 'https://tinyurl.com/y4fujdhe',
          company_id: 1,
        },

        {
          product_name: 'Freshly Picked Berries Gummies', 
          price: 25, 
          product_type: 'Edible', 
          image: 'https://tinyurl.com/y3y5vtte',
          company_id: 1,
        },

        {
          product_name: 'CBD Cherry Lime Gummies', 
          price: 40, 
          product_type: 'Edible', 
          image: 'https://www.florasophiabotanicals.com/uploads/1/2/5/7/125701162/s346358801989309698_p21_i3_w2016.jpeg',
          company_id: 1,
        },

        {
          product_name: 'Watermelon Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Strawberry Cough Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Jack Herer Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Ghost Train Haze Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Berry Gelato Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'G6 Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'G6 Sauce Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'GG #4 Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/y32rtjq6',
          company_id: 1,
        },

        {
          product_name: 'Lime Sorbet Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://cdn.greenrush.com/media/0/5/6/7634056/c/large.jpg',
          company_id: 1,
        },

        {
          product_name: 'Island Sweet Skunk Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/y5gm3m57',
          company_id: 1,
        },

        {
          product_name: 'Durban Poison Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/y6rzdh3s',
          company_id: 1,
        },

        {
          product_name: 'Green Line OG Liquid Live Resin Disposable Pen', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/y4kxpxp6',
          company_id: 1,
        },

        {
          product_name: 'Island Sweet Skunk Liquid Live Resin Disposable Pen', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://tinyurl.com/y4kxpxp6',
          company_id: 1,
        },

        {
          product_name: 'Midnight Moon AiroPro Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/y54zyu7f',
          company_id: 4,
        },

        {
          product_name: 'Clementine AiroPro Vape Cartridge', 
          price: 90, 
          product_type: 'Vape', 
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_957ddd9d-f419-4197-a3e8-6d87f32113c3.jpg',
          company_id: 4,
        },

        {
          id: 26, 
          product_name: 'Mystical Melody AiroPro Vape Cartridge', 
          price: 90, 
          product_type: 'Vape', 
          image: 'https://uploads.iheartjane.com/uploads/ae0b6bc6-1471-44c7-9903-f03aed274088.jpg',
          company_id: 4,
        },

        {
          product_name: "L' Orange Double Barrell Single", 
          price: 85, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yy7fg27w',
          company_id: 4,
        },


        {
          product_name: "Mandarin Orange Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          image: 'https://rec.herbalremediesil.com/wp-content/uploads/2019/12/Tonic-Mandarin-Orange-1L-page-001.jpg',
          company_id: 5,
        },

        {
          product_name: "100MG CBD / 100MG THC Tropical Punch 1:1 Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_990b969b-7cb5-46d9-b533-7165ec5cd9e9.png',
          company_id: 5,
        },

        {
          product_name: "Sumatran Sunrise AiroPro Vape Cartridge", 
          price: 90, 
          product_type: 'Vape', 
          image: 'https://tinyurl.com/yxhapdtz',
          company_id: 4,
        },

        {
          product_name: "Pomegranate Acai Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_c34c4e85-152a-49f3-a31a-e00666ef522b.png',
          company_id: 5,
        },

        {
          product_name: "Raspberry Lemonade Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/02/Tonic-Raspberry-Lemonade-2L-1-page-00',
          company_id: 5,
        },

        {
          product_name: "Raspberry Lemonade Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/02/Tonic-Raspberry-Lemonade-2L-1-page-00',
          company_id: 5,
        },

        {
          product_name: "Cucumber Watermelon Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/01/Tonic-Cucumber-Watermelon-1L-page-',
          company_id: 5,
        },

        {
          product_name: "Sojay Haze Pre-Rolled Joint", 
          price: 25, 
          product_type: 'Preroll', 
          image: 'https://tinyurl.com/y526bt5m',
          company_id: 1,
        },

      ]);
    });
};
