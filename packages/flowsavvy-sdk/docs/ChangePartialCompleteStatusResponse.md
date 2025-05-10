# ChangePartialCompleteStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wholeTaskCompleted** | **boolean** |  | [optional] [default to undefined]
**itemShiftInfoMap** | [**{ [key: string]: ItemShiftInfoMapValue; }**](ItemShiftInfoMapValue.md) |  | [optional] [default to undefined]
**differentVersions** | [**DifferentVersions**](DifferentVersions.md) |  | [optional] [default to undefined]
**scheduleItemDiff** | [**ScheduleItemDiff**](ScheduleItemDiff.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChangePartialCompleteStatusResponse } from 'flowsavvy-sdk';

const instance: ChangePartialCompleteStatusResponse = {
    wholeTaskCompleted,
    itemShiftInfoMap,
    differentVersions,
    scheduleItemDiff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
