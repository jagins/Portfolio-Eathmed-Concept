/*NOTE MAY HAVE TO REDO THESE TABELS AGAIN MIGHT NEED A SIZE TO DETERMINE LEGAL PURCHASE*/
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
          thc_amount: 32.46,
          description: 'Pheno 51 is a hybrid strain bred by Cresco Labs. Created by crossing Star Killer and Skywalker OG, it was designed to help consumers leave the ground. This potent pairing leads with a happy, heady euphoria that jettisons the consumer away from mental and physical stress while dimming nagging aches and pains. Pheno 51 is the perfect strain for those looking to ignite creativity and bliss while leaving stress and nausea in a galaxy far, far away.',
          image: 'https://tinyurl.com/yyhnufga', 
          company_id: 1
        },

        { 
          product_name: 'Wintermint Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          thc_amount: 100,
          description: 'Many consumers appreciate the convenience and comfort of the MENTA product line. Made with green tea matcha (a great source of antioxidants) and pure honey, each mint contains 5mg of THC. Choose from our variety of flavors including Wintermint, Green Tea, Tangerine or Wildberry. Then just place one under the tongue to dissolve.',
          image: 'https://tinyurl.com/y3fasqzc', 
          company_id: 2
        },

        { 
          product_name: 'Wildberry Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          thc_amount: 100,
          description: 'Many consumers appreciate the convenience and comfort of the MENTA product line. Made with green tea matcha (a great source of antioxidants) and pure honey, each mint contains 5mg of THC. Choose from our variety of flavors including Wintermint, Green Tea, Tangerine or Wildberry. Then just place one under the tongue to dissolve.',
          image: 'https://tinyurl.com/yyqa6e2l',
          company_id: 2
        },

        {
          product_name: 'Tangerine 1:1 Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          thc_amount: 100,
          description: 'Many consumers appreciate the convenience and comfort of the MENTA product line. Made with green tea matcha (a great source of antioxidants) and pure honey, each mint contains 5mg of THC. Choose from our variety of flavors including Wintermint, Green Tea, Tangerine or Wildberry. Then just place one under the tongue to dissolve.',
          image: 'https://tinyurl.com/y4uzs3fe',
          company_id: 2
        },
        
        { 
          product_name: 'Green Tea Menta Mints', 
          price: 35, 
          product_type: 'Edible', 
          thc_amount: 100,
          description: 'Many consumers appreciate the convenience and comfort of the MENTA product line. Made with green tea matcha (a great source of antioxidants) and pure honey, each mint contains 5mg of THC. Choose from our variety of flavors including Wintermint, Green Tea, Tangerine or Wildberry. Then just place one under the tongue to dissolve.',
          image: 'https://tinyurl.com/y3l5dbk7', 
          company_id: 2,
        },

        {
          product_name: 'Espresso Beans Kiva Terra Bites', 
          price: 35, 
          product_type: 'Edible', 
          thc_amount: 95.67,
          description: `KIVA Terra Bites are crafted from micro-roasted Tanzanian coffee beans and coated in Kiva Dark Chocolate. With 5MG of THC per bite, Terra offers dosing that is as convenient as it is delicious. The reclosable container makes it easy to enjoy a little now, and with 100mg THC in each tin, a little later, too.
          All Natural Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Espresso Bean, Cannabis Extract, Confectioner's Glaze, Cocoa Powder, Natural Flavor.
          Allergy Warning: May Contain Traces of Nuts and Milk.`,
          image: 'https://tinyurl.com/yyzqrrfu', 
          company_id: 1,
        },

        {
          product_name: 'Botanical White Grapefruit Gummies', 
          price: 25, 
          product_type: 'Edible', 
          thc_amount: 40.44,
          description: 'Fresh and clean like a grapefruit cocktail. Sour and lip-smacking. Super juicy with an essence of gin botanicals. 40mg THC 20-packs, each piece = 2mg THC',
          image: 'https://tinyurl.com/y4fujdhe',
          company_id: 1,
        },

        {
          product_name: 'Freshly Picked Berries Gummies', 
          price: 25, 
          product_type: 'Edible', 
          thc_amount: 38.42,
          description: '',
          image: 'https://tinyurl.com/y3y5vtte',
          company_id: 1,
        },

        {
          product_name: 'CBD Cherry Lime Gummies', 
          price: 40, 
          product_type: 'Edible', 
          thc_amount: 1,
          description: `These Full Spectrum Gummies are some of the best on the market. We had resisted carrying gummies for a long time because the poor quality ingredients used - these gummies however are about as good as it gets!
          30 gummies per container and 10mg CBD per gummy, for a total of 300mg `,
          image: 'https://www.florasophiabotanicals.com/uploads/1/2/5/7/125701162/s346358801989309698_p21_i3_w2016.jpeg',
          company_id: 1,
        },

        {
          product_name: 'Watermelon Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 79.91,
          description: 'Watermelon is an all-around mystery, created from unknown parents in an anonymous breeder’s garden. It tastes and smells like sweet tropical fruit with an earthy background, according to Pacific Seed Bank. The cultivar also reportedly tests at an average of 17% THC and 3-10% CBD.',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Strawberry Cough Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 75.52,
          description: `Strawberry Cough’s story begins with breeder and former High Times cultivation editor Kyle Kushman, who claims to have sourced the clone-only strain — reportedly a cross of Haze and Strawberry Fields — from a novice grower in Connecticut. The grower gave Kushman a tiny Strawberry Cough clone from his small basement garden. Kushman accepted the clone, mostly for the sake of politeness, and nearly threw it away before he noticed an overwhelming smell of fresh strawberries emanating from the clone. Kushman decided to keep the strain and began to share it freely among New York growers.
          Strawberry Cough became the number one selling strain amongst delivery services in the New York area. When Kushman moved to California to grow cannabis legally, he continued to share Strawberry Cough cuttings across the country. As a result, several Strawberry Cough strains and imitators have sprung up from other cultivators. He teamed up with Tyler Wadleigh and Aaron Justis of Los Angeles dispensary Buds & Roses Collective in 2009, and continues to release Strawberry Cough through their storefront.`,
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Jack Herer Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 70,
          description: `Named after the late, legendary cannabis activist and author of the 1985 book “The Emperor Wears No Clothes,” Jack Herer has achieved a lofty, heavily proliferated status among modern cannabis strains. Its flavor is reportedly a composite of citrus, pine, wood and spice.
          This creation from Dutch seed bank Sensi Seeds won 9 first-place High Times Cannabis Cup awards, and is a frequently used parent strain for new hybrids.
          Its lineage remains unconfirmed, but it’s generally thought to be a complex hybrid of Northern Lights #5, Shiva Skunk and Haze.`,
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Ghost Train Haze Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 500,
          description:`'A local seed company out of Colorado called Rare Dankness created Ghost Train Haze. The mother of this cross is the legendary Ghost OG, regarded by some as the original OG Kush, and mother to elite genetics such as Bruce Banner No.3 and Banana Kush. The father to this cross is Nevils Wreck, which pairs Arcata Trainwreck to Nevil Schoenmakers Haze.
          Mr. Schoenmakers is the creator of Haze. He opened the first ever seed company, The Seed Bank of Holland, and he is considered the founder of modern day cannabis breeding.
          Ghost Train Haze creates a strong euphoria and heightened color perception with the sweeping cerebral relaxation of its Ghost OGinfluence. Flavors include overripe pineapple, fresh stretched leather, lime and Christmas spices.`,
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'Berry Gelato Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 85.81,
          description: 'Gelato #33 and Sorbet come together to create Gelato Sorbet by DNA genetics as part of their Sorbet lineup. Producing colorful buds that range in color from light green to purple while putting off a tasty dank and fruity profile, Gelato Sorbet’s high is mellow and easy, leaving smokers with a strong sense of contentment.',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'G6 Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 81.20,
          description: 'Jet Fuel, also known as G6, from 303 Seeds is the ultimate cross of some of the most renowned Diesel strains. By combining Aspen OG with High Country Diesel, we are left with a hybrid that stays true to the influence of SFV OG Kush and East Coast Sour Diesel in its lineage. The name Jet Fuel isn’t purely devoted to the sweet, pungent aroma of diesel fumes that this strain exudes, but also the high-energy jolt of uplifting effects that eventually level off to provide a dream-like state of relaxation.',
          image: 'https://tinyurl.com/yxrmj246',
          company_id: 2,
        },

        {
          product_name: 'GG #4 Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 72.72,
          description: 'GG #4 is a potent indica strain that delivers heavy-handed euphoria and relaxation. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas. Ideal for pain relief, this strain has a soft onset with strong physical relaxing effects.',
          image: 'https://tinyurl.com/y32rtjq6',
          company_id: 1,
        },

        {
          product_name: 'Lime Sorbet Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 80,
          description: `Lime Sorbet is the descendant of the storied Katsu cultivar of Bubba Kush and Lime Skunk. Blending these distinct strains produced a remarkable phenotype that is exceptional in flavor and versatile in effect. This indica-leaning hybrid has a pungent earthy aroma intermixed with the tart, fresh flavor of lime that lingers on the exhale. Lime Sorbet's Kush parentage lends this strain pleasant physical relaxation while subduing both anxiety and stress.`,
          image: 'https://cdn.greenrush.com/media/0/5/6/7634056/c/large.jpg',
          company_id: 1,
        },

        {
          product_name: 'Island Sweet Skunk Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 83.59,
          description: `Island Sweet Skunk (Sativa)
          Boasting a mentally relaxing effect, this strain provides stress relief and promotes a sense of calm. This strain can engage imaginations and inspire the ability to be creative and focused. With a grapefruit-esque fruity scent, with a sweet skunk overtone. A special combination of sweetness, skunky, and tropically citrus notes combine to make a beautiful scent. Has the flavor of a sweet tropical fruity drink spiked with skunk.`,
          image: 'https://tinyurl.com/y5gm3m57',
          company_id: 1,
        },

        {
          product_name: 'Durban Poison Liquid Live Resin Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 80,
          description: `500mg Rise liquid live resin (LLR) cartridge. Crafted from premium fresh frozen flower, this butane-extracted oil is pure, high terpene, full spectrum cannabis, providing maximum aroma, potency, and flavor.
          Our liquid live resins do not contain any distillate or fillers - ever.`,
          image: 'https://tinyurl.com/y6rzdh3s',
          company_id: 1,
        },

        {
          product_name: 'Green Line OG Liquid Live Resin Disposable Pen', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 80,
          description: 'One of our most popular strains, Green Line OG is the cherished offspring of Lime Skunk and Ghost OG. Inheriting both the uplifting nature of its Lime Skunk father and the physical efficacy of its OG mother, Green Line OG delivers equal mental clarity and physical comfort with citrusy, earthy, sweet flavors that transport you into sweet bliss.',
          image: 'https://tinyurl.com/y4kxpxp6',
          company_id: 1,
        },

        {
          product_name: 'Island Sweet Skunk Liquid Live Resin Disposable Pen', 
          price: 85, 
          product_type: 'Concentrate',
          thc_amount: 83.59,
          description: `Island Sweet Skunk (Sativa)
          Boasting a mentally relaxing effect, this strain provides stress relief and promotes a sense of calm. This strain can engage imaginations and inspire the ability to be creative and focused. With a grapefruit-esque fruity scent, with a sweet skunk overtone. A special combination of sweetness, skunky, and tropically citrus notes combine to make a beautiful scent. Has the flavor of a sweet tropical fruity drink spiked with skunk.`, 
          image: 'https://tinyurl.com/y4kxpxp6',
          company_id: 1,
        },

        {
          product_name: 'Midnight Moon AiroPro Vape Cartridge', 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 78,
          description: 'AiroPro’s Midnight Moon vape cartridge has a subtly soapy flavor of berries, but it’s bound to lull you to sleep. It doesn’t always provide a potently psychoactive high, but it can cure a foul mood and leave you sunken into the couch. It can feel like an out-of-body experience for some or a full-on tranquilizer to others. Either way, it’s going to bring your night to a comfortable close.',
          image: 'https://tinyurl.com/y54zyu7f',
          company_id: 3,
        },

        {
          product_name: 'Clementine AiroPro Vape Cartridge', 
          price: 90, 
          product_type: 'Vape', 
          thc_amount: 78,
          description: 'A cross between Tangie and Lemon Skunk, Clementine is a sativa-dominant strain produced by Crockett Family Farms, a family-run cannabis genetics company based in the Central Coast of California. The breeder’s Clementine Live Resin won first place for best sativa concentrate at the 2015 High Times Cannabis Cup in Michigan.',
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_957ddd9d-f419-4197-a3e8-6d87f32113c3.jpg',
          company_id: 3,
        },

        {
          id: 26, 
          product_name: 'Mystical Melody AiroPro Vape Cartridge', 
          price: 90, 
          product_type: 'Vape', 
          thc_amount: 82,
          description: 'This hybrid cartridge has a very citrusy flavor combining raspberry, lime, and tangerine. It combines the best of both highs, giving you both cheerful and rejuvenating mental effects, while also blanketing you in soothing body effects.',
          image: 'https://uploads.iheartjane.com/uploads/ae0b6bc6-1471-44c7-9903-f03aed274088.jpg',
          company_id: 3,
        },

        {
          product_name: "L' Orange Double Barrell Single", 
          price: 85, 
          product_type: 'Vape', 
          thc_amount: 65.75,
          description: `Sherbinskis’ L'Orange Double Barrel is a sweet, creamy vape pen that delivers a smooth hit and a focused head high. The body buzz does well to compliment the motivated mindset, so go get a few things crossed off your to-do list.`,
          image: 'https://tinyurl.com/yy7fg27w',
          company_id: 3,
        },


        {
          product_name: "Mandarin Orange Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          thc_amount: 97.2,
          description: 'The Mandarin Orange Tonic is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! Each bottle of the Tonic infused beverage has 100mg THC that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://rec.herbalremediesil.com/wp-content/uploads/2019/12/Tonic-Mandarin-Orange-1L-page-001.jpg',
          company_id: 4,
        },

        {
          product_name: "100MG CBD / 100MG THC Tropical Punch 1:1 Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          thc_amount: 97.72,
          description: 'The Tropical Punch Tonic is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! This bottle of the Tonic infused beverage has 100mg THC and 100mg CBD that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_990b969b-7cb5-46d9-b533-7165ec5cd9e9.png',
          company_id: 4,
        },

        {
          product_name: "Sumatran Sunrise AiroPro Vape Cartridge", 
          price: 90, 
          product_type: 'Vape', 
          thc_amount: 74.89,
          description: 'Caliva’s Sumatran Sunrise AiroPro is a battery-specific vape cartridge with a sweet citrus flavor. The high is often focused￼ With a buzz in the body, so use this time to get shit done. Expect it to be head-heavy￼ and complementary of your morning cup of coffee.￼',
          image: 'https://tinyurl.com/yxhapdtz',
          company_id: 3,
        },

        {
          product_name: "Pomegranate Acai Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          thc_amount: 97.2,
          description: 'The Pomegranate Acai Tonic is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! Each bottle of the Tonic infused beverage has 100mg THC that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://uploads.iheartjane.com/uploads/extraLarge_c34c4e85-152a-49f3-a31a-e00666ef522b.png',
          company_id: 4,
        },

        {
          product_name: "Raspberry Lemonade Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          thc_amount: 97.2,
          description: 'The Raspberry Lemonade is a wonderfully cannabis infused drink designed for fast acting effects due to its liquid form and sublingual absorption. If you struggle to get relief or effects from edibles this tonic beverage could be your magic elixir! Each bottle of the Tonic infused beverage has 100mg THC that can be absorbed more easily than a traditional solid edible. There are tic markers on the bottle that allow you to control your dosage. For the best experience, shake well and refrigerate or pour over ice before consuming. Refrigerate after opening.',
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/02/Tonic-Raspberry-Lemonade-2L-1-page-00',
          company_id: 4,
        },

        {
          product_name: "Cucumber Watermelon Tonic Drink", 
          price: 40, 
          product_type: 'Beverage', 
          thc_amount: 97.2,
          description: 'Relax and melt pain with a nice refreshing drink! These 100mg drinks come in a variety of flavors, and have dosage marks on the side to help you dose effectively. Refrigerate after opening, and medicate responsibly.',
          image: 'https://shop.herbalremediesil.com/wp-content/uploads/2020/01/Tonic-Cucumber-Watermelon-1L-page-',
          company_id: 4,
        },

        {
          product_name: "Sojay Haze Pre-Rolled Joint", 
          price: 25, 
          product_type: 'Preroll', 
          thc_amount: 24.353,
          description: 'Highlighted by an intense flavor and profound cerebral effects, this strain will provide a spark of energy and minimize body fatigue. This is a great strain to fight off depression and to help patients stay active. An amazing combination of tropically sweet flavors mixed with pungent tones of citrus and fresh plums. Exuding waves of sweet scents this skunky zesty blast is sure to invigorate patients’ sense of smell. Symptoms treated: stress, depression, chronic pain, muscle spasms, and headaches.',
          image: 'https://tinyurl.com/y526bt5m',
          company_id: 1,
        },

      ]);
    });
};
