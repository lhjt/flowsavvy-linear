# ToDoListResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**Array&lt;TaskItem&gt;**](TaskItem.md) |  | [optional] [default to undefined]
**oldCompletedTasksHidden** | **boolean** |  | [optional] [default to undefined]
**hasNextPage** | **boolean** |  | [optional] [default to undefined]
**hasPreviousPage** | **boolean** |  | [optional] [default to undefined]
**repeatingAutoScheduledTaskIds** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**tasksMissingDeadlines** | **{ [key: string]: boolean; }** |  | [optional] [default to undefined]

## Example

```typescript
import { ToDoListResponseData } from 'flowsavvy-sdk';

const instance: ToDoListResponseData = {
    tasks,
    oldCompletedTasksHidden,
    hasNextPage,
    hasPreviousPage,
    repeatingAutoScheduledTaskIds,
    tasksMissingDeadlines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
