# TagApi

All URIs are relative to *https://my.flowsavvy.app*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiTagListGet**](#apitaglistget) | **GET** /api/tag/list | Gets the list of tags|

# **apiTagListGet**
> TagListResponse apiTagListGet()


### Example

```typescript
import {
    TagApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

const { status, data } = await apiInstance.apiTagListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TagListResponse**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of tags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

