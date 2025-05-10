# ItemEditGetDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | [**ItemFull**](ItemFull.md) |  | [optional] [default to undefined]
**schedulingStatusInfo** | [**SchedulingStatusInfo**](SchedulingStatusInfo.md) |  | [optional] [default to undefined]
**scheduleItems** | [**Array&lt;ScheduleItemData&gt;**](ScheduleItemData.md) |  | [optional] [default to undefined]
**repeatingAutoScheduledTaskIds** | **Array&lt;number&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ItemEditGetDataResponse } from 'flowsavvy-sdk';

const instance: ItemEditGetDataResponse = {
    item,
    schedulingStatusInfo,
    scheduleItems,
    repeatingAutoScheduledTaskIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
