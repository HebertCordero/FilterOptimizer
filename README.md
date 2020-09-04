# Filter Optimizer

Filter Optimizer is a script that should run on the console of the [Site](https://www.innovasport.com/tenis-casuales-de-hombre/c/100010002070000000) which
easily replaces the style of the filter section.

## My Documentation

|      Day      |  Development  |      Goal     |      Notes     |
|:-------------:|:-------------:|:-------------:|:--------------|
| 8.28.2020     |  Test  | Test the original version of the script and understand its basic functionallity. | <ul><li>Some features are missing or not working as expected such as: sorting, it seems only sorting by color is working when clicking select.</li><li>For example when selecting blue, it filters correctly but sorting by Brand: Adidas nothing happens</li></ul>|
| 8.29.2020     | DnD Day | Uploaded the project to github to work on a different computer. |<ul><li>Freeday</li></ul>|
| 8.30.2020     | Test | Understand the code completely |<ul><li>The code adds some new styles to the filter section, it seems some filter titles are orinally Hidden but the code that runs when "Show more is clicked" removes the hidden property of those filters.</li><li>Also today I finished documenting all the code in the script, this was necessary in order to understand the basic functionallity of the script.</li><li>Tomorrow I'll start with some optimizations I marked on the code in some comments, then i will work on some CSS JS erros that can easily be fixed.</li></ul> |
| 8.31.2020     | Major Changes  | Modify the code, Fix some broken features. |<ul><li>The search Button was removed as filters can be used without a search button.</li><li>The hidding of icons was fixed.</li><li>Show More was fixed, before it showed hidden fields.</li></ul>  |
| 9.01.2020     | Content Cell  |      todo     |<ul><li>Fixed arrow icon position</ul><ul></ul></li>|

## Usage

```bash
git clone project
cd FilterOptimizer
copy the script code and run it on the console on https://www.innovasport.com/tenis-casuales-de-hombre/c/100010002070000000?q=%3Arelevance
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
