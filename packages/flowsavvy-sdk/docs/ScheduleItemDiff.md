# ScheduleItemDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletedScheduleItemIds** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**newOrModifiedScheduleItems** | [**Array&lt;ModifiedScheduleItem&gt;**](ModifiedScheduleItem.md) |  | [optional] [default to undefined]
**deletedItemIds** | **Array&lt;number&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ScheduleItemDiff } from 'flowsavvy-sdk';

const instance: ScheduleItemDiff = {
    deletedScheduleItemIds,
    newOrModifiedScheduleItems,
    deletedItemIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
