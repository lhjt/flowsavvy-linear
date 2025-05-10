# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**identityUserId** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**userHash** | **string** |  | [optional] [default to undefined]
**isEmailConfirmed** | **boolean** |  | [optional] [default to undefined]
**dateCreatedUtc** | **string** |  | [optional] [default to undefined]
**actionHistory** | [**UserActionHistory**](UserActionHistory.md) |  | [optional] [default to undefined]

## Example

```typescript
import { User } from 'flowsavvy-sdk';

const instance: User = {
    id,
    identityUserId,
    email,
    userHash,
    isEmailConfirmed,
    dateCreatedUtc,
    actionHistory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
