# ScheduleApi

All URIs are relative to *https://my.flowsavvy.app*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiScheduleAntiForgeryTokenGet**](#apischeduleantiforgerytokenget) | **GET** /api/Schedule/AntiForgeryToken | Retrieves an AntiForgeryToken|
|[**apiScheduleGetScheduleGet**](#apischedulegetscheduleget) | **GET** /api/Schedule/GetSchedule | Gets the schedule items|
|[**apiScheduleGetToDoListContentGet**](#apischedulegettodolistcontentget) | **GET** /api/Schedule/GetToDoListContent | Gets ToDo list content|
|[**apiScheduleGetUpdatesGet**](#apischedulegetupdatesget) | **GET** /api/Schedule/GetUpdates | Gets updates for various entities based on last known versions|
|[**apiScheduleInitialDataGet**](#apischeduleinitialdataget) | **GET** /api/Schedule/InitialData | Gets initial data for the schedule view|
|[**apiScheduleIsAuthenticatedGet**](#apischeduleisauthenticatedget) | **GET** /api/schedule/isAuthenticated | Checks if the current user is authenticated|
|[**apiScheduleLogAmplitudeEventPost**](#apischedulelogamplitudeeventpost) | **POST** /api/Schedule/LogAmplitudeEvent | Logs an event to Amplitude|
|[**apiScheduleRecalculatePost**](#apischedulerecalculatepost) | **POST** /api/Schedule/Recalculate | Recalculates the schedule|

# **apiScheduleAntiForgeryTokenGet**
> string apiScheduleAntiForgeryTokenGet()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

const { status, data } = await apiInstance.apiScheduleAntiForgeryTokenGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved AntiForgeryToken. The token is in the HTML body and also set as a cookie. |  * Set-Cookie -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiScheduleGetScheduleGet**
> GetScheduleResponse apiScheduleGetScheduleGet()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let scheduleViewType: '7days' | '1day' | 'list'; // (default to undefined)

const { status, data } = await apiInstance.apiScheduleGetScheduleGet(
    scheduleViewType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleViewType** | [**&#39;7days&#39; | &#39;1day&#39; | &#39;list&#39;**]**Array<&#39;7days&#39; &#124; &#39;1day&#39; &#124; &#39;list&#39;>** |  | defaults to undefined|


### Return type

**GetScheduleResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Schedule data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiScheduleGetToDoListContentGet**
> GetToDoListContentResponse apiScheduleGetToDoListContentGet()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let toDoListType: 'ToDo' | 'Done'; // (default to undefined)
let calendarFilterId: number; // (optional) (default to undefined)
let tagFilterId: number; // (optional) (default to undefined)
let isMissingDeadlineFilterOn: boolean; // (optional) (default to undefined)
let getItemsAfterCursor: boolean; // (optional) (default to undefined)
let takeFirst: boolean; // (optional) (default to undefined)
let batchSize: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiScheduleGetToDoListContentGet(
    toDoListType,
    calendarFilterId,
    tagFilterId,
    isMissingDeadlineFilterOn,
    getItemsAfterCursor,
    takeFirst,
    batchSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toDoListType** | [**&#39;ToDo&#39; | &#39;Done&#39;**]**Array<&#39;ToDo&#39; &#124; &#39;Done&#39;>** |  | defaults to undefined|
| **calendarFilterId** | [**number**] |  | (optional) defaults to undefined|
| **tagFilterId** | [**number**] |  | (optional) defaults to undefined|
| **isMissingDeadlineFilterOn** | [**boolean**] |  | (optional) defaults to undefined|
| **getItemsAfterCursor** | [**boolean**] |  | (optional) defaults to undefined|
| **takeFirst** | [**boolean**] |  | (optional) defaults to undefined|
| **batchSize** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetToDoListContentResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ToDo list content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiScheduleGetUpdatesGet**
> GetUpdatesResponse apiScheduleGetUpdatesGet()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let Items: string; // (optional) (default to undefined)
let Calendars: string; // (optional) (default to undefined)
let Subscription: string; // (optional) (default to undefined)
let Inbox: string; // (optional) (default to undefined)
let ItemSettings: string; // (optional) (default to undefined)
let Tags: string; // (optional) (default to undefined)
let UserSettings: string; // (optional) (default to undefined)
let TimeProfiles: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiScheduleGetUpdatesGet(
    Items,
    Calendars,
    Subscription,
    Inbox,
    ItemSettings,
    Tags,
    UserSettings,
    TimeProfiles
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **Items** | [**string**] |  | (optional) defaults to undefined|
| **Calendars** | [**string**] |  | (optional) defaults to undefined|
| **Subscription** | [**string**] |  | (optional) defaults to undefined|
| **Inbox** | [**string**] |  | (optional) defaults to undefined|
| **ItemSettings** | [**string**] |  | (optional) defaults to undefined|
| **Tags** | [**string**] |  | (optional) defaults to undefined|
| **UserSettings** | [**string**] |  | (optional) defaults to undefined|
| **TimeProfiles** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetUpdatesResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sync information and differing versions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiScheduleInitialDataGet**
> InitialDataResponse apiScheduleInitialDataGet()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let clientTimeZone: string; // (default to undefined)

const { status, data } = await apiInstance.apiScheduleInitialDataGet(
    clientTimeZone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientTimeZone** | [**string**] |  | defaults to undefined|


### Return type

**InitialDataResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Initial schedule data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiScheduleIsAuthenticatedGet**
> IsAuthenticatedResponse apiScheduleIsAuthenticatedGet()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

const { status, data } = await apiInstance.apiScheduleIsAuthenticatedGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IsAuthenticatedResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Authentication status |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiScheduleLogAmplitudeEventPost**
> apiScheduleLogAmplitudeEventPost()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let eventName: string; // (default to undefined)
let date: string; // (default to undefined)

const { status, data } = await apiInstance.apiScheduleLogAmplitudeEventPost(
    eventName,
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventName** | [**string**] |  | defaults to undefined|
| **date** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Event logged successfully (empty response body) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiScheduleRecalculatePost**
> RecalculateResponse apiScheduleRecalculatePost()


### Example

```typescript
import {
    ScheduleApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new ScheduleApi(configuration);

let contentType: string; // (default to undefined)
let startDate: string; // (default to undefined)
let isResolutionCenterOpen: boolean; // (default to undefined)
let force: boolean; // (default to undefined)

const { status, data } = await apiInstance.apiScheduleRecalculatePost(
    contentType,
    startDate,
    isResolutionCenterOpen,
    force
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | defaults to undefined|
| **startDate** | [**string**] |  | defaults to undefined|
| **isResolutionCenterOpen** | [**boolean**] |  | defaults to undefined|
| **force** | [**boolean**] |  | defaults to undefined|


### Return type

**RecalculateResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recalculated schedule and ToDo list data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

