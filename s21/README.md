# World Cup Hub — Student Assignment

## Overview

You are going to build **World Cup Hub**, a web application where football fans can browse the 2026 FIFA World Cup.

The purpose of this project is to practice:

- React Router
- React Query
- Zustand
- TypeScript
- Component architecture
- API integration
- Clean project structure

---

# Phase 1 — MVP (2 Hours)

Your goal is to have a working application with all core technologies integrated.

## Pages

### Home

Display:

- Welcome banner
- Today's matches (first 5)

---

### Teams

Display all teams in a grid.

Each card should contain:

- Flag
- Team name
- Confederation

Clicking a team should navigate to its details page.

---

### Team Details

Display:

- Team information
- Coach
- Group
- List of players

---

### My World Cup

Display favorite teams.

If there are no favorites, show an empty state.

---

# React Router

Implement:

- /
- /teams
- /teams/:id
- /my-world-cup

Use route parameters where appropriate.

---

# React Query

Use React Query for:

- Fetching teams
- Fetching one team
- Fetching today's matches

Students should create meaningful query keys.

---

# Zustand

Create a global store containing:

- Favorite teams

Users should be able to:

- Add favorite
- Remove favorite

---

# UI Requirements

Include:

- Loading states
- Error states
- Empty states

---

# Deliverables

By the end of Phase 1 the application should:

- Navigate between pages
- Load data from the API
- Cache requests using React Query
- Store favorite teams using Zustand

---

# Phase 2 — Full Project (1 Week)

Expand the application into a complete World Cup dashboard.

## Pages

- Home
- Matches
- Match Details
- Teams
- Team Details
- Player Details
- Standings
- My World Cup

---

## Matches

Features:

- Search
- Pagination
- Filter by stage
- Filter by group

Use query parameters.

Example:

```
/matches?page=2&stage=group
```

---

## Match Details

Display:

- Stadium
- Referee
- Score
- Events
- Statistics
- Lineups

---

## Team Details

Display:

- Coach
- Players
- Statistics
- Upcoming matches

---

## Player Details

Display:

- Photo
- Position
- Number
- Goals
- Assists
- Team

---

## Standings

Display standings grouped by World Cup groups.

---

## My World Cup

Display:

- Favorite teams
- Favorite players
- Upcoming matches for favorite teams

---

# React Query

Use:

- Cached queries
- Query keys with IDs
- Query keys with search params
- Multiple queries on one page
- Disabled queries
- Manual refetch
- At least one non-cached query

---

# Zustand

Expand the store with:

- Favorite teams
- Favorite players
- Recently viewed teams

---

# General Requirements

- TypeScript everywhere
- Reusable components
- Responsive layout
- Good folder structure
- Proper loading states
- Proper error handling
- Clean code

---

# Bonus

Choose any three:

- Live score polling
- Infinite scrolling
- Search history
- Team comparison
- Statistics charts
- Dark mode
- Skeleton loaders
