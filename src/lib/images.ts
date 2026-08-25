/**
 * Free stock photography (Pexels license — free to use, no attribution required).
 * All people shown are Black African, matching Ivatech's Dar es Salaam operations.
 */
const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Hero / page banners — engineer in PPE against the sky
export const heroImage = px(14875937, 1600);

// About — field engineer reviewing plans
export const aboutImage = px(11174201, 1200);

// Project / portfolio imagery
export const portfolio1 = px(442154, 1000); // network rack maintenance
export const portfolio2 = px(4469300, 1000); // site technician
export const portfolio3 = px(5298215, 1000); // installation crew on site
export const portfolio4 = px(33658803, 1000); // metal & fabrication works
export const portfolio5 = px(8487795, 1000); // engineer in safety gear
export const portfolio6 = px(6893933, 1000); // operations office

// Client testimonials — real human faces
export const testimonial1 = px(6757965, 500);
export const testimonial2 = px(36551042, 500);
export const testimonial3 = px(12732168, 500);
export const testimonial4 = px(5999823, 500);

export { px };
