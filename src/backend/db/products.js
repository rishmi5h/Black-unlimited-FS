import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Slim Fit Jeans",
    brand: "Levis",
    price: 5099,
    mrp: 5999,
    category: "jeans",
    rating: 3.8,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16612782/2022/1/27/48ed0040-6121-42f3-8e69-c76b288e34ce1643281012724-Levis-Men-Black-65504-Redloop-Skinny-Fit-Stretchable-Jeans-7-1.jpg",
  },
  {
    _id: uuid(),
    name: "Light Fade Strechable Jeans",
    brand: "Levis",
    price: 2174,
    mrp: 2899,
    category: "jeans",
    rating: 4.7,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16323060/2022/1/4/8d4ae2c5-00ce-4e99-9721-6c9dea8a8c411641296669720-Levis-Men-Jeans-5291641296669166-1.jpg",
  },
  {
    _id: uuid(),
    name: "Buffalo Checked Cotton Casual Shirt",
    brand: "Levis",
    price: 1559,
    mrp: 2399,
    category: "shirts",
    rating: 4.5,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14851784/2021/8/23/bc11e542-a9d6-47ae-937b-f2f1b8f6eb081629721507621-Levis-Men-Shirts-2831629721507053-4.jpg",
  },
  {
    _id: uuid(),
    name: "Checked Cotton Casual Shirt",
    brand: "Levis",
    price: 1724,
    mrp: 2299,
    category: "shirts",
    rating: 4.5,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16343584/2021/12/17/811b59e3-3755-4fcb-9b85-c85caaf553b61639743964276-Levis-Men-Black--Pink-Checked--Pure-Cotton-Slim-Fit-Casual-S-1.jpg",
  },
  {
    _id: uuid(),
    name: "Black & Orange Round Neck Regular T-shirt",
    brand: "Levis",
    price: 1529,
    mrp: 1799,
    category: "t-shirts",
    rating: 4.7,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16803500/2022/1/27/b4bf60cf-df6d-49a6-a894-0e957e0f52d21643276181176-Levis-Men-Black--Orange-Brand-Logo-Printed-Round-Neck-Regula-1.jpg",
  },
  {
    _id: uuid(),
    name: "Men Black Pure Cotton Solid Denim Jacket",
    brand: "Levis",
    price: 3249,
    mrp: 4999,
    category: "jackets",
    rating: 4.1,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14851224/2021/7/30/61ce986c-9555-4706-b671-bd761b6641281627621586911-Levis-Men-Jackets-9291627621586243-1.jpg",
  },
  {
    _id: uuid(),
    name: "Straight Fit Mid-Rise Clean Look Stretchable Jeans",
    brand: "Calvin Klein Jeans",
    price: 5199,
    mrp: 7999,
    category: "jeans",
    rating: 4.2,
    img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12330244/2021/3/9/ff1f0fc3-35c8-42bb-8bee-94e809a753e41615266351486-Calvin-Klein-Jeans-Men-Black-Straight-Fit-Mid-Rise-Clean-Loo-2.jpg",
  },
  {
    _id: uuid(),
    name: "Typography Printed Casual Shirt",
    brand: "Calvin Klein Jeans",
    price: 5499,
    mrp: 7999,
    category: "shirts",
    rating: 4.7,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16408950/2022/1/31/c86b6dd5-5901-4ad3-8b87-ffebe42030541643627554407-Calvin-Klein-Jeans-Men-Shirts-5151643627553492-1.jpg",
  },
  {
    _id: uuid(),
    name: "Regular Fit Casual Denim Shirt",
    brand: "Calvin Klein Jeans",
    price: 3849,
    mrp: 5499,
    category: "shirts",
    rating: 4.4,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12313392/2021/3/5/40d2ed71-128d-4f34-a7d5-5272de71b1aa1614943237497-Calvin-Klein-Jeans-Men-Shirts-4561614943235387-1.jpg",
  },
  {
    _id: uuid(),
    name: "Solid Slim Fit Polo Collar T-shirt",
    brand: "Calvin Klein Jeans",
    price: 3599,
    mrp: 4799,
    category: "t-shirts",
    rating: 3.6,
    img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12318132/2020/9/21/69cb6b0a-ad35-49bf-8f36-75845a5c28a61600686298332-Calvin-Klein-Jeans-Men-Tshirts-5981600686296806-1.jpg",
  },
  {
    _id: uuid(),
    name: "Colourblocked T-shirt",
    brand: "Calvin Klein Jeans",
    price: 3299,
    mrp: 4199,
    category: "t-shirts",
    rating: 4.4,
    img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16405260/2021/12/29/9c58f29d-04d9-4136-b701-c8468b92f0d21640755564659-Calvin-Klein-Jeans-Men-Tshirts-4051640755564188-1.jpg",
  },
  {
    _id: uuid(),
    name: "Bomber Jacket",
    brand: "Calvin Klein Jeans",
    price: 5999,
    mrp: 9999,
    category: "jackets",
    rating: 3.6,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14591540/2021/9/18/18a9a9af-d9c3-409f-ba8d-d1301af949811631944427571-Calvin-Klein-Jeans-Men-Jackets-8131631944426907-3.jpg",
  },
  {
    _id: uuid(),
    name: "Slim Jeans",
    brand: "H&M",
    price: 1499,
    mrp: 1999,
    category: "jeans",
    rating: 4.5,
    img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16519026/2021/12/15/a4694bbe-7edf-40dd-878f-6c21405d58cd1639542261217SlimJeans1.jpg",
  },
  {
    _id: uuid(),
    name: "Regular Jeans",
    brand: "H&M",
    price: 1699,
    mrp: 2199,
    category: "jeans",
    rating: 4.3,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15193862/2021/8/19/6d3d17a8-8e7d-4606-a795-779f54e9a06f1629350038736RegularJeans1.jpg",
  },
  {
    _id: uuid(),
    name: "Printed Relaxed Fit Cotton Pure Cotton T-shirt",
    brand: "H&M",
    price: 1299,
    mrp: 1799,
    category: "t-shirts",
    rating: 4.3,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14927570/2021/7/24/97d0f5eb-26c0-4e21-b8d7-2c9d5d7095c11627145792389RelaxedFitT-shirt1.jpg",
  },
  {
    _id: uuid(),
    name: "Black & Green 2-pack Relaxed Fit Short-Sleeved Shirts",
    brand: "H&M",
    price: 1499,
    mrp: 1899,
    category: "shirts",
    rating: 3.3,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17125866/2022/2/10/7da31f4f-e108-4048-8307-59eba161a32d16445173066912-packRelaxedFitShort-sleevedshirts1.jpg",
  },
  {
    _id: uuid(),
    name: "Relaxed Fit Printed overshirt",
    brand: "H&M",
    price: 2699,
    mrp: 3499,
    category: "shirts",
    rating: 4.4,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16957406/2022/1/28/6f994806-d909-497f-bc0e-fa7d05dcf6291643345332020RelaxedFitPrintedovershirt1.jpg",
  },
  {
    _id: uuid(),
    name: "Quilted Shacket",
    brand: "H&M",
    price: 2999,
    mrp: 3899,
    category: "jackets",
    rating: 2.2,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17124820/2022/2/11/4efe3b0e-74d9-45b5-b388-98662247d64a1644573053667Quiltedshacket1.jpg",
  },
  {
    _id: uuid(),
    name: "Mid-Rise Clean Look Stretchable Jeans",
    brand: "Tommy Hilfiger",
    price: 4799,
    mrp: 5999,
    category: "jeans",
    rating: 4.2,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13870300/2021/4/7/6ef0534f-0472-40ab-a457-ded41684d62f1617774751705-Tommy-Hilfiger-Men-Jeans-3921617774750271-1.jpg",
  },
  {
    _id: uuid(),
    name: "Typography Printed Slim Fit T-shirt",
    brand: "Tommy Hilfiger",
    price: 2399,
    mrp: 2999,
    category: "t-shirts",
    rating: 4.2,
    img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16363924/2022/1/10/9fdeff97-2d51-4d45-9333-c7d8cc7232d81641810451944-Tommy-Hilfiger-Men-Tshirts-161641810451534-1.jpg",
  },
  {
    _id: uuid(),
    name: "Typography Printed Casual T-shirt",
    brand: "Tommy Hilfiger",
    price: 3999,
    mrp: 4599,
    category: "t-shirts",
    rating: 4.1,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16364610/2022/1/7/22852336-0842-4c47-813e-1cec82d57f941641555716400-Tommy-Hilfiger-Men-Tshirts-6901641555715934-1.jpg",
  },
  {
    _id: uuid(),
    name: "Perforated Solid Bomber Jacket",
    brand: "Tommy Hilfiger",
    price: 9749,
    mrp: 11999,
    category: "jackets",
    rating: 2.1,
    img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7453625/2018/9/29/828353e6-7bab-44da-a29f-27cfeceb9e191538218575600-Tommy-Hilfiger-Men-Black-Solid-Bomber-6831538218575376-1.jpg",
  },
];
