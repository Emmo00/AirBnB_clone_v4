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
    for (let amenityId in amenities) {
      amenityList += `${amenities[amenityId]}, `;
    }
    $(".amenities h4").text(amenityList);
  });
});
