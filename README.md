# Filter Optimizer

Filter Optimizer is a script that should run on the console of the [Site](https://www.innovasport.com/tenis-casuales-de-hombre/c/100010002070000000) which
easily replaces the style of the filter section.

## My Documentation

|      Day      |  Development  |      Goal     |      Notes     |
|:-------------:|:-------------:|:-------------:|:--------------|
| 8.28.2020 |  Test  | Test the original version of the script and understand its basic functionality. | <ul><li>Some features are missing or not working as expected such as: sorting, it seems only sorting by color is working when clicking select.</li><li>For example when selecting blue, it filters correctly but sorting by Brand: Adidas nothing happens</li></ul>|
| 8.29.2020 | DnD Day | Uploaded the project to github to work on a different computer. |<ul><li>Freeday</li></ul>|
| 8.30.2020 | Test | Understand the code completely |<ul><li>The code adds some new styles to the filter section, it seems some filter titles are originally Hidden but the code that runs when "Show more is clicked" removes the hidden property of those filters.</li><li>Also today I finished documenting all the code in the script, this was necessary to understand the basic functionality of the script.</li><li>Tomorrow I'll start with some optimizations I marked on the code in some comments, then I will work on some CSS JS errors that can easily be fixed.</li></ul> |
| 8.31.2020 | Major Changes  | Modify the code, Fix some broken features. |<ul><li>The search Button was removed as filters can be used without a search button.</li><li>The hiding of icons was fixed.</li><li>Show More was fixed before it showed hidden fields.</li></ul>  |
| 9.01.2020 | Minor Changes | Code Simplification |<ul><li>Tried to use the code as-is, with some optimizations, but I encountered some issues when using arrays directly in the console</li><li>chrome devtools seem to have some inconsistency when using arrays or objects directly in the console</li><li>As of today, dumping an object (array) into the console will result in objects' properties being read upon console object expansion in other words, this error generates abbreviated previews for objects/arrays at the moment of their logging and passes this information along into the front-end. This only happens when the front-end is already opened</li><li>Will look for other options.</li></ul>|
| 9.02.2020 |  ~~~  | Had little time to work in the code. | <ul><li>Had little time to work on the code</li></ul>|
| 9.03.2020 | Major Changes | Make the code simpler and more optimized. | <ul><li>Tried an alternative visual style for the FilterMenu</li><li>This new menu has no "show more" / "show less" button, instead it is automatic, if the sections are too many for the first row it will wrap and should expand to show all the Filters. If the filters are less than the needed to have a second line, then the menu is closed and only the relevant filters will be shown, will the OG code after clicking show more all the filters events even the empty ones were displayed.</li><li>Tried to implement the show more and less button, but encountered some issues that added to many variables to the display factor.</li><li>Code should be clean and fast to run easily in the console as it will be executed by a google tool.</li></ul>|

## The Project
### Before
![Before 1](https://media.giphy.com/media/XEh9h9dICtY6WeGDUD/giphy.gif)
### After
![After 1](https://media.giphy.com/media/W6iEEjHHU8gaiIz9CW/giphy.gif)

### Before
![Before 2](https://media.giphy.com/media/fXzlHwFgMe2zkWG83j/giphy.gif)
### After
![After 2](https://media.giphy.com/media/jnhagIEPmWzQ5ydkgj/giphy.gif)

## Usage

```bash
git clone project
cd FilterOptimizer
copy the script code and run it on the console on https://www.innovasport.com/tenis-casuales-de-hombre/c/100010002070000000
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
