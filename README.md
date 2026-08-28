# MacroZone

A minimal mobile app for tracking daily macros (calories, protein, carbs, fat). Log meals, see your running totals against daily goals, and review or clear your meal history — all stored locally on-device.

Built with [Expo](https://expo.dev) and [Expo Router](https://docs.expo.dev/router/introduction/).

## Features

- **Home dashboard** — today's date plus a macro grid showing totals for calories, protein, carbs, and fat against daily goals
- **Add Meal** — log a meal's name, calories, protein, carbs, and fat
- **All Meals** — full meal history with a "Clear All" action
- **Recent Meals** — the 5 most recently logged meals, shown on the home screen
- **Delete a meal** — long-press any meal to remove it (with haptic feedback)
- **Local persistence** — meals are saved on-device with `AsyncStorage`, no backend required

## Tech stack

- [Expo](https://expo.dev) (SDK 55) + [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing)
- React Native 0.83 / React 19
- TypeScript
- `@react-native-async-storage/async-storage` for local persistence
- `@react-navigation/bottom-tabs` for tab navigation
- `expo-haptics`, `@expo/vector-icons`

## Project structure

```
src/
├── app/
│   ├── _layout.tsx           # Root layout
│   └── (tabs)/
│       ├── _layout.tsx       # Bottom tab navigator (Home, Add Meal, All Meals)
│       ├── index.tsx         # Home screen — macro totals + recent meals
│       ├── add-meal.tsx      # Add Meal form
│       └── meals.tsx         # Full meal list + clear all
├── components/
│   ├── HomeHeader.tsx
│   ├── MacroGrid.tsx
│   ├── MacroCard.tsx
│   ├── MealItem.tsx
│   └── RecentMeals.tsx
├── storage/
│   └── meals.ts               # AsyncStorage CRUD helpers for meals
└── styles/
    └── global.ts               # Shared colors and styles
```

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

From the Expo CLI output you can open the app in:

- a [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- an [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

Other available scripts:

```bash
npm run android   # expo start --android
npm run ios       # expo start --ios
npm run web       # expo start --web
npm run lint      # expo lint
```

## Roadmap / ideas

- Configurable daily macro goals (currently hardcoded: 2,000 cal / 150g protein / 250g carbs / 65g fat)
- Edit existing meals
- Daily/weekly history and charts

## License

Private project — no license specified.
