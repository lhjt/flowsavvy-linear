# InboxApi

All URIs are relative to *https://my.flowsavvy.app*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiInboxItemsGet**](#apiinboxitemsget) | **GET** /api/Inbox/Items | Gets inbox items|

# **apiInboxItemsGet**
> InboxItemsResponse apiInboxItemsGet()


### Example

```typescript
import {
    InboxApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new InboxApi(configuration);

const { status, data } = await apiInstance.apiInboxItemsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**InboxItemsResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of inbox items |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

