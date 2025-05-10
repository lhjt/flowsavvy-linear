# ItemApi

All URIs are relative to *https://my.flowsavvy.app*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiItemChangePartialCompleteStatusPost**](#apiitemchangepartialcompletestatuspost) | **POST** /api/Item/ChangePartialCompleteStatus | Changes the partial completion status of an item instance or a specific schedule item.|
|[**apiItemCreatePost**](#apiitemcreatepost) | **POST** /api/Item/Create | Creates a new item (task or event)|
|[**apiItemEditGet**](#apiitemeditget) | **GET** /api/Item/Edit | Gets an item for editing|
|[**apiItemEditPost**](#apiitemeditpost) | **POST** /api/Item/Edit | Edits an existing item|
|[**apiItemMultipleDeletePost**](#apiitemmultipledeletepost) | **POST** /api/Item/MultipleDelete | Deletes multiple items or instances|
|[**apiItemSearchGet**](#apiitemsearchget) | **GET** /api/item/search | Searches for items based on a query string and other filters.|

# **apiItemChangePartialCompleteStatusPost**
> ChangePartialCompleteStatusResponse apiItemChangePartialCompleteStatusPost()


### Example

```typescript
import {
    ItemApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

let itemId: number; //The ID of the item. (default to undefined)
let instanceId: number; //The instance ID of the item. (default to undefined)
let scheduleItemId: number; //The ID of the specific schedule item part being marked. (default to undefined)

const { status, data } = await apiInstance.apiItemChangePartialCompleteStatusPost(
    itemId,
    instanceId,
    scheduleItemId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **itemId** | [**number**] | The ID of the item. | defaults to undefined|
| **instanceId** | [**number**] | The instance ID of the item. | defaults to undefined|
| **scheduleItemId** | [**number**] | The ID of the specific schedule item part being marked. | defaults to undefined|


### Return type

**ChangePartialCompleteStatusResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Partial completion status changed successfully. Returns updated item info and schedule diff. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiItemCreatePost**
> ItemCreateResponse apiItemCreatePost()


### Example

```typescript
import {
    ItemApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

let id: number; //Item ID. 0 for new items. (optional) (default to undefined)
let InstanceID: number; //Instance ID of the item, if applicable. (optional) (default to undefined)
let Notes: string; //Notes for the item. (optional) (default to undefined)
let DueDateTime: string; //Due date and time for the item. (optional) (default to undefined)
let StartDateTime: string; //Start date and time for the item. (optional) (default to undefined)
let EndDateTime: string; //End date and time for the item. (optional) (default to undefined)
let DontStartUntil: string; //Do not start until this date and time. (optional) (default to undefined)
let TimeZone: string; //Timezone for the item. (optional) (default to undefined)
let IsAutoIgnored: boolean; //Whether the item is auto-ignored. (optional) (default to undefined)
let Title: string; //Title of the item. (optional) (default to undefined)
let ItemType: string; //Type of the item (e.g., task, event). (optional) (default to undefined)
let ProgressHours: number; //Progress in hours. (optional) (default to undefined)
let ProgressMinutes: number; //Progress in minutes. (optional) (default to undefined)
let minLengthTotalMinutes: number; //Minimum length of the item in total minutes. (optional) (default to undefined)
let BufferTimeBeforeHours: number; // (optional) (default to undefined)
let BufferTimeBeforeMinutes: number; // (optional) (default to undefined)
let BufferTimeAfterHours: number; // (optional) (default to undefined)
let BufferTimeAfterMinutes: number; // (optional) (default to undefined)
let Busy: boolean; //Whether the item marks time as busy. (optional) (default to undefined)
let FixedTime: boolean; //Whether the item has a fixed time. (optional) (default to undefined)
let AllDay: boolean; //Whether the item is an all-day event. (optional) (default to undefined)
let RepeatType: string; //Repeat type (e.g., Never, Daily, Weekly, Yearly). (optional) (default to undefined)
let Interval: number; // (optional) (default to undefined)
let Sunday: boolean; // (optional) (default to undefined)
let Monday: boolean; // (optional) (default to undefined)
let Tuesday: boolean; // (optional) (default to undefined)
let Wednesday: boolean; // (optional) (default to undefined)
let Thursday: boolean; // (optional) (default to undefined)
let Friday: boolean; // (optional) (default to undefined)
let Saturday: boolean; // (optional) (default to undefined)
let MonthlyType: string; // (optional) (default to undefined)
let Dates: string; // (optional) (default to undefined)
let MonthOrdinal: number; // (optional) (default to undefined)
let WeekDay: number; // (optional) (default to undefined)
let EndRepeatType: string; // (optional) (default to undefined)
let EndRepeatDate: string; // (optional) (default to undefined)
let NumOccurrences: number; // (optional) (default to undefined)
let priority: number; //Priority of the item. (optional) (default to undefined)
let customColor: string; //Custom color for the item (hex code). (optional) (default to undefined)
let calendarId: number; //ID of the calendar this item belongs to. (optional) (default to undefined)
let timeProfileId: number; //ID of the time profile associated with this item. (optional) (default to undefined)
let tagIds: string; //Comma-separated string of tag IDs for create/update. (optional) (default to undefined)
let Location: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiItemCreatePost(
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
    tagIds,
    Location
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item ID. 0 for new items. | (optional) defaults to undefined|
| **InstanceID** | [**number**] | Instance ID of the item, if applicable. | (optional) defaults to undefined|
| **Notes** | [**string**] | Notes for the item. | (optional) defaults to undefined|
| **DueDateTime** | [**string**] | Due date and time for the item. | (optional) defaults to undefined|
| **StartDateTime** | [**string**] | Start date and time for the item. | (optional) defaults to undefined|
| **EndDateTime** | [**string**] | End date and time for the item. | (optional) defaults to undefined|
| **DontStartUntil** | [**string**] | Do not start until this date and time. | (optional) defaults to undefined|
| **TimeZone** | [**string**] | Timezone for the item. | (optional) defaults to undefined|
| **IsAutoIgnored** | [**boolean**] | Whether the item is auto-ignored. | (optional) defaults to undefined|
| **Title** | [**string**] | Title of the item. | (optional) defaults to undefined|
| **ItemType** | [**string**] | Type of the item (e.g., task, event). | (optional) defaults to undefined|
| **ProgressHours** | [**number**] | Progress in hours. | (optional) defaults to undefined|
| **ProgressMinutes** | [**number**] | Progress in minutes. | (optional) defaults to undefined|
| **minLengthTotalMinutes** | [**number**] | Minimum length of the item in total minutes. | (optional) defaults to undefined|
| **BufferTimeBeforeHours** | [**number**] |  | (optional) defaults to undefined|
| **BufferTimeBeforeMinutes** | [**number**] |  | (optional) defaults to undefined|
| **BufferTimeAfterHours** | [**number**] |  | (optional) defaults to undefined|
| **BufferTimeAfterMinutes** | [**number**] |  | (optional) defaults to undefined|
| **Busy** | [**boolean**] | Whether the item marks time as busy. | (optional) defaults to undefined|
| **FixedTime** | [**boolean**] | Whether the item has a fixed time. | (optional) defaults to undefined|
| **AllDay** | [**boolean**] | Whether the item is an all-day event. | (optional) defaults to undefined|
| **RepeatType** | [**string**] | Repeat type (e.g., Never, Daily, Weekly, Yearly). | (optional) defaults to undefined|
| **Interval** | [**number**] |  | (optional) defaults to undefined|
| **Sunday** | [**boolean**] |  | (optional) defaults to undefined|
| **Monday** | [**boolean**] |  | (optional) defaults to undefined|
| **Tuesday** | [**boolean**] |  | (optional) defaults to undefined|
| **Wednesday** | [**boolean**] |  | (optional) defaults to undefined|
| **Thursday** | [**boolean**] |  | (optional) defaults to undefined|
| **Friday** | [**boolean**] |  | (optional) defaults to undefined|
| **Saturday** | [**boolean**] |  | (optional) defaults to undefined|
| **MonthlyType** | [**string**] |  | (optional) defaults to undefined|
| **Dates** | [**string**] |  | (optional) defaults to undefined|
| **MonthOrdinal** | [**number**] |  | (optional) defaults to undefined|
| **WeekDay** | [**number**] |  | (optional) defaults to undefined|
| **EndRepeatType** | [**string**] |  | (optional) defaults to undefined|
| **EndRepeatDate** | [**string**] |  | (optional) defaults to undefined|
| **NumOccurrences** | [**number**] |  | (optional) defaults to undefined|
| **priority** | [**number**] | Priority of the item. | (optional) defaults to undefined|
| **customColor** | [**string**] | Custom color for the item (hex code). | (optional) defaults to undefined|
| **calendarId** | [**number**] | ID of the calendar this item belongs to. | (optional) defaults to undefined|
| **timeProfileId** | [**number**] | ID of the time profile associated with this item. | (optional) defaults to undefined|
| **tagIds** | [**string**] | Comma-separated string of tag IDs for create/update. | (optional) defaults to undefined|
| **Location** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ItemCreateResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Item created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiItemEditGet**
> ItemEditGetDataResponse apiItemEditGet()


### Example

```typescript
import {
    ItemApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

let itemId: number; // (default to undefined)
let instanceId: number; // (default to undefined)

const { status, data } = await apiInstance.apiItemEditGet(
    itemId,
    instanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **itemId** | [**number**] |  | defaults to undefined|
| **instanceId** | [**number**] |  | defaults to undefined|


### Return type

**ItemEditGetDataResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Item data for editing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiItemEditPost**
> ItemEditResponse apiItemEditPost()


### Example

```typescript
import {
    ItemApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

let id: number; //Item ID. 0 for new items. (default to undefined)
let InstanceID: number; //Instance ID of the item, if applicable. (optional) (default to undefined)
let Notes: string; //Notes for the item. (optional) (default to undefined)
let DueDateTime: string; //Due date and time for the item. (optional) (default to undefined)
let StartDateTime: string; //Start date and time for the item. (optional) (default to undefined)
let EndDateTime: string; //End date and time for the item. (optional) (default to undefined)
let DontStartUntil: string; //Do not start until this date and time. (optional) (default to undefined)
let TimeZone: string; //Timezone for the item. (optional) (default to undefined)
let IsAutoIgnored: boolean; //Whether the item is auto-ignored. (optional) (default to undefined)
let Title: string; //Title of the item. (optional) (default to undefined)
let ItemType: string; //Type of the item (e.g., task, event). (optional) (default to undefined)
let ProgressHours: number; //Progress in hours. (optional) (default to undefined)
let ProgressMinutes: number; //Progress in minutes. (optional) (default to undefined)
let minLengthTotalMinutes: number; //Minimum length of the item in total minutes. (optional) (default to undefined)
let BufferTimeBeforeHours: number; // (optional) (default to undefined)
let BufferTimeBeforeMinutes: number; // (optional) (default to undefined)
let BufferTimeAfterHours: number; // (optional) (default to undefined)
let BufferTimeAfterMinutes: number; // (optional) (default to undefined)
let Busy: boolean; //Whether the item marks time as busy. (optional) (default to undefined)
let FixedTime: boolean; //Whether the item has a fixed time. (optional) (default to undefined)
let AllDay: boolean; //Whether the item is an all-day event. (optional) (default to undefined)
let RepeatType: string; //Repeat type (e.g., Never, Daily, Weekly, Yearly). (optional) (default to undefined)
let Interval: number; // (optional) (default to undefined)
let Sunday: boolean; // (optional) (default to undefined)
let Monday: boolean; // (optional) (default to undefined)
let Tuesday: boolean; // (optional) (default to undefined)
let Wednesday: boolean; // (optional) (default to undefined)
let Thursday: boolean; // (optional) (default to undefined)
let Friday: boolean; // (optional) (default to undefined)
let Saturday: boolean; // (optional) (default to undefined)
let MonthlyType: string; // (optional) (default to undefined)
let Dates: string; // (optional) (default to undefined)
let MonthOrdinal: number; // (optional) (default to undefined)
let WeekDay: number; // (optional) (default to undefined)
let EndRepeatType: string; // (optional) (default to undefined)
let EndRepeatDate: string; // (optional) (default to undefined)
let NumOccurrences: number; // (optional) (default to undefined)
let priority: number; //Priority of the item. (optional) (default to undefined)
let customColor: string; //Custom color for the item (hex code). (optional) (default to undefined)
let calendarId: number; //ID of the calendar this item belongs to. (optional) (default to undefined)
let timeProfileId: number; //ID of the time profile associated with this item. (optional) (default to undefined)
let tagIds: string; //Comma-separated string of tag IDs for create/update. (optional) (default to undefined)
let Location: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiItemEditPost(
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
    tagIds,
    Location
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Item ID. 0 for new items. | defaults to undefined|
| **InstanceID** | [**number**] | Instance ID of the item, if applicable. | (optional) defaults to undefined|
| **Notes** | [**string**] | Notes for the item. | (optional) defaults to undefined|
| **DueDateTime** | [**string**] | Due date and time for the item. | (optional) defaults to undefined|
| **StartDateTime** | [**string**] | Start date and time for the item. | (optional) defaults to undefined|
| **EndDateTime** | [**string**] | End date and time for the item. | (optional) defaults to undefined|
| **DontStartUntil** | [**string**] | Do not start until this date and time. | (optional) defaults to undefined|
| **TimeZone** | [**string**] | Timezone for the item. | (optional) defaults to undefined|
| **IsAutoIgnored** | [**boolean**] | Whether the item is auto-ignored. | (optional) defaults to undefined|
| **Title** | [**string**] | Title of the item. | (optional) defaults to undefined|
| **ItemType** | [**string**] | Type of the item (e.g., task, event). | (optional) defaults to undefined|
| **ProgressHours** | [**number**] | Progress in hours. | (optional) defaults to undefined|
| **ProgressMinutes** | [**number**] | Progress in minutes. | (optional) defaults to undefined|
| **minLengthTotalMinutes** | [**number**] | Minimum length of the item in total minutes. | (optional) defaults to undefined|
| **BufferTimeBeforeHours** | [**number**] |  | (optional) defaults to undefined|
| **BufferTimeBeforeMinutes** | [**number**] |  | (optional) defaults to undefined|
| **BufferTimeAfterHours** | [**number**] |  | (optional) defaults to undefined|
| **BufferTimeAfterMinutes** | [**number**] |  | (optional) defaults to undefined|
| **Busy** | [**boolean**] | Whether the item marks time as busy. | (optional) defaults to undefined|
| **FixedTime** | [**boolean**] | Whether the item has a fixed time. | (optional) defaults to undefined|
| **AllDay** | [**boolean**] | Whether the item is an all-day event. | (optional) defaults to undefined|
| **RepeatType** | [**string**] | Repeat type (e.g., Never, Daily, Weekly, Yearly). | (optional) defaults to undefined|
| **Interval** | [**number**] |  | (optional) defaults to undefined|
| **Sunday** | [**boolean**] |  | (optional) defaults to undefined|
| **Monday** | [**boolean**] |  | (optional) defaults to undefined|
| **Tuesday** | [**boolean**] |  | (optional) defaults to undefined|
| **Wednesday** | [**boolean**] |  | (optional) defaults to undefined|
| **Thursday** | [**boolean**] |  | (optional) defaults to undefined|
| **Friday** | [**boolean**] |  | (optional) defaults to undefined|
| **Saturday** | [**boolean**] |  | (optional) defaults to undefined|
| **MonthlyType** | [**string**] |  | (optional) defaults to undefined|
| **Dates** | [**string**] |  | (optional) defaults to undefined|
| **MonthOrdinal** | [**number**] |  | (optional) defaults to undefined|
| **WeekDay** | [**number**] |  | (optional) defaults to undefined|
| **EndRepeatType** | [**string**] |  | (optional) defaults to undefined|
| **EndRepeatDate** | [**string**] |  | (optional) defaults to undefined|
| **NumOccurrences** | [**number**] |  | (optional) defaults to undefined|
| **priority** | [**number**] | Priority of the item. | (optional) defaults to undefined|
| **customColor** | [**string**] | Custom color for the item (hex code). | (optional) defaults to undefined|
| **calendarId** | [**number**] | ID of the calendar this item belongs to. | (optional) defaults to undefined|
| **timeProfileId** | [**number**] | ID of the time profile associated with this item. | (optional) defaults to undefined|
| **tagIds** | [**string**] | Comma-separated string of tag IDs for create/update. | (optional) defaults to undefined|
| **Location** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ItemEditResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Item edited successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiItemMultipleDeletePost**
> MultipleDeleteResponse apiItemMultipleDeletePost()


### Example

```typescript
import {
    ItemApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

let serializedItemIdToInstanceIdsDict: string; //A JSON string representing a dictionary of item IDs to instance IDs. (default to undefined)
let deleteType: string; //Type of delete operation (e.g., deleteAll). (default to undefined)

const { status, data } = await apiInstance.apiItemMultipleDeletePost(
    serializedItemIdToInstanceIdsDict,
    deleteType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serializedItemIdToInstanceIdsDict** | [**string**] | A JSON string representing a dictionary of item IDs to instance IDs. | defaults to undefined|
| **deleteType** | [**string**] | Type of delete operation (e.g., deleteAll). | defaults to undefined|


### Return type

**MultipleDeleteResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Items deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiItemSearchGet**
> SearchResponseWrapper apiItemSearchGet()


### Example

```typescript
import {
    ItemApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ItemApi(configuration);

let query: string; //The search term to query items by. Can be \"all\" to fetch many items. (default to undefined)
let searchCompletedTasks: boolean; //Whether to include completed tasks in the search results. (default to undefined)
let getItemsAfterCursor: boolean; //Flag for pagination, typically true for initial load or next page. (default to undefined)
let takeFirst: boolean; //Flag for pagination, typically true for initial load. (default to undefined)
let batchSize: number; //The number of items to return per page. (default to undefined)

const { status, data } = await apiInstance.apiItemSearchGet(
    query,
    searchCompletedTasks,
    getItemsAfterCursor,
    takeFirst,
    batchSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | The search term to query items by. Can be \&quot;all\&quot; to fetch many items. | defaults to undefined|
| **searchCompletedTasks** | [**boolean**] | Whether to include completed tasks in the search results. | defaults to undefined|
| **getItemsAfterCursor** | [**boolean**] | Flag for pagination, typically true for initial load or next page. | defaults to undefined|
| **takeFirst** | [**boolean**] | Flag for pagination, typically true for initial load. | defaults to undefined|
| **batchSize** | [**number**] | The number of items to return per page. | defaults to undefined|


### Return type

**SearchResponseWrapper**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of items matching the search criteria, along with pagination info. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

