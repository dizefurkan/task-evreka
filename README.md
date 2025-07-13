TASK EVREKA

12.07.2025 - 14:50 start

Case: Mini CRM – User Management Interface

1. User List Page

- [x] Display a list of users with the following fields: Name, Email, Role, Creation Date
- [x] Use at least 5.000 fake users (you can use faker.js or any fake data tool)
- [x] User can switch between Table View and Card View
- [ ] Include search or filtering functionality (you can manage filters via URL – bonus point!)
- [x] Add a toggle to switch between:
  - [x] Paginated mode (10–20 items per page)
  - [ ] All items rendered at once (note: ensure a smooth user experience)
- The layout should use 100vh height
- [x] Each user should have a “Details” button that navigates to the detail page
- [x] When a new user is added, it should persist across page refreshes (you may use
      LocalStorage)

2. New User Form (Inside a Modal)

- [x] Add a button like “➕ Add User” that opens a modal form
- [x] Form Fields: Name, Email, Password, Role (Dropdown), Active (Checkbox)
- [x] Add proper form validations (required fields, email format, password rules)
- [ ] Bonus: You can manage the modal route via React Router
- [ ] On form submission:
  - [x] Add the user to the list
  - [ ] Assign random latitude & longitude values to the user (random position?)

3. User Detail Page

- [ ] Route: /users/:id
- [ ] Display
- [ ] Selected user’s name and email
- [ ] A map showing a marker at the user’s coordinates (with Leaflet map)
