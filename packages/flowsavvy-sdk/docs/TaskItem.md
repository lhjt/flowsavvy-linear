# TaskItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tagIds** | **string** | Comma-separated string of tag IDs for create/update. | [optional] [default to undefined]
**Completed** | **boolean** |  | [optional] [default to undefined]
**AccessLevel** | **number** |  | [optional] [default to undefined]
**Color** | **string** | Resolved color of the item (e.g., \&quot;red\&quot;, \&quot;green\&quot;). | [optional] [default to undefined]
**Changed** | **boolean** |  | [optional] [default to undefined]
**upstreamItemInfos** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**downstreamItemInfos** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**SortTime** | **string** |  | [optional] [default to undefined]
**ParentItemID** | **number** |  | [optional] [default to undefined]
**ParentItem** | **object** |  | [optional] [default to undefined]
**LastMovedUtc** | **string** |  | [optional] [default to undefined]
**id** | **number** | Item ID. 0 for new items. | [optional] [default to undefined]
**InstanceID** | **number** | Instance ID of the item, if applicable. | [optional] [default to undefined]
**Notes** | **string** | Notes for the item. | [optional] [default to undefined]
**DueDateTime** | **string** | Due date and time for the item. | [optional] [default to undefined]
**StartDateTime** | **string** | Start date and time for the item. | [optional] [default to undefined]
**EndDateTime** | **string** | End date and time for the item. | [optional] [default to undefined]
**DontStartUntil** | **string** | Do not start until this date and time. | [optional] [default to undefined]
**TimeZone** | **string** | Timezone for the item. | [optional] [default to undefined]
**IsAutoIgnored** | **boolean** | Whether the item is auto-ignored. | [optional] [default to undefined]
**Title** | **string** | Title of the item. | [optional] [default to undefined]
**ItemType** | **string** | Type of the item (e.g., task, event). | [optional] [default to undefined]
**ProgressHours** | **number** | Progress in hours. | [optional] [default to undefined]
**ProgressMinutes** | **number** | Progress in minutes. | [optional] [default to undefined]
**minLengthTotalMinutes** | **number** | Minimum length of the item in total minutes. | [optional] [default to undefined]
**BufferTimeBeforeHours** | **number** |  | [optional] [default to undefined]
**BufferTimeBeforeMinutes** | **number** |  | [optional] [default to undefined]
**BufferTimeAfterHours** | **number** |  | [optional] [default to undefined]
**BufferTimeAfterMinutes** | **number** |  | [optional] [default to undefined]
**Busy** | **boolean** | Whether the item marks time as busy. | [optional] [default to undefined]
**FixedTime** | **boolean** | Whether the item has a fixed time. | [optional] [default to undefined]
**AllDay** | **boolean** | Whether the item is an all-day event. | [optional] [default to undefined]
**RepeatType** | **string** | Repeat type (e.g., Never, Daily, Weekly, Yearly). | [optional] [default to undefined]
**Interval** | **number** |  | [optional] [default to undefined]
**Sunday** | **boolean** |  | [optional] [default to undefined]
**Monday** | **boolean** |  | [optional] [default to undefined]
**Tuesday** | **boolean** |  | [optional] [default to undefined]
**Wednesday** | **boolean** |  | [optional] [default to undefined]
**Thursday** | **boolean** |  | [optional] [default to undefined]
**Friday** | **boolean** |  | [optional] [default to undefined]
**Saturday** | **boolean** |  | [optional] [default to undefined]
**MonthlyType** | **string** |  | [optional] [default to undefined]
**Dates** | **string** |  | [optional] [default to undefined]
**MonthOrdinal** | **number** |  | [optional] [default to undefined]
**WeekDay** | **number** |  | [optional] [default to undefined]
**EndRepeatType** | **string** |  | [optional] [default to undefined]
**EndRepeatDate** | **string** |  | [optional] [default to undefined]
**NumOccurrences** | **number** |  | [optional] [default to undefined]
**priority** | **number** | Priority of the item. | [optional] [default to undefined]
**customColor** | **string** | Custom color for the item (hex code). | [optional] [default to undefined]
**calendarId** | **number** | ID of the calendar this item belongs to. | [optional] [default to undefined]
**timeProfileId** | **number** | ID of the time profile associated with this item. | [optional] [default to undefined]
**Location** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TaskItem } from 'flowsavvy-sdk';

const instance: TaskItem = {
    tagIds,
    Completed,
    AccessLevel,
    Color,
    Changed,
    upstreamItemInfos,
    downstreamItemInfos,
    SortTime,
    ParentItemID,
    ParentItem,
    LastMovedUtc,
    id,
    InstanceID,
    Notes,
    DueDateTime,
    StartDateTime,
    EndDateTime,
    DontStartUntil,
    TimeZone,
    IsAutoIgnored,
    Title,
    ItemType,
    ProgressHours,
    ProgressMinutes,
    minLengthTotalMinutes,
    BufferTimeBeforeHours,
    BufferTimeBeforeMinutes,
    BufferTimeAfterHours,
    BufferTimeAfterMinutes,
    Busy,
    FixedTime,
    AllDay,
    RepeatType,
    Interval,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    MonthlyType,
    Dates,
    MonthOrdinal,
    WeekDay,
    EndRepeatType,
    EndRepeatDate,
    NumOccurrences,
    priority,
    customColor,
    calendarId,
    timeProfileId,
    Location,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
