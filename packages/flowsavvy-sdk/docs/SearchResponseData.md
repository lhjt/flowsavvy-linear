# SearchResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;ItemFull&gt;**](ItemFull.md) |  | [optional] [default to undefined]
**oldCompletedTasksHidden** | **boolean** |  | [optional] [default to undefined]
**hasNextPage** | **boolean** |  | [optional] [default to undefined]
**hasPreviousPage** | **boolean** |  | [optional] [default to undefined]
**repeatingAutoScheduledTaskIds** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**tasksMissingDeadlines** | **{ [key: string]: boolean; }** |  | [optional] [default to undefined]

## Example

```typescript
import { SearchResponseData } from 'flowsavvy-sdk';

const instance: SearchResponseData = {
    items,
    oldCompletedTasksHidden,
    hasNextPage,
    hasPreviousPage,
    repeatingAutoScheduledTaskIds,
    tasksMissingDeadlines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
