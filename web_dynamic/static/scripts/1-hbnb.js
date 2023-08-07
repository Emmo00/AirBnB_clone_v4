$(function () {
  let amenityIds = {};

  $('input[type="checkbox"]').on('change', function() {
      const amenityId = $(this).data('amenity-id');

      if ($(this).is(':checked')) {
        amenityIds[amenityId] = true;
      } else {
        delete amenityIds[amenityId];
      }
      updateAmenityList(amenityIds);
  })                                                  })
