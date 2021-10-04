module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    await db.collection('products').insertMany(
      [
        {
          "_id": 13,
          "description": "Cable Repuesto Cargador Macbook Air Pro Magsafe 1 Y 2 ",
          "price": 1890,
          "stock": 10,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_990177-MLA46926485597_072021-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_990177-MLA46926485597_072021-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_990177-MLA46926485597_072021-V.webp",
        },
        {
          "_id": 14,
          "description": "Apple MacBook Pro (13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM) - Gris espacial",
          "price": 286128,
          "stock": 2,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_756770-MLA45795181650_052021-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_756770-MLA45795181650_052021-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_756770-MLA45795181650_052021-V.webp",
        },
        {
          "_id": 15,
          "description": "MacBook Air A1466 plata 13.3\", Intel Core i5 5350U  8GB de RAM 128GB SSD, Intel HD Graphics 6000 1440x900px macOS",
          "price": 154999,
          "stock": 5,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_722803-MLA42901955282_072020-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_722803-MLA42901955282_072020-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_722803-MLA42901955282_072020-V.webp",
        },
        {
          "_id": 16,
          "description": "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial",
          "price": 172276,
          "stock": 5,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-V.webp",
        },
        {
          "_id": 17,
          "description": "Apple Magic Mouse 2 Plata",
          "price": 12491,
          "stock": 15,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_856166-MLA46403910103_062021-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_856166-MLA46403910103_062021-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_856166-MLA46403910103_062021-V.webp",
        },
        {
          "_id": 18,
          "description": "Notebook Apple Macbook Pro 13'' 8 Core M1 Chip 512gb Ssd",
          "price": 272999,
          "stock": 5,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_966675-MLA46335561609_062021-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_966675-MLA46335561609_062021-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_966675-MLA46335561609_062021-V.webp",
        },
        {
          "_id": 19,
          "description": "New Macbook Pro Retina 2020 Touchbar I5 8gb Garantía Factura",
          "price": 249999,
          "stock": 5,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_773077-MLA46292880505_062021-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_773077-MLA46292880505_062021-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_773077-MLA46292880505_062021-V.webp",
        },
        {
          "_id": 20,
          "description": "Apple Macbook Pro 13,31 Mwp52le/a I5 Gen10 16gb Tb Ssd",
          "price": 390999,
          "stock": 5,
          "imageUrlSm": "https://http2.mlstatic.com/D_NQ_NP_713916-MLA43703429895_102020-V.webp",
          "imageUrlMd": "https://http2.mlstatic.com/D_NQ_NP_713916-MLA43703429895_102020-V.webp",
          "imageUrlLg": "https://http2.mlstatic.com/D_NQ_NP_713916-MLA43703429895_102020-V.webp",
        },
       
      ]
    );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('products').deleteMany(
      { "_id": { $in: [ 13,14,15,16,17,18,19,20 ] } }
    );
  }
};
