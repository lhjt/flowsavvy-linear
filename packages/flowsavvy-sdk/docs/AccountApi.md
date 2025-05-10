# AccountApi

All URIs are relative to *https://my.flowsavvy.app*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiAccountLoginPost**](#apiaccountloginpost) | **POST** /api/Account/Login | Logs in a user|

# **apiAccountLoginPost**
> ApiAccountLoginPost200Response apiAccountLoginPost()


### Example

```typescript
import {
    AccountApi,
    Configuration
} from 'flowsavvy-sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let Email: string; //User\\\'s email address. (default to undefined)
let Password: string; //User\\\'s password. (default to undefined)
let clientTimeZone: string; //Client\\\'s timezone. (optional) (default to undefined)

const { status, data } = await apiInstance.apiAccountLoginPost(
    Email,
    Password,
    clientTimeZone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **Email** | [**string**] | User\\\&#39;s email address. | defaults to undefined|
| **Password** | [**string**] | User\\\&#39;s password. | defaults to undefined|
| **clientTimeZone** | [**string**] | Client\\\&#39;s timezone. | (optional) defaults to undefined|


### Return type

**ApiAccountLoginPost200Response**

### Authorization

[csrfTokenHeader](../README.md#csrfTokenHeader), [cookieAuthAntiforgery](../README.md#cookieAuthAntiforgery), [cookieAuthIdentity](../README.md#cookieAuthIdentity)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful. Auth cookies are set. |  * Set-Cookie -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

