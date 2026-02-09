---
title: "Flutter Mobile App with Riverpod and REST API"
description: "Build a cross-platform Flutter app that consumes a public REST API using Riverpod for state management and follows production best practices"
difficulty: "intermediate"
unit: "Week 1 Project: Web Technologies and Internet Applications"
week: 1
technologies:
    - "Flutter"
    - "Dart"
    - "Riverpod"
    - "REST API"
    - "GitHub"
learningOutcomes:
    - "Structure Flutter apps with separation of concerns"
    - "Use Riverpod for state management and DI"
    - "Integrate REST APIs with robust error and loading handling"
    - "Build responsive UIs for iOS and Android"
    - "Implement navigation, routing, and simple persistence"
estimatedTime: "10–14 hours"
requirements:
    - "Familiarity with Dart and basic Flutter"
    - "Flutter SDK and a working emulator/device"
    - "Understanding of REST API concepts"
    - "GitHub account for version control"
deliverables:
    - "Flutter app with 3+ screens leveraging Riverpod"
    - "API integration with clear loading/error states and offline fallback"
    - "Readable, testable code and README"
    - "Public GitHub repo (commit history) and a demo build"
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
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Flutter API Mobile App Project

Overview
- Build a production-minded Flutter app that consumes a public REST API, uses Riverpod for state, and follows clean architecture and UX best practices.
- Choose one public API: OpenWeather, News, GitHub, or SpaceX.

Objectives
- Demonstrate API consumption, dependency injection, error/loading states, caching for offline use, and responsive UI.
- Deliver a working app in a public repository with documentation and a demo build.

Getting Started
1. Create a new Flutter app and initialize git.
2. Choose an API and gather required keys (do not commit secrets).
3. Plan architecture and define features/screens before coding.

Suggested Project Structure
```
lib/
├── main.dart
├── app/
│   ├── app.dart
│   └── routes.dart
├── features/
│   └── [feature]/
│       ├── presentation/
│       ├── domain/
│       └── data/
├── core/
│   ├── constants/
│   ├── theme/
│   ├── utils/
│   └── services/
└── generated/
```

Suggested Dependencies (examples)
```yaml
dependencies:
    flutter:
        sdk: flutter
    riverpod: ^2.0.0
    dio: ^5.0.0
    shared_preferences: ^2.0.0
    cached_network_image: ^3.0.0
    intl: ^0.18.0

dev_dependencies:
    flutter_test:
        sdk: flutter
    build_runner: ^2.0.0
    riverpod_generator: ^2.0.0
```

Phase 1 — API Layer & Models
- Define DTOs and domain models (consider freezed/json_serializable).
- Implement a data source using Dio or http and map responses to models.

Example model (freezed)
```dart
@freezed
class Weather with _$Weather {
    factory Weather({
        required String location,
        required double temperature,
        required String condition,
        required DateTime lastUpdated,
    }) = _Weather;

    factory Weather.fromJson(Map<String, dynamic> json) => _$WeatherFromJson(json);
}
```

Example data source
```dart
abstract class WeatherDataSource {
    Future<Weather> getCurrentWeather(String city);
}

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

Phase 2 — Repository & Caching
- Use repository pattern to abstract data sources and provide offline fallback via local cache (SharedPreferences, Hive).
- Handle network errors and return cached data when available.

Phase 3 — Riverpod State Management
- Expose providers for clients, repositories, and feature state.
- Use FutureProvider for simple fetches and StateNotifier for richer local state.

Providers example
```dart
final weatherRepoProvider = Provider<WeatherRepository>((ref) {
    final dio = ref.watch(dioProvider);
    final local = ref.watch(weatherLocalProvider);
    return WeatherRepositoryImpl(WeatherDataSourceImpl(dio), local);
});

final weatherFuture = FutureProvider.family<Weather, String>((ref, city) {
    final repo = ref.watch(weatherRepoProvider);
    return repo.getWeather(city);
});
```

StateNotifier example
```dart
class WeatherState { final Weather? weather; final bool loading; final String? error; /*...*/ }
class WeatherNotifier extends StateNotifier<WeatherState> { /* fetch logic with repo */ }
final weatherNotifierProvider = StateNotifierProvider<WeatherNotifier, WeatherState>((ref) { /*...*/ });
```

Phase 4 — UI & UX
- Build responsive screens (list/detail/search/settings).
- Show clear loading indicators and user-friendly error messages.
- Support pull-to-refresh and graceful empty states.

UI example
```dart
class WeatherScreen extends ConsumerWidget {
    @override
    Widget build(BuildContext context, WidgetRef ref) {
        final state = ref.watch(weatherNotifierProvider);
        return Scaffold(
            appBar: AppBar(title: Text('Weather')),
            body: _buildBody(state, ref),
            floatingActionButton: FloatingActionButton(
                onPressed: () => _showCityDialog(context, ref),
                child: Icon(Icons.search),
            ),
        );
    }
}
```

Phase 5 — Advanced Features (optional)
- Local DB for richer offline mode (Hive/SQLite)
- Background refresh, deep links, push notifications, analytics
- Tests: unit, widget, integration; and CI/CD with GitHub Actions

Evaluation Criteria
- Architecture & Code Quality (30%)
- State Management (25%)
- API Integration & Resilience (20%)
- UI/UX & Accessibility (15%)
- Documentation & Testing (10%)

Submission Checklist
- Public GitHub repo with commit history
- README with setup, features, screenshots, and API notes
- Pubspec.yaml and instructions to run
- Demo build (APK or instructions for simulator)
- Basic tests and clear folder structure

Common Pitfalls
- Committing API keys or secrets
- Ignoring network/error states
- Blocking UI thread on long ops
- Not testing on multiple screen sizes

Tips
- Define providers and architecture first
- Keep UI simple and accessible
- Add error logging and graceful fallbacks
- Iterate with small, testable tasks

Good luck — build something that’s maintainable, testable, and delightful to use.
