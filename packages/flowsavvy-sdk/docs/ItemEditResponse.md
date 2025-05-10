# ItemEditResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numRepeatingAutoScheduledTasks** | **number** |  | [optional] [default to undefined]
**itemShiftInfoMap** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**differentVersions** | [**DifferentVersions**](DifferentVersions.md) |  | [optional] [default to undefined]
**scheduleItemDiff** | [**ScheduleItemDiff**](ScheduleItemDiff.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ItemEditResponse } from 'flowsavvy-sdk';

const instance: ItemEditResponse = {
    numRepeatingAutoScheduledTasks,
    itemShiftInfoMap,
    differentVersions,
    scheduleItemDiff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
