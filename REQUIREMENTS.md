# Objective

Develop a ViteJS Vue TypeScript project that implements internationalization (i18n) in both English and French for four distinct Vue components.

## Task Requirements

### Component Development

- Develop four Vue components using ViteJS, Vue, and TypeScript & TailwindCSS
- Implement internationalization (i18n) for each component, supporting English and French languages.

### Components Description

1. **Component A - Counter:**
   - Includes plus / minus button (localized) to increment a counter.
2. **Component B - Metrics Display:**
   - Shows the current count from Component A in a metric display with the design of your choice, with a localized label and a value.
3. **Component C - Control Pane:**
   - Provides a button to reset the counter in Component A.
4. **Component D - Locale Picker:**
   - Allows the user to switch between English and French.
   - Changes the language of all components upon selection.

### Web-Components Integration

- Ensure that all four components are buildable as web-components.
- Integrate these web-components into a second codebase consisting of a single index.html file importing the built web-components.
- The HTML codebase should display the 4 components on the single page, each component functioning as a standalone web-component, there should be 2 groups of those 4 components, each group holding independent state.

### Interactivity and Functionality

- WebComponents should interact with each other:
  - Component A’s count is displayed and updated in Component B.
  - Component C can reset the count in Component A.
  - Component D changes the displayed language of all components.

### Vue Page

- Create a Vue page that includes all four components.
- Demonstrate the components working together within the Vue environment.

### External HTML Codebase

- In the separate HTML codebase, use the four web-components individually in 2 groups.

### Documentation

- Provide a README file with clear instructions on:
  - Setting up the project.
  - Building and integrating the web-components into the HTML codebase.

### Code Quality

- Write clean, maintainable, and well-documented code.
- Adhere to best practices in Vue.js and TypeScript development.

### Test Coverage

- Implement tests to ensure the functionality of the components and their interactions in the HTML file (test framework of your choice).

### Submission

- Submit the complete source code via a version control repository (e.g., GitHub, GitLab).
- Ensure the repository includes all necessary configuration files, documentation, and test suites.

## Evaluation Criteria

- Functionality: Adherence to the provided task requirements and correct interaction between components.
- Internationalization Implementation: Effective use of i18n for English and French languages.
- Code Quality: Cleanliness, organization, and readability of the code.
- Test Coverage: Quality and completeness of tests.
- Documentation: Clarity and thoroughness of the provided documentation.
