# React Native Starter Template

## Packages inside

- [React Navigation](https://reactnavigation.org/) - routing and navigation.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native UI Lib](https://wix.github.io/react-native-ui-lib/)
- [React Native Reanimated 2](https://docs.swmansion.com/react-native-reanimated/)
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv) - key-value storage framework, faster than AsyncStorage
- [ESLint](https://github.com/eslint/eslint) - keep code clean
- 

## File Structure

- All logic and components/screens exist inside `src/`
- 'src/' has all logic and components/screens
  - 'components/' has all components, navigators and screens
    - 'atoms/' refer to Atomic Design for more info
    - 'molecules/' refer to Atomic Design for more info
    - 'organisms/' refer to Atomic Design for more info
    - 'navigators/' includes all navigator components
    - 'screens/' includes all app screens

## First time configuration after using this template

1) Create a new Firebase project [here](https://console.firebase.google.com/u/0/)
2) Configure iOS (Follow the official [docs](https://rnfirebase.io/) or the steps below)
  - Inside the newly created Firebase project, add a new iOS application.
  - Download GoogleService-Info.plist and add it to your project.
    - Open Xcode
    - Right click on project name and click "Add Files to #{projectName}"
    - Select the downloaded plist file above and ensure "Copy items if needed" checkbox is enabled.
3) Configure Android
  - TODO
4) Add `.env` file
5) `cd ios && pod install && cd ..`

## Toast usage
 - TODO

## Update design system
  - in ./src/foundationConfig.js
  - TODO