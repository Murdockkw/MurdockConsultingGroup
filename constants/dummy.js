import assets from "./assets";

const INFOData = [
  {
    id: "INFO-01",
    name: "Rental: 8974 Ringview",
    creator: "Murdock Consulting Group",
    price: 1850.00,
    description:
      "3 Bedroom, 2.5 Bathroom. Built 2018 in Hanover, Virginia. 1564 Sq Ft House, Parking Garage 200 SQ Ft. Great Location, Near 95 and 295.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 1900.00,
        image: assets.person02,
        date: "March 12, 2023 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 1850.00,
        image: assets.person03,
        date: "March 27, 2023 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 1800.00,
        image: assets.person04,
        date: "February 31, 2023 at 3:50 PM",
      },
    ],
  },
  {
    id: "INFO-02",
    name: "Pending Acquistion",
    creator: "Murdock Consulting Group",
    price: 0.00,
    description:
      "MCG is constantly looking to acquire new homes for our new clients to be selective with.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 0.00,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
];

export { INFOData };
