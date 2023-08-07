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
  $("button").click(function () {
    $.post(
      "http://0.0.0.0:5001/api/v1/places_search/",
      {'amenities': Object.keys(amenities)},
      function (data, status) {
        for (let place of data) {
          $("<article></article>")
            .html(
              `
				  <div class="title_box">
			  <h2>${place.name}</h2>
			  <div class="price_by_night">\$${place.price_by_night}</div>
			</div>
			<div class="information">
			  <div class="max_guest">${place.max_guest} Guest${
                place.max_guest > 1 ? "s" : ""
              }</div>
				  <div class="number_rooms">${place.number_rooms} Bedroom${
                place.number_rooms > 1 ? "s" : ""
              }</div>
				  <div class="number_bathrooms">${place.number_bathrooms} Bathroom${
                place.number_bathrooms > 1 ? "s" : ""
              }</div>
			</div>
			<div class="user">
				  <b>Owner:</b> ${place.user.first_name} ${place.user.last_name}
				</div>
				<div class="description">
			  ${place.description}
				</div>
			  `
            )
            .appendTo("section.places");
        }
      }
    );
  });
});

$(function () {
  $.get("http://0.0.0.0:5001/api/v1/status", function (data, status) {
    console.log(status);
    if (data.status == "OK") {
      $("div#api_status").toggleClass("available");
    }
  });
});

$(function () {
  $.post(
    "http://0.0.0.0:5001/api/v1/places_search/",
    {},
    function (data, status) {
      for (let place of data) {
        $("<article></article>")
          .html(
            `
			  <div class="title_box">
		  <h2>${place.name}</h2>
		  <div class="price_by_night">\$${place.price_by_night}</div>
		</div>
		<div class="information">
		  <div class="max_guest">${place.max_guest} Guest${
              place.max_guest > 1 ? "s" : ""
            }</div>
			  <div class="number_rooms">${place.number_rooms} Bedroom${
              place.number_rooms > 1 ? "s" : ""
            }</div>
			  <div class="number_bathrooms">${place.number_bathrooms} Bathroom${
              place.number_bathrooms > 1 ? "s" : ""
            }</div>
		</div>
		<div class="user">
			  <b>Owner:</b> ${place.user.first_name} ${place.user.last_name}
			</div>
			<div class="description">
		  ${place.description}
			</div>
		  `
          )
          .appendTo("section.places");
      }
    }
  );
});
