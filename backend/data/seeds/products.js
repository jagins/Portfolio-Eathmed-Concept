/*NOTE MAY HAVE TO REDO THESE TABELS AGAIN MIGHT NEED A SIZE TO DETERMINE LEGAL PURCHASE*/
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          product_name: 'CG #4 Flower 3.5g', 
          price: 63.49, 
          product_type: 'Flower', 
          thca: 23.46,
          cbd: 0.07,
          size: 3.5,
          strain_type: 'Indica',
          description: 'GG #4 is a potent indica strain that delivers heavy-handed euphoria and relaxation. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas. Ideal for pain relief, this strain has a soft onset with strong physical relaxing effects.',
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/Pb2XsWR3TmCUlkkQjc8Y_Cresco_3_5g_Flower_Indica-01.jpg', 
          company_id: 1
        },

        {
          product_name: 'Green Line OG Flower 3.5g',
          price: 63.49,
          product_type: 'Flower',
          thca: 17.71,
          cbd: 0.06,
          size: 3.5,
          strain_type: 'Hybrid',
          description: 'Green Line OG is the cherished offspring of Lime Skunk and Ghost OG. Notes of sweet citrus meet earthy pine, putting a refreshing twist on the prolific OG Kush strain. Inheriting both the uplifting nature of its Lime Skunk father and the physical efficacy of its OG mother, Green Line OG delivers equal mental clarity and physical comfort. Whatever your symptoms, Green Line OG will get you where you need to be, day or night',
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/fcBsyoK0SaO7xTOAYikA_Cresco_3_5g_Flower_Hybrid-01.jpg',
          company_id: 1
        },

        {
          product_name: 'Outer Space 3.5g',
          price: 67.46,
          product_type: 'Flower',
          thca: 17.63,
          cbd: 0,
          size: 3.5,
          strain_type: 'Sativa',
          description: 'Outer Space is a sativa-dominant strain that is a cross of Island Sweet Skunk and Trinity and is known for cerebral and creative effects. It has a citrusy odor that is strong and produces a flavorful smoke. Great as a daytime medicine.',
          image: 'https://s3-us-west-2.amazonaws.com/leafly-images/products/photos/GZtdr43zQEGcbT0SCpLA_Cresco_3_5g_Flower_Sativa-01.jpg',
          company_id: 1
        },

        { 
          product_name: 'Harmony 1:1 Milk Chocolate Multi-Pack 100mg', 
          price: 33.09, 
          product_type: 'Edible', 
          thca: 100,
          cbd: 100,
          size: 100,
          image: 'https://lh3.googleusercontent.com/proxy/OfVBA0w21F4gU2Cs5JYy2WC6GGPypFuo3ejIUl3eNhTfokfakz7bt77TV5PvLz9t5Zb0tntRHnug9I2GiX3b6GL8AAsvVQXk-8FJ6aqVFDrhNaPtRb033oOqMbU', 
          strain_type: 'Hyrbid',
          company_id: 2
        },

        { 
          product_name: 'Sweet Grape Gummy Mult-Pack 100mg', 
          price: 33.09, 
          product_type: 'Edible', 
          thca: 100,
          cbd: 0,
          size: 100,
          image: 'https://images.potster.com/0decb6f4-3033-48cc-b987-be0ee5f856a7/350x350.jpg',
          strain_type: 'Hybrid',
          company_id: 2
        },

        {
          product_name: 'Espresso Beans Kiva Terra Bites', 
          price: 33.09, 
          product_type: 'Edible', 
          strain_type: 'Hybrid',
          thca: 100,
          cbd: 0,
          size: 100,
          description: `KIVA Terra Bites are crafted from micro-roasted Tanzanian coffee beans and coated in Kiva Dark Chocolate. With 5MG of THC per bite, Terra offers dosing that is as convenient as it is delicious. The reclosable container makes it easy to enjoy a little now, and with 100mg THC in each tin, a little later, too.
          All Natural Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Espresso Bean, Cannabis Extract, Confectioner's Glaze, Cocoa Powder, Natural Flavor.
          Allergy Warning: May Contain Traces of Nuts and Milk.`,
          image: 'https://tinyurl.com/yyzqrrfu', 
          company_id: 1,
        },

        {
          product_name: 'Botanical White Grapefruit Gummies 40mg', 
          price: 25, 
          product_type: 'Edible', 
          thca: 40,
          cbd: 0,
          size: 40,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/y4fujdhe',
          company_id: 1,
        },

        {
          product_name: 'Freshly Picked Berries Gummies 40mg 20ct', 
          price: 18.38, 
          product_type: 'Edible', 
          thca: 40,
          cbd: 0,
          size: 40,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/y3y5vtte',
          company_id: 1,
        },

        {
          product_name: 'Watermelon Vape Pen Cartridge .5g', 
          price: 56.74, 
          product_type: 'Vape', 
          thca: 79.91,
          cbd: 1.26,
          size: 500,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Strawberry Cough Vape Pen Cartridge .5g', 
          price: 56.74, 
          product_type: 'Vape', 
          thca: 80.21,
          cbd: 0.26,
          size: 500,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Coma Cannabis Vape Pen Cartridge .5g', 
          price: 56.74, 
          product_type: 'Vape', 
          thca: 56.74,
          cbd: 0,
          size: 500,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Lemoncake Vape Pen Cartridge .5g', 
          price: 56.74, 
          product_type: 'Vape', 
          thca: 86.45,
          cbd: 0.14,
          size: 500,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Berry Gelato Vape Pen Cartridge .5g', 
          price: 58.82, 
          product_type: 'Vape', 
          thca: 85.81,
          cbd: 0.20,
          size: 500,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'G6 Vape Pen Cartridge .5g', 
          price: 63.83, 
          product_type: 'Vape', 
          thca: 81.20,
          cbd: 0.31,
          size: 500,
          strain_type: 'Hybrid',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'GG #4 Liquid Live Resin Vape Cartridge .5g', 
          price: 60.28, 
          product_type: 'Vape', 
          thca: 74.22,
          cbd: 0,
          strain_type: 'Indica',
          size: 500,
          image: 'https://tinyurl.com/y32rtjq6',
          company_id: 1,
        },

        {
          product_name: 'Bio Jesus x CG4 Liquid Resin Cartridge .5g', 
          price: 60.28, 
          product_type: 'Vape', 
          thca: 88.97,
          cbd: 0,
          size: 500,
          strain_type: 'Hybrid',
          image: 'https://cdn.greenrush.com/media/0/5/6/7634056/c/large.jpg',
          company_id: 1,
        },

        {
          product_name: 'Island Sweet Skunk x GG4 Liquid Live Resin Cartridge .5g', 
          price: 60.28, 
          product_type: 'Vape', 
          strain_type: 'Indica',
          thca: 80.4,
          cbd: 0,
          size: 500,
          image: 'https://tinyurl.com/y5gm3m57',
          company_id: 1,
        },

        {
          product_name: 'Forbidden Fruit Vape Cartridge .5g',
          price: 60.28,
          size: 500,
          thca: 85.7,
          cbd: 0,
          product_type: 'Vape',
          strain_type: 'Hybrid',
          cbd: 0.16,
          image: 'https://uploads.iheartjane.com/uploads/1a7fabda-7bb6-40f6-abeb-a05413226892.jpg',
          company_id: 3
        },

        {
          product_name: 'Stawberry Fields Vape Cartridge .5g',
          price: 60.28,
          size: 500,
          thca: 85.64,
          cbd: 0,
          strain_type: 'Hybrid',
          product_type: 'Vape',
          cbd: 0.14,
          image: 'https://uploads.iheartjane.com/uploads/1a7fabda-7bb6-40f6-abeb-a05413226892.jpg',
          company_id: 3
        },

        {
          product_name: 'Tropicana Cookies Vape Cartridge .5g',
          price: 60.28,
          size: 500,
          thca: 88.15,
          cbd: 0,
          strain_type: 'Hybrid',
          product_type: 'Vape',
          cbd: 0.13,
          image: 'https://uploads.iheartjane.com/uploads/1a7fabda-7bb6-40f6-abeb-a05413226892.jpg',
          company_id: 3
        },

        {
          product_name: "Mandarin Orange Tonic Drink", 
          price: 25.74, 
          product_type: 'Beverage', 
          strain_type: 'Hybrid',
          thca: 100,
          cbd: 0,
          size: 100,
          description: 'The Mandarin Orange Tonic is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! Each bottle of the Tonic infused beverage has 100mg THC that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://rec.herbalremediesil.com/wp-content/uploads/2019/12/Tonic-Mandarin-Orange-1L-page-001.jpg',
          company_id: 4,
        },

        {
          product_name: "100MG CBD / 100MG THC Tropical Punch 1:1 Tonic Drink", 
          price: 25.74, 
          product_type: 'Beverage', 
          strain_type: 'Hyrbid',
          thca: 100,
          cbd: 100,
          size: 100,
          description: 'The Tropical Punch Tonic is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! This bottle of the Tonic infused beverage has 100mg THC and 100mg CBD that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_990b969b-7cb5-46d9-b533-7165ec5cd9e9.png',
          company_id: 4,
        },

        {
          product_name: "Sumatran Sunrise AiroPro Vape Cartridge", 
          price: 90, 
          product_type: 'Vape', 
          strain_type: 'Hybrid',
          thca: 74.89,
          cbd: 0,
          size: 500,
          description: 'Caliva’s Sumatran Sunrise AiroPro is a battery-specific vape cartridge with a sweet citrus flavor. The high is often focused￼ With a buzz in the body, so use this time to get shit done. Expect it to be head-heavy￼ and complementary of your morning cup of coffee.￼',
          image: 'https://tinyurl.com/yxhapdtz',
          company_id: 3,
        },

        {
          product_name: "Pomegranate Acai Tonic Drink", 
          price: 25.74, 
          product_type: 'Beverage', 
          strain_type: 'Hyrbrid',
          thca: 100,
          cbd: 0,
          size: 100,
          description: 'The Pomegranate Acai Tonic is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! Each bottle of the Tonic infused beverage has 100mg THC that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_c34c4e85-152a-49f3-a31a-e00666ef522b.png',
          company_id: 4,
        },

        {
          product_name: "Raspberry Lemonade Tonic Drink", 
          price: 25.74, 
          product_type: 'Beverage', 
          strain_type: 'Hybrid',
          thca: 100,
          cbd: 0,
          size: 100,
          description: 'The Raspberry Lemonade is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! Each bottle of the Tonic infused beverage has 100mg THC that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/02/Tonic-Raspberry-Lemonade-2L-1-page-00',
          company_id: 4,
        },

        {
          product_name: "Cucumber Watermelon Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          strain_type: 'Hybrid',
          thca: 100,
          cbd: 0,
          size: 100,
          description: 'Relax and melt pain with a nice refreshing drink! These 100mg drinks come in a variety of flavors, and have dosage marks on the side to help you dose effectively. Refrigerate after opening, and medicate responsibly.',
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/01/Tonic-Cucumber-Watermelon-1L-page-',
          company_id: 4,
        },

        {
          product_name: "Cookies Grenadine Preroll 1g", 
          price: 31.75, 
          product_type: 'Preroll', 
          thca: 18.56,
          cbd: 0,
          size: 1,
          strain_type: 'Hybrid',
          image: 'https://s3-us-west-2.amazonaws.com/prod-secure-cresco-uploads/6ffb60d7-60cd-48da-b516-7fc35deecbee.jpg',
          company_id: 3,
        },

      ]);
    });
};
