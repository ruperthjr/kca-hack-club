---
title: "Flutter Mobile App with Riverpod and REST API"
description: "Build a production-minded Flutter app that consumes a public REST API using Riverpod for state management, with offline fallback and responsive UI."
difficulty: "intermediate"
unit: "Week 1 Project: Web Technologies and Internet Applications"
day: null
week: 1
month: 1
technologies:
    - "Flutter"
    - "Dart"
    - "Riverpod"
    - "Dio"
    - "SharedPreferences / Hive"
    - "Git & GitHub"
learningOutcomes:
    - "Structure Flutter apps with separation of concerns"
    - "Use Riverpod for dependency injection and state management"
    - "Consume REST APIs with error/loading/caching strategies"
    - "Build responsive, accessible UIs for mobile platforms"
    - "Write basic tests and prepare a public repo/demo"
estimatedTime: "10–14 hours"
requirements:
    - "Basic Dart & Flutter knowledge"
    - "Flutter SDK and emulator or device"
    - "GitHub account"
    - "API key if chosen API requires one (do not commit secrets)"
deliverables:
    - "Public GitHub repo with commit history and README"
    - "Flutter app with 3+ screens using Riverpod and API integration"
    - "Clear loading/error states and offline fallback"
    - "Basic tests and demo build or run instructions"
resources:
  - name: "Flutter Documentation"
    url: "https://docs.flutter.dev/"
  - name: "Riverpod Documentation"
    url: "https://riverpod.dev/"
  - name: "Dio (HTTP Client)"
    url: "https://pub.dev/packages/dio"
  - name: "OpenWeather API"
    url: "https://openweathermap.org/api"
  - name: "GitHub REST API"
    url: "https://docs.github.com/en/rest"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# Flutter API Mobile App Project

## Overview

Build a cross-platform Flutter app that consumes a public REST API, uses Riverpod for state and DI, and demonstrates production-minded architecture, error handling, and offline fallback.

## Objective

Ship a responsive, testable Flutter app that fetches data from a public API, presents clear loading/error states, caches results for offline use, and is published in a public GitHub repository.

## Prerequisites

- Familiarity with Dart and basic Flutter widgets
- Flutter SDK installed and an emulator or device available
- Git and a GitHub account
- Optional: API key for the chosen public API

## Instructions

### Part 1: API Layer & Models

1. Pick a public API (OpenWeather, News, GitHub, SpaceX).
2. Define DTOs and domain models (use freezed/json_serializable or plain classes).
3. Implement a network data source using Dio and map responses to models.
4. Example model (freezed/json_serializable recommended):
```dart
@freezed
class Weather with _$Weather {
    factory Weather({
        required String location,
        required double temperature,
        required String condition,
        required DateTime lastUpdated,
    }) = _Weather;

    factory Weather.fromJson(Map<String,dynamic> json) => _$WeatherFromJson(json);
}
```
5. Example data source:
```dart
class WeatherDataSourceImpl implements WeatherDataSource {
    final Dio _dio;
    WeatherDataSourceImpl(this._dio);

    @override
    Future<Weather> getCurrentWeather(String city) async {
        final r = await _dio.get('/weather', queryParameters: {'q': city});
        return Weather.fromJson(r.data);
    }
}
```

### Part 2: Repository, Caching & Riverpod

1. Create a repository that abstracts remote and local sources; return cached data on network failure.
2. Use SharedPreferences or Hive for simple offline caching.
3. Expose providers for Dio, repository, and feature state.
4. Use FutureProvider for simple fetches and StateNotifierProvider for richer UI state.
```dart
final weatherRepoProvider = Provider<WeatherRepository>((ref) { ... });
final weatherFuture = FutureProvider.family<Weather, String>((ref, city) { ... });
```
5. Handle loading, success, and error states explicitly and map network exceptions to user-friendly messages.

### Part 3: UI, Testing & Deployment

1. Build at least 3 screens (list/search/detail/settings) and ensure responsive layouts.
2. Show loading indicators, error states with retry, pull-to-refresh, and empty-state UIs.
3. Add basic unit tests for repository logic and widget tests for one screen.
4. Prepare README with setup, environment variables (do not commit secrets), and run instructions.
5. Optionally add GitHub Actions to run tests and build artifacts.

## Deliverables

1. Public GitHub repository with clear commit history.
2. Flutter app implementing the features above, runnable from instructions in README.
3. Screenshots or APK/demo build and basic tests included.

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------:|-------------|
| Architecture & Code Quality | 30% | Clean layering, testability, and folder structure |
| State Management & Providers | 25% | Correct, idiomatic Riverpod usage and separation of concerns |
| API Integration & Resilience | 20% | Robust error handling, caching, and offline fallback |
| UI/UX & Accessibility | 15% | Responsive layouts, clear states, accessibility considerations |
| Documentation & Testing | 10% | README, run instructions, and basic tests |

## Tips & Common Mistakes

- Do not commit API keys or secrets; use environment variables or runtime config.
- Surface clear loading/error states; avoid blocking the UI thread.
- Keep providers small and focused; prefer composition over monoliths.
- Test API parsing and repository fallback behavior.
- Verify layouts on multiple screen sizes and platform themes.

## Bonus Challenges (Optional)

1. Add local DB (Hive/SQLite) for richer offline mode and sync logic.
2. Add CI that runs tests and produces a demo build (Android APK or iOS build).

## Submission

Push your project to a public GitHub repo, include a README with setup and API notes, attach screenshots or a demo build, and share the repository URL.
