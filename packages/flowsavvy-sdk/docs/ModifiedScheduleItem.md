# ModifiedScheduleItem

Represents a schedule item that has been modified, often returned in diffs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemID** | **number** | Often 0 if the primary ID is within the nested Item object. | [optional] [default to undefined]
**Item** | [**ItemFull**](ItemFull.md) |  | [optional] [default to undefined]
**InstanceID** | **number** |  | [optional] [default to undefined]
**StartTime** | **string** |  | [optional] [default to undefined]
**EndTime** | **string** |  | [optional] [default to undefined]
**Color** | **string** |  | [optional] [default to undefined]
**ThisPartCompleted** | **boolean** |  | [optional] [default to undefined]
**InstanceStartDateTime** | **string** |  | [optional] [default to undefined]
**InstanceEndDateTime** | **string** |  | [optional] [default to undefined]
**id** | **number** | The ID of this specific schedule item instance/part. | [optional] [default to undefined]

## Example

```typescript
import { ModifiedScheduleItem } from 'flowsavvy-sdk';

const instance: ModifiedScheduleItem = {
    ItemID,
    Item,
    InstanceID,
    StartTime,
    EndTime,
    Color,
    ThisPartCompleted,
    InstanceStartDateTime,
    InstanceEndDateTime,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
