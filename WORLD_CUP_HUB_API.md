# World Cup Hub 2026 — API Documentation

Base URL: `http://localhost:4010`

All responses return `Content-Type: application/json`. CORS is enabled for all origins.

---

## Pagination

List endpoints return a paginated envelope:

```json
{
  "data": [],
  "page": 1,
  "limit": 10,
  "total": 48,
  "totalPages": 5
}
```

Query parameters: `page` (default 1), `limit` (default 10–20).

---

## Teams

### GET /teams

List all 48 qualified national teams.

| Param | Type | Description |
|-------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 10) |
| `search` | string | Filter by team name (case-insensitive) |
| `group` | string | Filter by group letter (A–L) |

**Response:**
```json
{
  "data": [
    {
      "id": "team-1",
      "name": "Argentina",
      "code": "ARG",
      "flag": "ar",
      "confederation": "CONMEBOL",
      "group": "A",
      "coach": "Lionel Scaloni",
      "fifaRanking": 1
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 48,
  "totalPages": 5
}
```

### GET /teams/:id

Get a single team by ID.

**Example:** `GET /teams/team-1`

**Response:**
```json
{
  "id": "team-1",
  "name": "Argentina",
  "code": "ARG",
  "flag": "ar",
  "confederation": "CONMEBOL",
  "group": "A",
  "coach": "Lionel Scaloni",
  "fifaRanking": 1
}
```

---

## Players

### GET /players

List all players across all teams.

| Param | Type | Description |
|-------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 20) |
| `teamId` | string | Filter by team ID (e.g. `team-1`) |
| `position` | string | Filter by position: `Goalkeeper`, `Defender`, `Midfielder`, `Forward` |
| `search` | string | Filter by first or last name (case-insensitive) |

**Response:**
```json
{
  "data": [
    {
      "id": "player-1",
      "teamId": "team-1",
      "teamName": "Argentina",
      "firstName": "Larue",
      "lastName": "Beer",
      "age": 37,
      "shirtNumber": 1,
      "position": "Goalkeeper",
      "goals": 2,
      "assists": 4,
      "yellowCards": 0,
      "redCards": 1
    }
  ],
  "page": 1,
  "limit": 20,
  "total": 1185,
  "totalPages": 60
}
```

### GET /players/:id

Get a single player by ID.

**Example:** `GET /players/player-1`

**Response:**
```json
{
  "id": "player-1",
  "teamId": "team-1",
  "teamName": "Argentina",
  "firstName": "Larue",
  "lastName": "Beer",
  "age": 37,
  "shirtNumber": 1,
  "position": "Goalkeeper",
  "goals": 2,
  "assists": 4,
  "yellowCards": 0,
  "redCards": 1
}
```

---

## Matches

### GET /matches

List all tournament matches.

| Param | Type | Description |
|-------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 10) |
| `stage` | string | Filter by stage code: `GS`, `R32`, `R16`, `QF`, `SF`, `3RD`, `FINAL` |
| `teamId` | string | Filter by team ID (shows matches where team is home or away) |
| `status` | string | Filter by status: `Scheduled`, `In Progress`, `Finished`, `Postponed` |
| `date` | string | Filter by date (format: `YYYY-MM-DD`) |

**Response:**
```json
{
  "data": [
    {
      "id": "match-1",
      "stage": "Group Stage",
      "stageCode": "GS",
      "group": "A",
      "homeTeam": {
        "id": "team-1",
        "name": "Argentina",
        "code": "ARG",
        "flag": "ar"
      },
      "awayTeam": {
        "id": "team-2",
        "name": "Morocco",
        "code": "MAR",
        "flag": "ma"
      },
      "stadium": {
        "id": "stadium-4",
        "name": "Arrowhead Stadium",
        "city": "Kansas City, MO",
        "capacity": 76416
      },
      "date": "2026-06-13",
      "kickoffTime": "16:30",
      "status": "Scheduled",
      "homeScore": null,
      "awayScore": null,
      "referee": "Logan Orn",
      "attendance": 69297
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 104,
  "totalPages": 11
}
```

### GET /matches/:id

Get a single match by ID.

**Example:** `GET /matches/match-1`

**Response:** Same shape as a single item from `/matches`.

### GET /matches/today

Get all matches currently in progress.

**Response:** Array of match objects with `status: "In Progress"`.

```json
[
  {
    "id": "match-3",
    "stage": "Group Stage",
    "stageCode": "GS",
    "group": "A",
    "homeTeam": { ... },
    "awayTeam": { ... },
    "stadium": { ... },
    "date": "2026-06-15",
    "kickoffTime": "20:00",
    "status": "In Progress",
    "homeScore": 1,
    "awayScore": 0,
    "referee": "...",
    "attendance": 72000
  }
]
```

---

## Standings

### GET /standings

Get standings for all 12 groups.

**Response:**
```json
[
  {
    "group": "A",
    "teams": [
      {
        "teamId": "team-1",
        "teamName": "Argentina",
        "teamCode": "ARG",
        "flag": "ar",
        "position": 1,
        "played": 3,
        "won": 3,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 7,
        "goalsAgainst": 2,
        "goalDifference": 5,
        "points": 9,
        "form": ["W", "W", "W"]
      }
    ]
  }
]
```

### GET /standings/:group

Get standings for a single group.

**Example:** `GET /standings/A`

**Response:**
```json
{
  "group": "A",
  "teams": [
    { "teamId": "team-1", "teamName": "Argentina", "position": 1, "points": 9, ... },
    { "teamId": "team-3", "teamName": "Japan", "position": 2, "points": 6, ... },
    { "teamId": "team-9", "teamName": "Morocco", "position": 3, "points": 3, ... },
    { "teamId": "team-4", "teamName": "Jamaica", "position": 4, "points": 0, ... }
  ]
}
```

---

## Stadiums

### GET /stadiums

Get all 16 tournament stadiums.

**Response:**
```json
[
  {
    "id": "stadium-1",
    "name": "MetLife Stadium",
    "city": "East Rutherford, NJ",
    "capacity": 82500
  },
  {
    "id": "stadium-2",
    "name": "SoFi Stadium",
    "city": "Inglewood, CA",
    "capacity": 70240
  }
]
```

---

## Events

### GET /events

Get all match events (goals, cards, substitutions, etc.).

| Param | Type | Description |
|-------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 50) |
| `matchId` | string | Filter by match ID |
| `type` | string | Filter by event type: `Goal`, `Own Goal`, `Yellow Card`, `Red Card`, `Penalty`, `VAR`, `Substitution` |

**Response:**
```json
{
  "data": [
    {
      "id": "event-1",
      "matchId": "match-4",
      "minute": 107,
      "type": "Goal",
      "team": {
        "id": "team-2",
        "name": "Morocco",
        "code": "MAR"
      },
      "player": "Amelia Dach",
      "description": "Goal! Drew Conroy scores from inside the box."
    }
  ],
  "page": 1,
  "limit": 50,
  "total": 314,
  "totalPages": 7
}
```

---

## Search

### GET /search

Search across teams, players, and matches.

| Param | Type | Description |
|-------|------|-------------|
| `q` | string | Search query (matches team names, player names) |

**Response:**
```json
{
  "teams": [ ... ],
  "players": [ ... ],
  "matches": [ ... ],
  "total": 15
}
```

---

## Errors

| Status | Meaning |
|--------|---------|
| 404 | Resource not found (team, player, match by ID) |

```json
{
  "error": "Team not found"
}
```

---

## Quick Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/teams` | List teams (paginated, filterable) |
| GET | `/teams/:id` | Get team by ID |
| GET | `/players` | List players (paginated, filterable) |
| GET | `/players/:id` | Get player by ID |
| GET | `/matches` | List matches (paginated, filterable) |
| GET | `/matches/:id` | Get match by ID |
| GET | `/matches/today` | Today's in-progress matches |
| GET | `/standings` | All group standings |
| GET | `/standings/:group` | Standings for group A–L |
| GET | `/stadiums` | All stadiums |
| GET | `/events` | Match events (paginated, filterable) |
| GET | `/search?q=` | Search teams, players, matches |

---

## Dataset Summary

| Resource | Count | Notes |
|----------|-------|-------|
| Teams | 48 | FIFA World Cup 2026 qualified nations |
| Groups | 12 | Groups A–L, 4 teams each |
| Players | ~1,185 | 23–26 per team, Faker-generated |
| Matches | 104 | Group stage + knockout rounds |
| Stadiums | 16 | US, Mexico, Canada venues |
| Events | ~314 | Goals, cards, subs, VAR decisions |
| Standings | 12 | Points, GD, form for each group |
