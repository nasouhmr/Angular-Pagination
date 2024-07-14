
# Angular Pagination Component

This project is an Angular component for pagination, utilizing Angular 15 and Nebular UI Kit Theme v11. The component is designed to be simple to integrate and highly customizable, allowing for efficient pagination in your Angular applications.

## Features

- Customizable page size options
- Navigation to first, last, previous, and next pages
- Direct navigation to specific pages
- Emits events for page changes

## Installation

1. Ensure you have Angular 15 and Nebular UI Kit Theme v11 installed in your project.
2. Clone the repository or download the component files.

```bash
git clone https://github.com/yourusername/angular-pagination-component.git
```

3. Add the component to your Angular project.

## Usage

1. Import the `PaginationComponent` into your module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule } from '@nebular/theme';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Use the `app-pagination` selector in your template:

```html
<app-pagination 
  [totalItems]="100" 
  [itemsPerPage]="10" 
  (pageChange)="onPageChange($event)">
</app-pagination>
```

3. Handle the `pageChange` event in your component:

```typescript
onPageChange(event: { page: number, perPage: number }) {
  console.log('Page changed to:', event.page, 'Items per page:', event.perPage);
  // handle the page change logic here
}
```

## Customization

You can customize the pagination component by modifying the `pagination.component.scss` file to match your desired styling.

## API

### Inputs

- `totalItems` (number): The total number of items to paginate.
- `itemsPerPage` (number): The number of items to display per page.

### Outputs

- `pageChange` (EventEmitter<{ page: number, perPage: number }>): Emits an event when the page changes.

## Development

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Acknowledgements

This component uses [Nebular UI Kit](https://akveo.github.io/nebular/) for theming and styling.
