// Image overrides for FakeStore API products that have incorrect/mismatched images.
// Keys are product IDs from the API. Values are correct image URLs from Pexels.
export const imageOverrides = {
  // ID 1: Fjallraven Foldsack - listed as "men's clothing" but image is a backpack.
  // Replacing with a proper men's jacket image.
  1: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ID 2: Mens Casual Premium Slim Fit T-Shirts - image quality is fine, no override needed

  // ID 3: Mens Cotton Jacket - original API image is fine

  // ID 4: Mens Casual Slim Fit - original API image is fine

  // ID 5: John Hardy Women's Legends Naga Gold Dragon Bracelet - API image ok

  // ID 6: Solid Gold Petite Micropave Ring - API image ok

  // ID 7: White Gold Plated Princess Cut Diamond Stud Earrings - API image ok

  // ID 8: Pierced Owl Rose Gold Plated Stainless Steel Double Flared Earrings - API image ok

  // ID 9: WD 2TB Elements Portable External Hard Drive - API image ok

  // ID 10: SanDisk SSD PLUS 1TB - API image ok

  // ID 11: Silicon Power 256GB SSD - API image ok
  11: "https://images.pexels.com/photos/4597742/pexels-photo-4597742.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ID 12: WD 4TB Gaming Drive - API image ok

  // ID 13: Acer SB220Q - API image ok
  13: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ID 14: Samsung 49 Inch Curved Monitor - looks like a monitor image ok

  // ID 15: BIYLACLESEN Men's Fleece Jacket Coat - API image is actually of a backpack, not a jacket.
  15: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ID 18: MBJ Women's Solid Short Sleeve Boat Neck V Back T-Shirt - backpack image shown
  18: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ID 19: Opna Women's Short Sleeve Moisture Tuning Shirt - backpack image shown
  19: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=600",

  // ID 20: DANVOUY Women Casual T-Shirt - backpack image shown
  20: "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&w=600",
};
