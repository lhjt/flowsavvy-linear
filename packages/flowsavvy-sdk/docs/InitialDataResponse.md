# InitialDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendarAccounts** | [**Array&lt;CalendarAccount&gt;**](CalendarAccount.md) |  | [optional] [default to undefined]
**calendars** | [**Array&lt;Calendar&gt;**](Calendar.md) |  | [optional] [default to undefined]
**defaultCalendarID** | **number** |  | [optional] [default to undefined]
**userSettings** | [**UserSettings**](UserSettings.md) |  | [optional] [default to undefined]
**clientToAppOffsetMilliseconds** | **number** |  | [optional] [default to undefined]
**colors** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**differentVersions** | [**DifferentVersions**](DifferentVersions.md) |  | [optional] [default to undefined]
**subscription** | [**Subscription**](Subscription.md) |  | [optional] [default to undefined]
**onboardingInfo** | [**OnboardingInfo**](OnboardingInfo.md) |  | [optional] [default to undefined]
**defaultTimeProfileId** | **number** |  | [optional] [default to undefined]
**timeProfiles** | [**Array&lt;TimeProfile&gt;**](TimeProfile.md) |  | [optional] [default to undefined]
**user** | [**User**](User.md) |  | [optional] [default to undefined]
**itemSettings** | [**ItemSettings**](ItemSettings.md) |  | [optional] [default to undefined]
**featureFlagOverrideInfo** | [**FeatureFlagOverrideInfo**](FeatureFlagOverrideInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InitialDataResponse } from 'flowsavvy-sdk';

const instance: InitialDataResponse = {
    calendarAccounts,
    calendars,
    defaultCalendarID,
    userSettings,
    clientToAppOffsetMilliseconds,
    colors,
    differentVersions,
    subscription,
    onboardingInfo,
    defaultTimeProfileId,
    timeProfiles,
    user,
    itemSettings,
    featureFlagOverrideInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
