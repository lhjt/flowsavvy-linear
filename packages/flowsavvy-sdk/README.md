## flowsavvy-sdk@v1

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install flowsavvy-sdk@v1 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://my.flowsavvy.app*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**apiAccountLoginPost**](docs/AccountApi.md#apiaccountloginpost) | **POST** /api/Account/Login | Logs in a user
*CalendarApi* | [**apiCalendarInfoGet**](docs/CalendarApi.md#apicalendarinfoget) | **GET** /api/Calendar/Info | Gets information about the user\&#39;s calendars and calendar accounts.
*InboxApi* | [**apiInboxItemsGet**](docs/InboxApi.md#apiinboxitemsget) | **GET** /api/Inbox/Items | Gets inbox items
*ItemApi* | [**apiItemChangePartialCompleteStatusPost**](docs/ItemApi.md#apiitemchangepartialcompletestatuspost) | **POST** /api/Item/ChangePartialCompleteStatus | Changes the partial completion status of an item instance or a specific schedule item.
*ItemApi* | [**apiItemCreatePost**](docs/ItemApi.md#apiitemcreatepost) | **POST** /api/Item/Create | Creates a new item (task or event)
*ItemApi* | [**apiItemEditGet**](docs/ItemApi.md#apiitemeditget) | **GET** /api/Item/Edit | Gets an item for editing
*ItemApi* | [**apiItemEditPost**](docs/ItemApi.md#apiitemeditpost) | **POST** /api/Item/Edit | Edits an existing item
*ItemApi* | [**apiItemMultipleDeletePost**](docs/ItemApi.md#apiitemmultipledeletepost) | **POST** /api/Item/MultipleDelete | Deletes multiple items or instances
*ItemApi* | [**apiItemSearchGet**](docs/ItemApi.md#apiitemsearchget) | **GET** /api/item/search | Searches for items based on a query string and other filters.
*ScheduleApi* | [**apiScheduleAntiForgeryTokenGet**](docs/ScheduleApi.md#apischeduleantiforgerytokenget) | **GET** /api/Schedule/AntiForgeryToken | Retrieves an AntiForgeryToken
*ScheduleApi* | [**apiScheduleGetScheduleGet**](docs/ScheduleApi.md#apischedulegetscheduleget) | **GET** /api/Schedule/GetSchedule | Gets the schedule items
*ScheduleApi* | [**apiScheduleGetToDoListContentGet**](docs/ScheduleApi.md#apischedulegettodolistcontentget) | **GET** /api/Schedule/GetToDoListContent | Gets ToDo list content
*ScheduleApi* | [**apiScheduleGetUpdatesGet**](docs/ScheduleApi.md#apischedulegetupdatesget) | **GET** /api/Schedule/GetUpdates | Gets updates for various entities based on last known versions
*ScheduleApi* | [**apiScheduleInitialDataGet**](docs/ScheduleApi.md#apischeduleinitialdataget) | **GET** /api/Schedule/InitialData | Gets initial data for the schedule view
*ScheduleApi* | [**apiScheduleIsAuthenticatedGet**](docs/ScheduleApi.md#apischeduleisauthenticatedget) | **GET** /api/schedule/isAuthenticated | Checks if the current user is authenticated
*ScheduleApi* | [**apiScheduleLogAmplitudeEventPost**](docs/ScheduleApi.md#apischedulelogamplitudeeventpost) | **POST** /api/Schedule/LogAmplitudeEvent | Logs an event to Amplitude
*ScheduleApi* | [**apiScheduleRecalculatePost**](docs/ScheduleApi.md#apischedulerecalculatepost) | **POST** /api/Schedule/Recalculate | Recalculates the schedule
*TagApi* | [**apiTagListGet**](docs/TagApi.md#apitaglistget) | **GET** /api/tag/list | Gets the list of tags


### Documentation For Models

 - [AllDayEvent](docs/AllDayEvent.md)
 - [ApiAccountLoginPost200Response](docs/ApiAccountLoginPost200Response.md)
 - [Calendar](docs/Calendar.md)
 - [CalendarAccount](docs/CalendarAccount.md)
 - [CalendarInfoResponse](docs/CalendarInfoResponse.md)
 - [ChangePartialCompleteStatusResponse](docs/ChangePartialCompleteStatusResponse.md)
 - [DifferentVersions](docs/DifferentVersions.md)
 - [FeatureFlagOverrideInfo](docs/FeatureFlagOverrideInfo.md)
 - [GetScheduleResponse](docs/GetScheduleResponse.md)
 - [GetToDoListContentResponse](docs/GetToDoListContentResponse.md)
 - [GetUpdatesResponse](docs/GetUpdatesResponse.md)
 - [InboxItem](docs/InboxItem.md)
 - [InboxItemsResponse](docs/InboxItemsResponse.md)
 - [InitialDataResponse](docs/InitialDataResponse.md)
 - [IsAuthenticatedResponse](docs/IsAuthenticatedResponse.md)
 - [ItemCore](docs/ItemCore.md)
 - [ItemCreateResponse](docs/ItemCreateResponse.md)
 - [ItemEditGetDataResponse](docs/ItemEditGetDataResponse.md)
 - [ItemEditResponse](docs/ItemEditResponse.md)
 - [ItemFull](docs/ItemFull.md)
 - [ItemSettings](docs/ItemSettings.md)
 - [ItemShiftInfoMapValue](docs/ItemShiftInfoMapValue.md)
 - [LoginSuccessResponse](docs/LoginSuccessResponse.md)
 - [ModifiedScheduleItem](docs/ModifiedScheduleItem.md)
 - [MultipleDeleteResponse](docs/MultipleDeleteResponse.md)
 - [OnboardingInfo](docs/OnboardingInfo.md)
 - [RecalculateResponse](docs/RecalculateResponse.md)
 - [RecalculateResponseDisplayDTOs](docs/RecalculateResponseDisplayDTOs.md)
 - [ScheduleItem](docs/ScheduleItem.md)
 - [ScheduleItemData](docs/ScheduleItemData.md)
 - [ScheduleItemDiff](docs/ScheduleItemDiff.md)
 - [ScheduleResponseData](docs/ScheduleResponseData.md)
 - [SchedulingStatusInfo](docs/SchedulingStatusInfo.md)
 - [SearchResponseData](docs/SearchResponseData.md)
 - [SearchResponseWrapper](docs/SearchResponseWrapper.md)
 - [Subscription](docs/Subscription.md)
 - [SyncInfo](docs/SyncInfo.md)
 - [Tag](docs/Tag.md)
 - [TagListResponse](docs/TagListResponse.md)
 - [TaskItem](docs/TaskItem.md)
 - [TimeProfile](docs/TimeProfile.md)
 - [ToDoListResponseData](docs/ToDoListResponseData.md)
 - [User](docs/User.md)
 - [UserActionHistory](docs/UserActionHistory.md)
 - [UserSettings](docs/UserSettings.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="cookieAuthIdentity"></a>
### cookieAuthIdentity

- **Type**: API key
- **API key parameter name**: Identity.Cookie
- **Location**: 

<a id="cookieAuthAntiforgery"></a>
### cookieAuthAntiforgery

- **Type**: API key
- **API key parameter name**: .AspNetCore.Antiforgery.lQyFYtd3Sfw
- **Location**: 

<a id="csrfTokenHeader"></a>
### csrfTokenHeader

- **Type**: API key
- **API key parameter name**: x-csrf-token
- **Location**: HTTP header

