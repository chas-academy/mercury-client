# CSS/SCSS Styleguide
A few rules of special importance from [AirBnb's CSS/SCSS Styleguide](https://github.com/airbnb/css#sass)
* Do not use ID selectors
* Prefer dashes over camelCasing in class names
* Write detailed comments for code that isn't self-documenting:
    * Uses of z-index
    * Compatibility or browser-specific hacks
* Do not nest selectors more than three levels deep! 

## Where to find CSS/SCSS files in the directory layout
```bash
/src/                        
│   ├──/assets/
│   │           ├──/icons/     
│   │           ├──/styles/ 
│   │           │           ├──/utils/                
│   │           │           │           ├── reset.scss
│   │           │           │           ├── variables.scss 
│   │           │           
│   │           │           ├──style.scss
│
│   ├──/components/
│   │               ├──/Button/
│   │                           ├── Button.scss       
```


In `assets/styles/` there you'll find `style.scss` - (which generates `style.css`). In

Changes to any `scss` file in `assets/styles/` will update `style.css` as you run `yarn run watch-css` or `yarn run build-css`- as long as they are included in `style.scss`.

At the moment, `assets/icons/` is an empty directory, though it will be populated by `svg` icons. 

## CSS Variable

In `assets/styles/utils/variables.scss` you'll find the projects global variables, that you can use in the components `.scss` files.