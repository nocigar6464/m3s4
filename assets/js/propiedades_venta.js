// construcción de la card
const renderCard = (salesData) => {
  return `
      <div class="col-md-4 md-4">
        <div class="card">
          <img src="${
            salesData.pic
          }" class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
            <h5 class="card-title">${salesData.name}</h5>
            <p class="card-text">${salesData.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i>${salesData.address}</p>
            <p><i class="fas fa-bed"></i>${
              salesData.beds
            } <i class="fas fa-bath"></i>${salesData.bath}</p>
            <p><i class="fas fa-dollar-sign"></i>${salesData.cost}</p>
            ${
              salesData.smoke
                ? '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                : '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
            }
            ${
              salesData.pets
                ? '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
                : '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
            }
          </div>
        </div>
      </div>`;
};

const someElementFromHtml = document.getElementById("card-parent");

// construcción de la BBDD de ventas
const salesData = [
  {
    pic: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    name: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    address: "123 Luxury Lane, Prestige Suburb, CA 45678",
    beds: "4 Habitaciones",
    bath: "3 baños",
    cost: 5000,
    smoke: false,
    pets: true,
  },
  {
    pic: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    name: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    address: "789 Mountain Road,Summit Peaks, CA 23456",
    beds: "2 Habitaciones",
    bath: "1 baño",
    cost: 1200,
    smoke: true,
    pets: true,
  },
  {
    pic: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    name: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    address: "567 Skyline Avenue, Skyview City, CA 56789",
    beds: "3 Habitaciones",
    bath: "1 baño",
    cost: 4500,
    smoke: false,
    pets: true,
  },
  {
    pic: "https://photos.zillowstatic.com/fp/b31a7f2b1f5955fd479547cfd23557eb-cc_ft_1536.webp",
    name: "Nestled into the mountainside at the base of Monitor Bowl",
    descripcion:
      "Presenting ''Monitor's Rest'', winner of the distinguished Robb Report Best of the Best award for 'Best Amenities",
    address: "253 White Pine Canyon Rd, Park City, UT 84060",
    beds: "6 Habitaciones",
    bath: "10 baños",
    cost: 50000000,
    smoke: true,
    pets: true,
  },
  {
    pic: "https://photos.zillowstatic.com/fp/4f4c45cf7772bebd57a5623ac5cb7dc4-cc_ft_1536.webp",
    name: "Located within the exclusive gated community of The Colony at White Pine Canyon",
    descripcion:
      "the home is surrounded by mature pine trees and tall aspens, offering ultimate privacy and direct ski access to the slopes",
    address: "117 White Pine Canyon Rd, Park City, UT 84060",
    beds: "6 Habitaciones",
    bath: "10 baños",
    cost: 25000000,
    smoke: true,
    pets: true,
  },
  {
    pic: "https://photos.zillowstatic.com/fp/3585d237f4cf700d7d1a2d33903198d3-cc_ft_1536.webp",
    name: "Nestled within the tranquil gates of the Colony at White Pine Canyon",
    descripcion:
      " This haven, more than just a residence, is a cherished retreat, an idyllic second ski home where families come together to craft cherished memories season after season",
    address: "160 White Pine Canyon Rd, Park City, UT 84060",
    beds: "8 Habitaciones",
    bath: "10 baños",
    cost: 10950000,
    smoke: true,
    pets: true,
  },
  {
    pic: "https://photos.zillowstatic.com/fp/39daa13261db47effa9c5e8ede2df8be-cc_ft_1536.webp",
    name: "This meticulously restored 1926 Spanish house in the Franklin Hills",
    descripcion:
      "Andalusian tiles, Moorish lanterns, built-in alcoves, glass doorknobs, arched windows, black iron railings",
    address: "1721 Sanborn Ave, Los Angeles, CA 90027",
    beds: "2 Habitaciones",
    bath: "2 baños",
    cost: 1695000,
    smoke: false,
    pets: true,
  },
  {
    pic: "https://photos.zillowstatic.com/fp/84c1b494281caf1dd2e2b367c97be200-cc_ft_1536.webp",
    name: " waterfront estate nestled in a secluded cove in Nanoose Bay",
    descripcion:
      "Exquisite property, 4.25 acres includes the main house, detached games room, cottage and large shop",
    address: "1667 Stroulger Rd, Nanoose Bay, BC V9P 9C4",
    beds: "3 Habitaciones",
    bath: "3 baños",
    cost: 5000000,
    smoke: false,
    pets: true,
  },
];

// Ejemplo de uso
salesData.forEach((item) => {
  someElementFromHtml.innerHTML += renderCard(item);
});

salesData.forEach((val) => {
  if (val.smoke !== false) {
    document.getElementById("smoke").style.color = "red";
  } else {
    document.getElementById("smoke").style.color = "green";
  }
});
