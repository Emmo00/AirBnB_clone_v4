$(function () {
  let amenities = {};

  $('input[type="checkbox"]').on("change", function () {
    const amenityId = $(this).data("id");
    const amenityName = $(this).data("name");
    let amenityList = "";

    if ($(this).is(":checked")) {
      amenities[amenityId] = amenityName;
    } else {
      delete amenities[amenityId];
    }
    for (let amenity of amenities) {
      amenityList += `${amenity}, `
    }
    $(".amenities h4").text(amenityList);
  });
});
