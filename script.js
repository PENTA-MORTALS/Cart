/* The design was taken from https://www.uidesigndaily.com/posts/figma-customers-projects-project-management-card-invoice-day-518 */

const tl = gsap.timeline({defaults: {ease: "power4.out", duration: .8}});

tl.from(".main-header", {opacity: 0, y: -30})
  .from(".customer-section", {opacity: 0, y: -30})
  .from(".sort-section", {opacity: 0, y: -30})
  .from(".box-section", {opacity: 0, stagger: 0.5, y: -30})
  .from(".sidebar", {opacity: 0, x: -30})