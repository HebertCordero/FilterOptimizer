//set start point anywhere you want
var start = new Date();

// This gets all the filter options from the  site.
filterOptions = $('.is-gridWall-filters__checkbox').children("span.is-gridWall-filters__checkbox__title.facet__text");
filterParents = [];

// For each filter option look for the closest "label" which has the parent filter name.
for (var i = 0; i < filterOptions.length; i++) {
  //filterParents.push(filterOptions[i].closest('label').getAttribute('for').replace(/\d+/g, ''))
  filterTitle = filterOptions[i].closest('label').getAttribute('for').replace(/\d+/g, '');
  if(filterParents.length == 0) {
    console.log("list is empty");
    filterTitle = filterParents.push(filterTitle);
  }
  else {
    if(filterParents.includes(filterTitle)) {
      //console.log("is repeated SKIP!");
    } else {
      filterTitle = filterParents.push(filterTitle);
    }
  }
  console.log(filterParents);
  // Trim is needed as some filters have wierd text line spaces and line breaks.
  console.log(filterOptions[i].innerText.trim());
}

//when done,
var end = new Date();

//to profile milliseconds, just do
var duration = end - start;
console.log(duration)
