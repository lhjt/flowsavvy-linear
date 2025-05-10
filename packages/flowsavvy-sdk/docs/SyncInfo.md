# SyncInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**syncState** | **string** |  | [optional] [default to undefined]
**lastSyncedInAppTime** | **string** |  | [optional] [default to undefined]
**calendarAccountSyncStates** | **{ [key: string]: string; }** |  | [optional] [default to undefined]

## Example

```typescript
import { SyncInfo } from 'flowsavvy-sdk';

const instance: SyncInfo = {
    syncState,
    lastSyncedInAppTime,
    calendarAccountSyncStates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
