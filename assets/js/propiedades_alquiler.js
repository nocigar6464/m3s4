// construcción de la card
const renderCard = (leaseData) => {
  return `
        <div class="col-md-4 md-4">
          <div class="card">
            <img src="${
              leaseData.pic
            }" class="card-img-top" alt="Imagen del lugar" />
            <div class="card-body">
              <h5 class="card-title">${leaseData.name}</h5>
              <p class="card-text">${leaseData.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i>${leaseData.address}</p>
              <p><i class="fas fa-bed"></i>${
                leaseData.beds
              } <i class="fas fa-bath"></i>${leaseData.bath}</p>
              <p><i class="fas fa-dollar-sign"></i>${leaseData.cost}</p>
              ${
                leaseData.smoke
                  ? '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
                  : '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
              }
              ${
                leaseData.pets
                  ? '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
                  : '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
              }
            </div>
          </div>
        </div>`;
};

const someElementFromHtml = document.getElementById("card-lease");

// construcción de la BBDD de ventas
const leaseData = [
  {
    pic: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    name: "Apartamento en el centro de la ciudad",
    descripcion:
      " Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    address: "Main Street, Anytown, CA 91234",
    beds: "2 Habitaciones",
    cost: 2.0,
    smoke: false,
    pets: true,
  },
  {
    pic: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Apartamento luminoso con vista al mar",
    descripcion:
      " Este hermoso apartamento ofrece una vista impresionante al mar",
    address: "456 Ocean Avenue, Seaside Town, CA 56789",
    beds: "3 Habitaciones",
    cost: 2.5,
    smoke: true,
    pets: true,
  },
  {
    pic: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    name: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila",
    address: "123 Main Street,Anytown, CA 91234",
    beds: "2 Habitaciones",
    cost: 2.2,
    smoke: false,
    pets: false,
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
leaseData.forEach((item) => {
  someElementFromHtml.innerHTML += renderCard(item);
});

leaseData.forEach((val) => {
  if (val.smoke !== false) {
    document.getElementById("smoke").style.color = "red";
  } else {
    document.getElementById("smoke").style.color = "green";
  }
});
