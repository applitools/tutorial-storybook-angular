import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-welcome-component',
  template: `
  <div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
  `,
  styles: [
    `
      main {
        margin: 15px;
        max-width: 600;
        line-height: 1.4;
        fontfamily: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;
      }

      .note {
        opacity: 0.5;
      }

      .inline-code {
        font-size: 15px;
        font-weight: 600;
        padding: 2px 5px;
        border: 1px solid #eae9e9;
        border-radius: 4px;
        background-color: #f3f2f2;
        color: #3a3a3a;
      }

      a {
        color: #1474f3;
        text-decoration: none;
        border-bottom: 1px solid #1474f3;
        padding-bottom: 2px;
      }
    `,
  ],
})
export default class AppComponent {
  @Output()
  showApp = new EventEmitter<any>();
}
