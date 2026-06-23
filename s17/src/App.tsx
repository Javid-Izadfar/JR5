/*
 * EXAM REQUIREMENTS — Country Explorer
 *
 * API: https://www.apicountries.com/countries
 *
 * Routes:
 *   /             — Country list with search + continent filter + theme toggle
 *   /country/:code — Country detail page (:code = alpha3Code)
 *
 * Features:
 *   1. Dark/Light theme via React Context (persisted to localStorage)
 *   2. Country data fetched once via React Context
 *   3. Search by country name or capital (case-insensitive, client-side)
 *   4. Continent filter buttons: All, Africa, Americas, Asia, Europe, Oceano
 *   5. Country cards (flag, name, capital, region) linking to detail page
 *   6. Country detail page with full info + back button
 *
 * Files to create:
 *   src/lib/types.ts, src/contexts/ThemeContext.tsx, src/contexts/CountryContext.tsx,
 *   src/components/ThemeToggle.tsx, src/components/CountryCard.tsx,
 *   src/pages/Home.tsx, src/pages/CountryDetail.tsx, src/App.tsx
 *
 * Shadcn components: npx shadcn@latest add card badge
 */

import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '@/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
