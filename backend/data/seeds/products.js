
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1, 
          product_name: 'Pheno51', 
          price: 25, 
          product_type: 'Flower', 
          image: 'https://public.leafly.com/strains/flowers/pheno-51-flower.svg', 
          company_id: 1
        },

        {
          id: 2, 
          product_name: 'Wintermint Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fproducts%2Fphoto', 
          company_id: 2
        },

        {
          id: 3, 
          product_name: 'Wildberry Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fproducts%2',
          company_id: 2
        },

        {
          id: 4, 
          product_name: 'Tangerine 1:1 Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fmenu%2FZMfWj',
          company_id: 2
        },
        
        {
          id: 5, 
          product_name: 'Geen Tea Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.imgix.net%2Fshared-web-images%2Fproduct-type-ico', 
          company_id: 2,
        },

        {
          id: 6, 
          product_name: 'Espresso Beans Kiva Terra Bites', 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://thestickyrose.com/wp-content/uploads/2020/04/Terra-Bites-Espresso-Beans-Dark-Chocolate.jpg', 
          company_id: 1,
        },

        {
          id: 7, 
          product_name: 'Botanical White Grapefruit Gummies', 
          price: 25, 
          product_type: 'Edible', 
          image: 'https://myhavenstores.com/maywood/wp-content/uploads/sites/7/2020/03/2ea0d5eb-59b4-408a-acf2-6358d0',
          company_id: 1,
        },

        {
          id: 8, 
          product_name: 'Freshly Picked Berries Gummies', 
          price: 25, 
          product_type: 'Edible', 
          image: 'https://images.weedmaps.com/photos/products/000/168/158/large/249311_Mindys_3x5_Pouch_Berries.jpg',
          company_id: 1,
        },

        {
          id: 9, 
          product_name: 'CBD Cherry Lime Gummies', 
          price: 40, 
          product_type: 'Edible', 
          image: 'https://cdn.shopify.com/s/files/1/0132/3279/9802/products/IMG_9228_1024x1024@2x.jpg?v=1537196781',
          company_id: 1,
        },

        {
          id: 10, 
          product_name: 'Watermelon Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://www.directvapor.com/media/catalog/product/cache/28/thumbnail/600x600/9df78eab33525d08d6',
          company_id: 2,
        },

        {
          id: 11, 
          product_name: 'Watermelon Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://www.directvapor.com/media/catalog/product/cache/28/thumbnail/600x600/9df78eab33525d08d6',
          company_id: 2,
        },

        {
          id: 12, 
          product_name: 'Strawberry Cough Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fflowhub-pos-product-image',
          company_id: 2,
        },

        {
          id: 13, 
          product_name: 'Jack Herer Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://images.weedmaps.com/photos/products/000/082/178/original/177470_verano_Vape_Cartrdidge_',
          company_id: 2,
        },

        {
          id: 14, 
          product_name: 'Ghost Train Haze Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://images.weedmaps.com/photos/products/000/082/178/original/177470_verano_Vape_Cartrdidge_Box',
          company_id: 2,
        },

        {
          id: 15, 
          product_name: 'Berry Gelato Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fpr',
          company_id: 2,
        },

        {
          id: 16, 
          product_name: 'G6 Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/s1D5wcmTQWyzsPQ5S43S_Screen%2',
          company_id: 2,
        },

        {
          id: 17, 
          product_name: 'G6 Sauce Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/s1D5wcmTQWyzsPQ5S43S_Screen%2',
          company_id: 2,
        },

        {
          id: 18, 
          product_name: 'GG #4 Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fproduct',
          company_id: 1,
        },

        {
          id: 19, 
          product_name: 'Lime Sorbet Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/AdUOAU0GSvqMNLfiwNkm_Screen%20Sh',
          company_id: 1,
        },

        {
          id: 20, 
          product_name: 'Island Sweet Skunk Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/LTcg8blPSaCBAWNmiKnQ_Screen%20Sh',
          company_id: 1,
        },

        {
          id: 21, 
          product_name: 'Durban Poison Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/LTcg8blPSaCBAWNmiKnQ_S',
          company_id: 1,
        },

        {
          id: 22, 
          product_name: 'Green Line OG Liquid Live Resin Disposable Pen', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://usercontent.one/wp/burgundyzine.com/wp-content/uploads/2019/07/DSC03414-1024x683.jpg',
          company_id: 1,
        },

        {
          id: 23, 
          product_name: 'Island Sweet Skunk Liquid Live Resin Disposable Pen', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://usercontent.one/wp/burgundyzine.com/wp-content/uploads/2019/07/DSC03414-1024x683.jpg',
          company_id: 1,
        },

        {
          id: 24, 
          product_name: 'Midnight Moon AiroPro Vape Cartridge', 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUVFRcYFRcX',
          company_id: 4,
        },

        {
          id: 25, 
          product_name: 'Clementine AiroPro Vape Cartridge', 
          price: 90, 
          product_type: 'Concentrate', 
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_957ddd9d-f419-4197-a3e8-6d87f32113c3.jpg',
          company_id: 4,
        },

        {
          id: 26, 
          product_name: 'Mystical Melody AiroPro Vape Cartridge', 
          price: 90, 
          product_type: 'Concentrate', 
          image: 'https://images.weedmaps.com/photos/products/000/081/935/original/175778_AP-CK-AF-MYME-H-00-OIL.png?fi',
          company_id: 4,
        },

        {
          id: 27, 
          product_name: "L' Orange Double Barrell Single", 
          price: 85, 
          product_type: 'Concentrate', 
          image: 'https://aph-uploads-production.s3.amazonaws.com/uploads/photo/photo/51273/Sherbinskis-L-Orange-Double',
          company_id: 4,
        },

        {
          id: 28, 
          product_name: "GG #4 Liquid Live Resin Disposable Pen", 
          price: 50, 
          product_type: 'Concentrate', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2Fproduct',
          company_id: 1,
        },

        {
          id: 29, 
          product_name: "Sativa High Supply Disposable Pen", 
          price: 50, 
          product_type: 'Concentrate', 
          image: 'https://images.weedmaps.com/pictures/users/000/805/650/large/80705859_High_Supply_Distillate_Pen_H',
          company_id: 1,
        },

        {
          id: 30, 
          product_name: "Indica High Supply Disposable Pen", 
          price: 50, 
          product_type: 'Concentrate', 
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_c4ba6286-f142-4974-a197-7c1307aa6ac7.png',
          company_id: 1,
        },

        {
          id: 31, 
          product_name: "Mandarin Orange Tonic Drink", 
          price: 40, 
          product_type: 'Drink', 
          image: 'https://rec.herbalremediesil.com/wp-content/uploads/2019/12/Tonic-Mandarin-Orange-1L-page-001.jpg',
          company_id: 5,
        },

        {
          id: 32, 
          product_name: "100MG CBD / 100MG THC Tropical Punch 1:1 Tonic Drink", 
          price: 40, 
          product_type: 'Drink', 
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_990b969b-7cb5-46d9-b533-7165ec5cd9e9.png',
          company_id: 5,
        },

        {
          id: 33, 
          product_name: "Sumatran Sunrise AiroPro Vape Cartridge", 
          price: 90, 
          product_type: 'Concentrate', 
          image: 'https://images.weedmaps.com/photos/products/000/081/939/original/175782_AP-CK-AF-SUSU-S-00-O',
          company_id: 4,
        },

        {
          id: 34, 
          product_name: "Pomegranate Acai Tonic Drink", 
          price: 40, 
          product_type: 'Drink', 
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_c34c4e85-152a-49f3-a31a-e00666ef522b.png',
          company_id: 5,
        },

        {
          id: 35, 
          product_name: "Raspberry Lemonade Tonic Drink", 
          price: 40, 
          product_type: 'Drink', 
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/02/Tonic-Raspberry-Lemonade-2L-1-page-00',
          company_id: 5,
        },

        {
          id: 36, 
          product_name: "Raspberry Lemonade Tonic Drink", 
          price: 40, 
          product_type: 'Drink', 
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/02/Tonic-Raspberry-Lemonade-2L-1-page-00',
          company_id: 5,
        },

        {
          id: 37, 
          product_name: "Cucumber Watermelon Tonic Drink", 
          price: 40, 
          product_type: 'Drink', 
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/01/Tonic-Cucumber-Watermelon-1L-page-',
          company_id: 5,
        },

        {
          id: 38, 
          product_name: "Sojay Haze Pre-Rolled Joint", 
          price: 25, 
          product_type: 'Preroll', 
          image: 'https://leafly-production.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fleafly-images%2',
          company_id: 1,
        },

        {
          id: 39, 
          product_name: "Microdose Tablets", 
          price: 35, 
          product_type: 'Edible', 
          image: 'https://images.weedmaps.com/products/000/082/148/avatar/original/1583877412-Avexia_Tablets_Ascen',
          company_id: 3,
        },

      ]);
    });
};
