# CalendarApi

All URIs are relative to *https://my.flowsavvy.app*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiCalendarInfoGet**](#apicalendarinfoget) | **GET** /api/Calendar/Info | Gets information about the user\&#39;s calendars and calendar accounts.|

# **apiCalendarInfoGet**
> CalendarInfoResponse apiCalendarInfoGet()


### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

const { status, data } = await apiInstance.apiCalendarInfoGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CalendarInfoResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successfully retrieved calendar and account information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

